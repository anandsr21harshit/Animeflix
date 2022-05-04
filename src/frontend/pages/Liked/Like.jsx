import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/data-context";
import "./Like.css";

function Like() {
  const { state } = useData();
  const { likedVideos } = state;

  return (
    <div className="like-page-container">
      <SideBar></SideBar>
      <div className="video-wrapper">
        {likedVideos.length === 0 && <h1>You haven't liked any video yet</h1>}
        {likedVideos.length > 0 &&
          likedVideos.map((video) => {
            return <VideoCard {...video} key={video._id} />;
          })}
      </div>
    </div>
  );
}

export { Like };
