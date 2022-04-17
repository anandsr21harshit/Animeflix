import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "./HomePage.css"
import {videos} from "../../../backend/db/videos"
import VideoCard from '../../components/VideoCard/VideoCard'

function HomePage() {
  return (
      <div className="home-page-container">
          <SideBar/>
          <section className='home-page-content'>
              <div className="video-container">
                  {videos.map(video => {
                      return <VideoCard {...video} />
                  })}
              </div>
          </section>
      </div>
  )
}

export default HomePage