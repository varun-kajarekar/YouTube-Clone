import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { FetchVideoDetails,FetchchannelsDetails } from '../utils/FetchFromApi'


const VideoDetail = () => {
  const [Video, setVideo] = useState([])
  const {id}= useParams();

  useEffect(() => {
    FetchVideoDetails(`${id}`)
      .then((data) => { setVideo(data.items) });
    // FetchchannelsDetails(Video[0]?.snippet?.channelId)
    //   .then((data) => { console.log(data.items,"----") });
  }, [id])
  return (
    <div>
      <ReactPlayer 
        className='react-player'
        url={`https://www.youtube.com/watch?v=${id}`} 
        controls='true'
        width='100%'
      />
      <div className='container mx-5 fs-5 mt-2 fw-bolder'>
          {Video[0]?.snippet?.localized?.title}
      </div>
      <div className='container mx-5 fw-semibold'>{Video[0]?.snippet?.channelTitle}</div>
    </div>

  )
}

export default VideoDetail