import React from 'react'
import { Link } from 'react-router-dom';

function VideoCard({videos}) {
  return (
    <div className="col-md-4 my-4" >
    <div className="card" aria-hidden="true" style={{border:'1px solid white'}}>
        <img src={videos?.snippet?.thumbnails?.high?.url} className="card-img-top" alt={videos?.snippet?.title}/>
        <div className="card-body">
            <p className="card-text text-white">Some quick example text to build on the card title.</p>
        </div>
    </div>
    </div>
  )
}

export default VideoCard