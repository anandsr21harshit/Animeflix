import React from 'react'
import SideBar from '../../components/SideBar/SideBar';
import { useData } from '../../context/data-context'
import VideoCard from '../../components/VideoCard/VideoCard';
import "./History.css"

function History() {
  const {state,deleteAllFromHistory} = useData();
  const historyVideo = state.history;

  function clearHandler(videoID){
    deleteAllFromHistory(videoID);
  }

  return (
    <div className='history-page-container'>
      <SideBar/>
      <section className="history-video-wrapper">
        {historyVideo.length === 0 && <h1>You haven't watched any video yet</h1>}
        {historyVideo.length > 0 && <div><button className='btn btn-primary history-btn' onClick={()=>clearHandler(historyVideo._id)}>Clear History</button></div>}
        {historyVideo.length > 0 && historyVideo.map(video => {
          return <VideoCard {...video} key={video._id} />
        })}
      </section>
    </div>
  )
}

export {History}