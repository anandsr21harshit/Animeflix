import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "./HomePage.css"
import VideoCard from '../../components/VideoCard/VideoCard'
import { useData } from '../../context/data-context'

function HomePage() {
    const {state} = useData();

  return (
      <div className="home-page-container">
          <SideBar/>
          <section className='home-page-content'>
              <div className="video-container">
                  {state.videos.map(video => {
                      return <VideoCard {...video} key={video._id} />
                  })}
              </div>
          </section>
      </div>
  )
}

export default HomePage