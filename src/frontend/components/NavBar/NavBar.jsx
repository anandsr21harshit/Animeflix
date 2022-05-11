import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

function NavBar() {
  const {token} = useAuth()
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
            {!token && <Link to={"/login"}> <button className="btn btn-primary nav-btn">Login</button> </Link>}
            {token && <Link to={"/profile"}><i className="bi bi-person-circle"></i></Link>}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
