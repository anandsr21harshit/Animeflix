import React from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useData } from '../../context/data-context';

function SinglePlaylist() {
    const {playlistID} = useParams();
    const {state} = useData();

    // find the particular playlist from playlists array
    const currPlaylist = state.playlists.filter(playlist => playlist._id === playlistID)[0]; // returns an array

  return (
    <div className='container'>
        <SideBar/>
        <section className="single-playlist-wrapper">
            {currPlaylist.videos.length === 0 && <h1>No Videos in playlist</h1>}
            {currPlaylist.videos.length > 0 && currPlaylist.videos.map(video => <VideoCard {...video} key={video._id}/>)}
        </section>
    </div>
  )
}

export {SinglePlaylist}