import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideBar() {
  return (
    <>
      <aside className="side-bar">
        <ul className="list-container">
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i class="bi bi-house-door-fill"></i>Home
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i class="bi bi-collection-play-fill"></i> PlayList{" "}
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
            <i class="bi bi-clock-history"></i>History
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i class="bi bi-hand-thumbs-up-fill"></i>Liked Videos
            </Link>
          </li>
          <li className="side-bar-items">
            <Link to={"#"} className="text-link">
              <i class="bi bi-clock-fill"></i>Watch Later
            </Link>
          </li>
        </ul>
      </aside>
      <nav className="mobile-nav">
        <Link to={"#"}>
          <i class="bi bi-house-door-fill"></i>
        </Link>
        <Link to={"#"}>
          <i class="bi bi-collection-play-fill"></i>
        </Link>
        <Link to={"#"}>
          <i class="bi bi-clock-history"></i>
        </Link>
        <Link to={"#"}>
          <i class="bi bi-hand-thumbs-up-fill"></i>
        </Link>
        <Link to={"#"}>
          <i class="bi bi-clock-fill"></i>
        </Link>
      </nav>
    </>
  );
}

export default SideBar;
