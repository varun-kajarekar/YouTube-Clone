import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import VerifyLogo from '../utils/verify.png';
import { FetchchannelsDetails } from '../utils/FetchFromApi'



function VideoCard({ videos }) {
  const [Channel, setChannel] = useState([])
  let Duration = videos?.contentDetails?.duration
  let vid = "";


  if (videos?.id?.videoId) {
    vid = videos?.id?.videoId
  } else {
    vid = videos?.id
  }


  if(Duration) {
    Duration = Duration.replace(/[^0-9a-z]/g, ':').slice(2).slice(0, -1);
    if(Duration.length === 2) {
      Duration = '0:' + Duration
    }
  }else{
    Duration=''
  }


  
  useEffect(() => {
    FetchchannelsDetails(videos?.snippet?.channelId)
      .then((data) => { setChannel(data?.items[0]) });
  }, [])

  


  return (

    <div className="col-md-4 my-4" >
      <Link to={`/video/${vid}`}>
        <div className=" videocontainer position-relative mb-2" style={{ border: '1px solid black' }}>
          <img src={videos?.snippet?.thumbnails?.high?.url} alt={videos?.snippet?.title}/>
          <div className="position-absolute bottom-0 end-0 bg-black text-white rounded-pill px-2 m-1"><span style={{ fontSize: '12px' }}>{Duration}</span></div>

        </div>

        <div className="card-body">
          <div className='d-flex align-items-center'>
            <div className='d-inline-flex '>
              <img src={Channel?.snippet?.thumbnails?.default?.url} className='rounded-circle' height={50} />
            </div>
            <div className='d-flex flex-column mx-2'>
              <div className="fw-bold">{videos?.snippet?.title}</div>
              <div className="fw-lighter">{videos?.snippet?.channelTitle} <img src={VerifyLogo} style={{ height: '15px' }} /></div>
            </div>
          </div>
        </div>

      </Link>
    </div>

  )
}

export default VideoCard