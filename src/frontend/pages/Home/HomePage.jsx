import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.css";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useData } from "../../context/data-context";

function HomePage() {
  const { state, dispatch } = useData();

  function categoryHandler(category) {
    dispatch({ type: "SET_CATEGORY", payload: category });
  }

  function filterHandler(data, category) {
    if (category === "All") return data;

    return data.filter((video) => video.category === category);
  }

  const filteredData = filterHandler(state.videos, state.category);


  return (
    <div className="home-page-container">
      <SideBar />
      <section className="home-page-content">
        <div className="categories">
          {state.categories.map((category) => {
            return (
              <span
                className={`chip ${
                  category.categoryName === state.category
                    ? "active-chip"
                    : null
                }`}
                key={category._id}
                onClick={() => categoryHandler(category.categoryName)}
              >
                {category.categoryName}
              </span>
            );
          })}
        </div>
        <div className="video-container">
          {filteredData.map((video) => {
            return <VideoCard {...video} key={video._id} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
