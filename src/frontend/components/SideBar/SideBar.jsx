import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <aside className="side-bar">
        <ul className="list-container">
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i className="bi bi-house-door-fill"></i>Home
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i className="bi bi-collection-play-fill"></i> PlayList{" "}
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
            <i className="bi bi-clock-history"></i>History
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i className="bi bi-hand-thumbs-up-fill"></i>Liked Videos
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i className="bi bi-clock-fill"></i>Watch Later
            </Link>
          </li>
        </ul>
      </aside>

      {/* Mobile Navigation */}

      <nav className="mobile-nav">
        <Link to={"#"} className="mobile-nav-link">
          <i className="bi bi-house-door-fill"></i>
          <span>Home</span>
        </Link>
        <Link to={"#"} className="mobile-nav-link">
          <i className="bi bi-collection-play-fill"></i>
          <span>Playlist</span>
        </Link>
        <Link to={"#"} className="mobile-nav-link">
          <i className="bi bi-hand-thumbs-up-fill"></i>
          <span>Liked Videos</span>
        </Link>
        <Link to={"#"} className="mobile-nav-link">
          <i className="bi bi-clock-fill"></i>
          <span>Watch Later</span>
        </Link>
      </nav>
    </>
  );
}

export default SideBar;
