import React from 'react'
import "./LandingPage.css"

function LandingPage() {
  return (
    <main className='landing-container'>
        <div className='landing-content'>
            <h1>Welcome to ANIMEFLIX</h1>
            <p>Explore the world of Anime</p>
            <button className='btn btn-danger'>Explore</button>
        </div>
    </main>
  )
}

export default LandingPage