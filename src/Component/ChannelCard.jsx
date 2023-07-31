import React from 'react'
import VerifyLogo from '../utils/verify.png';
import { Link } from 'react-router-dom';


function ChannelCard({Channel}) {
  return (
    <div className="col-md-4 my-4" >
      <Link to={`/channel/${Channel?.id?.channelId}`}>

      <div className="position-relative videocontainer mb-2" style={{ border: '1px solid black'}}>
        <img src={Channel?.snippet?.thumbnails?.high?.url} alt={Channel?.snippet?.title} />
        <div class="position-absolute bottom-0 end-0 bg-black text-white rounded-pill px-2 m-1">Channel</div>
      </div>
      <div className="card-body">
        <p className="card-text text-black fw-semibold mb-1">{Channel?.snippet?.title}  <img src = {VerifyLogo} style={{height:'20px'}}/></p>
      </div>
      </Link>
    </div>
  )
}

export default ChannelCard