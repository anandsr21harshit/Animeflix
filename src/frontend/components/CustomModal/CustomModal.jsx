import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import "./CustomModal.css";

function CustomModal({ videoID,setShowModal }) {
  const {
    state,
    addToWatchLater,
    removeFromWatchLater,
  } = useData();

  const inWatchLater = state.watchlater.some(video => video._id === videoID)   // true or false

  const { token } = useAuth();
  const navigate = useNavigate();

  const currentVideo = state.videos.find((video) => video._id === videoID);

  function watchLaterHandler(video) {
    if (token) {
      if (state.watchlater.some((watched) => watched._id === video._id)) {
        removeFromWatchLater(video._id);
      } else {
        addToWatchLater(video);
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <ul className="custom-modal">
      <li
        className="modal-item"
        onClick={() => {
          watchLaterHandler(currentVideo);
          setShowModal(false);
        }}
      >
        <i className="bi bi-clock-fill"></i>
        {!inWatchLater && <p>Watch Later</p>}
        {inWatchLater && <p>Remove from Watch Later</p>}
      </li>
      <li className="modal-item">
        <i className="bi bi-collection-play-fill"></i>Add to playlist
      </li>
    </ul>
  );
}

export default CustomModal;
