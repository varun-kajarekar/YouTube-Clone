import React from 'react'
import { Link } from 'react-router-dom';

function VideoCard({ videos }) {
  return (
    <div className="col-md-4 my-4" >
      <div className=" videocontainer mb-2" style={{ border: '1px solid black' }}>
        <img src={videos?.snippet?.thumbnails?.high?.url} alt={videos?.snippet?.title} />
      </div>
      <div className="card-body">
        <p className="card-text text-black fw-semibold mb-1">{videos?.snippet?.title}</p>
        <span></span>
        <span className="text-black card-subtitle">{videos?.snippet?.channelTitle}</span>
      </div>
    </div>
  )
}

export default VideoCard