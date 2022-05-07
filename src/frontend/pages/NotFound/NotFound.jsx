import React from 'react'
import { Link } from 'react-router-dom';
import "./NotFound.css";

function NotFound() {
  return (
    <div className='container not-found-container'>
        <img src="https://d2yjqys1j7uhg1.cloudfront.net/images/page_not_found.svg" alt="" />
        <h1>Page Not Found</h1>
        <h4>Go to <Link to={"/home"}>Home Page</Link></h4>
    </div>
  )
}

export {NotFound}