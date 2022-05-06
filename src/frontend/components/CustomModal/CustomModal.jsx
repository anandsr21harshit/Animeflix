import React from 'react'
import "./CustomModa.css"

function CustomModal() {
  return (
    <ul className='custom-modal'>
        <li className='modal-item'>
          <i className="bi bi-clock-fill"></i>Watch later
        </li>
        <li className="modal-item">
          <i className="bi bi-collection-play-fill"></i>Add to playlist
        </li>
    </ul>
  )
}

export default CustomModal