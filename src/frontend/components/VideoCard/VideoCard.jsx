import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../../context/data-context";
import CustomModal from "../CustomModal/CustomModal";
import "./VideoCard.css";

function VideoCard({ _id, title, videoUrl, category }) {
  const location = useLocation();
  const [trash, setTrash] = useState(false);
  const {deleteFromHistory } = useData();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (location.pathname === "/history") {
      setTrash(true);
    }
  }, []);

  function deleteHandler(id) {
    deleteFromHistory(id);
  }

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
              title="Delete from history"
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
        />
      )}
    </div>
  );
}

export default VideoCard;
