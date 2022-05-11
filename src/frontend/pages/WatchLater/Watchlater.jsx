import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import VideoCard from '../../components/VideoCard/VideoCard';
import { useData } from '../../context/data-context'
import "./watchlater.css"

function Watchlater() {
  const {state} = useData();
  const {watchlater} = state;

  return (
    <div className="watchlater-page-container">
      <SideBar/>
      <section className="video-wrapper">
       {watchlater.length === 0 && <h1>No videos added to watch later yet</h1>}
       {watchlater.length > 0 && 
          watchlater.map(watched => <VideoCard {...watched} key={watched._id}/>)}
      </section>
    </div>
  )
}

export  {Watchlater}