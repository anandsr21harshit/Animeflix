import React from 'react'
import "./LandingPage.css"
import {Link} from "react-router-dom"

function LandingPage() {
  return (
    <main className='landing-container'>
        <div className='landing-content'>
            <h1>Welcome to ANIMEFLIX</h1>
            <p>Explore the world of Anime</p>
            <Link to={"/home"}><button className='btn btn-danger'>Explore</button></Link>
        </div>
    </main>
  )
}

export {LandingPage}