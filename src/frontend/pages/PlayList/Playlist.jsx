import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import {Link} from "react-router-dom";
import "./Playlist.css";
import { useData } from "../../context/data-context";

function Playlist() {
  const { state, deletePlaylist } = useData();

  function getThumbnail(playlist) {
    return playlist.videos.length === 0
      ? "https://i.ytimg.com/img/no_thumbnail.jpg"
      : `https://i.ytimg.com/vi/${playlist.videos[0]._id}/0.jpg`;
  }

  function deleteHandler(playlistID){
    deletePlaylist(playlistID);
  }

  return (
    <div className="container">
      <SideBar />
      <section className="playlist-wrapper">
        {state.playlists.length === 0 && <h1>No Playlist Created</h1>}
        {state.playlists.map((playlist) => {
          return (
            <div className="video-card playlist-card" key={playlist._id}>
              <Link to={`/playlist/${playlist._id}`} className="no-text-decoration">
                <div className="video-img-container">
                  <img
                    src={getThumbnail(playlist)}
                    alt="Video Thumbnail"
                    className="video-thumbnail"
                  />
                </div>
                <div className="video-count-wrapper">
                  <div>{playlist.videos.length === 0 ? "" : playlist.videos.length}</div>
                  <i className="bi bi-collection-play"></i>
                </div>
                <div className="video-header">
                  <p className="video-title">{playlist.title}</p>
                  <i className="bi bi-trash-fill"  title="Delete Playlist" onClick={(e)=> {
                    e.preventDefault()
                    deleteHandler(playlist._id)
                    }}></i>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export { Playlist };
