import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useData } from "../../context/data-context";
import CustomModal from "../CustomModal/CustomModal";
import Modal from "react-modal";
import "./VideoCard.css";

function VideoCard({ _id, title, videoUrl, category }) {
  const location = useLocation();
  const [trash, setTrash] = useState(false);
  const { state, deleteFromHistory, createPlaylist, addVideoToPlaylist, deleteVideoFromPlaylist } =
    useData();
  const [showModal, setShowModal] = useState(false);
  const [reactModal, setReactModal] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const {playlistID} = useParams();

  Modal.setAppElement("#root");

  const currVideo = state.videos.find((video) => video._id === _id);
  const isVideoInPlaylist = (playlist) => playlist.videos.some((video) => video._id === currVideo._id);

  useEffect(() => {
    if (location.pathname === "/history" || location.pathname === `/playlist/${playlistID}`) {
      setTrash(true);
    }
  }, []);

  function deleteHandler(id) {
    if(location.pathname === "/history"){
      deleteFromHistory(id);
    }
    if(location.pathname === `/playlist/${playlistID}`){
      deleteVideoFromPlaylist(id, playlistID);
    }
  }

  function addVideoToPlaylistHandler(video,playlist){
   isVideoInPlaylist(playlist) ? console.error("Already added") : addVideoToPlaylist(video,playlist._id);
  }

  function createPlaylistHandler(playlistName) {
    playlistName && createPlaylist(playlistName);
    setPlaylistName("");
  }

  const customStyle = {
    overlay: {
      top: "6rem",
      backgroundColor: "rgba(52, 58, 64, 0.8)",
    },
    content: {
      width: "18rem",
      height: "20rem",
      margin: "5rem auto",
      backgroundColor: "rgba(15, 23, 30)",
    },
  };
  return (
    <div className="video-card">
      <Link to={`/home/${_id}`} className="no-text-decoration">
        <div className="video-img-container">
          <img
            src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`}
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
        </div>
        <div className="video-header">
          <p className="video-title">{title}</p>
          {!trash && (
            <i
              className="bi bi-three-dots-vertical"
              onClick={(e) => {
                e.preventDefault(); // so that link will not work on click will work
                setShowModal(!showModal);
              }}
            ></i>
          )}
          {trash && (
            <i
              title={location.pathname === "/history" ? "Delete from history" : "Delete From Playlist"}
              className="bi bi-trash-fill"
              onClick={(e) => {
                e.preventDefault();
                deleteHandler(_id);
              }}
            ></i>
          )}
        </div>
        <div className="video-footer">
          <p className="video-category">{category}</p>
        </div>
      </Link>
      {showModal && (
        <CustomModal
          videoID={_id}
          key={_id}
          showModal={showModal}
          setShowModal={setShowModal}
          setReactModal={setReactModal}
        />
      )}
      {reactModal && (
        <Modal isOpen={reactModal} style={customStyle}>
          <header className="modal-header">
            <h3>Save to</h3>
            <i className="bi bi-x-lg" onClick={() => setReactModal(false)}></i>
          </header>
          <section>
            {state.playlists.length > 0 &&
              state.playlists.map((playlist) => {
                return (
                  <div key={playlist._id}>
                    <input
                      type="checkbox"
                      checked={isVideoInPlaylist(playlist)}
                      onChange={() =>{
                        addVideoToPlaylistHandler(currVideo, playlist)
                      }}
                    />
                    <span>{playlist.title}</span>
                  </div>
                );
              })}
          </section>
          <main>
            <label>Name</label>
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </main>
          <button
            className="btn btn-primary"
            onClick={() => createPlaylistHandler(playlistName)}
          >
            Create New Playlist
          </button>
        </Modal>
      )}
    </div>
  );
}

export default VideoCard;
