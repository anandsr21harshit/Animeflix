import React from "react";
import { useAuth } from "../../context/auth-context";

import "./Profile.css";

function Profile() {
  const userDetails = JSON.parse(localStorage.getItem("loginCred"));
  const {logOutHandler} = useAuth();


  return (
    <div className="container prof-container">
      <section className="profile">
        <header className="profile-title">
          <h1>User Details</h1>
        </header>
        <main className="profile-details">
          <p>First Name: {userDetails?.user?.firstName}</p>
          <p>Last Name: {userDetails?.user?.lastName}</p>
          <p>Email: {userDetails?.user?.email}</p>
          <button className="btn btn-primary" onClick={logOutHandler}>Logout</button>
        </main>
      </section>
    </div>
  );
}

export { Profile };
