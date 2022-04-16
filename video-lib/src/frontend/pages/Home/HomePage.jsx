import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import "./HomePage.css"

function HomePage() {
  return (
      <div className="home-page-container">
          <SideBar/>
          <section className='home-page-content'></section>
      </div>
  )
}

export default HomePage