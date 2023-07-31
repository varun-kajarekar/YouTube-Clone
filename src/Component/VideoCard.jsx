import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import VerifyLogo from '../utils/verify.png';


function VideoCard({ videos }) {
  const Duration= videos?.contentDetails?.duration
  let vid = "";
  if(videos?.id?.videoId){
    vid = videos?.id?.videoId
  }else{
    vid = videos?.id
  }
  return (
    
    <div className="col-md-4 my-4" >
      <Link to={`/video/${vid}`}>
      <div className=" videocontainer position-relative mb-2" style={{ border: '1px solid black' }}>
        <img src={videos?.snippet?.thumbnails?.high?.url} alt={videos?.snippet?.title} />
        <div class="position-absolute bottom-0 end-0 bg-black text-white rounded-pill px-2 m-1"><span style={{fontSize: '12px'}}>{Duration}</span></div>

      </div>
      <div className="card-body">
        <p className="card-text text-black fw-semibold mb-1">{videos?.snippet?.title}</p>
        
        <span></span>
        <span className="text-black card-subtitle">{videos?.snippet?.channelTitle} <img src = {VerifyLogo} style={{height:'15px'}}/></span>
      </div>
      </Link>
    </div>
    
  )
}

export default VideoCard