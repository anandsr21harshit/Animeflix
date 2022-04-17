import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="header-nav">
      <nav className="nav-bar">
        <Link to={"/"}>
          <h1 className="nav-brand">
            <img
              src="https://res.cloudinary.com/mranand/image/upload/c_thumb,w_200,g_face/v1650020956/mypics/logo_uk6eef.png"
              alt="AnimeFilx"
            />
          </h1>
        </Link>
        <ul className="menus">
          <li className="menu">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
