import React, { useEffect } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ReactPlayer from "react-player";
import "./Stream.css";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../../context/data-context";
import { useAuth } from "../../context/auth-context.js";

function Stream() {
  const { videoID } = useParams();
  const navigate = useNavigate();
  const { state, addToLikedVideos,addToHistory, deleteFromLikedVideos } = useData();
  const { videos } = state;
  const { token } = useAuth();

  function findVideo(id) {
    const currentVideo = videos.find((video) => video._id === id);
    return currentVideo;
  }

  const playingVideo = findVideo(videoID);

  function likeHandler() {
    if (token) {
      if (state.likedVideos.some((video) => video._id === videoID)) {
        deleteFromLikedVideos(playingVideo);
      } else {
        addToLikedVideos(playingVideo);
      }
    } else {
      navigate("/login");
    }
  }

  function historyHandler(){
    if(token){
      if(!state.history.some(video => video._id === videoID)){
        addToHistory(playingVideo);
      }
    }
  }

  return (
    <main className="stream-container">
      <SideBar />
      <section className="stream-content">
        <div className="player-container">
          <div className="player-card">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoID}`}
              controls={true}
              width="100%"
              onStart={historyHandler}
            ></ReactPlayer>
            <div className="video-description">
              {/* using option chaining so that it will not throw error while re-rendering until data is fetched */}
              <h3>{playingVideo?.title}</h3>
              <div className="video-options">
                <span
                  onClick={likeHandler}
                  className={
                    state.likedVideos.some((video) => video._id === videoID)
                      ? "fill-cta"
                      : ""
                  }
                >
                  <i
                    className={
                      state.likedVideos.some((video) => video._id === videoID)
                        ? "bi bi-hand-thumbs-up-fill fill-cta"
                        : "bi bi-hand-thumbs-up-fill"
                    }
                  ></i>
                  {state.likedVideos.some((video) => video._id === videoID)
                    ? "Liked"
                    : "Like"}
                </span>
                <span>
                  <i className="bi bi-music-note-list"></i>Add to Playlist
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export { Stream };
