import React from 'react'
import {Link} from "react-router-dom"
import "./VideoCard.css"
 
function VideoCard({
    _id,
    title,
    videoUrl,
    category
}) {
  return (
    <div className='video-card'>
       <Link to={`/home/${_id}`} className="no-text-decoration">
           <div className="video-img-container">
               <img src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} alt="Video Thumbnail" className='video-thumbnail' />
           </div>
           <div className="video-header">
               <p className='video-title'>{title}</p>
               <i className="bi bi-three-dots-vertical"></i>
           </div>
           <div className="video-footer">
               <p className="video-category">{category}</p>
           </div>
        </Link> 
    </div>
  )
}

export default VideoCard