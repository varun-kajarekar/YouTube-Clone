import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { FetchVideoDetails, FetchchannelsDetails } from '../utils/FetchFromApi'
import Like from '../utils/like.png'
import DisLike from '../utils/dislike.png'


const VideoDetail = () => {
  const [Video, setVideo] = useState([])
  const [Channel, setChannel] = useState([])
  const { id } = useParams();

  useEffect(() => {
    FetchVideoDetails(`${id}`)
      .then((data) => {
        setVideo(data.items);
        FetchchannelsDetails(data.items[0]?.snippet?.channelId)
          .then((data) => { setChannel(data?.items[0]) });
      });
  }, [id])

  function formatNumber(num, precision = 2) {
    const map = [
      { suffix: 'T', threshold: 1e12 },
      { suffix: 'B', threshold: 1e9 },
      { suffix: 'M', threshold: 1e6 },
      { suffix: 'K', threshold: 1e3 },
      { suffix: '', threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }

    return num;
  }
  let subCount = '100M';
  subCount= formatNumber(Channel?.statistics?.subscriberCount);
  let likeCount = '1K';
  likeCount = formatNumber(Video[0]?.statistics?.likeCount);
  return (
    <div>
      <ReactPlayer
        className='react-player'
        url={`https://www.youtube.com/watch?v=${id}`}
        controls='true'
        width='100%'
      />
      <div className='container fs-5 my-2 fw-bolder'>
        {Video[0]?.snippet?.localized?.title}
      </div>
      <div className='container d-flex justify-content-between p-0'>
      <div className='d-flex align-items-center'>
        <div className='d-inline-flex '>
          <img src={Channel?.snippet?.thumbnails?.default?.url} className='rounded-circle' height={50} />
        </div>
        <div className='d-flex flex-column mx-2'>
          <div class="fw-semibold">{Video[0]?.snippet?.channelTitle}</div>
          <div class="fw-lighter">{subCount} subscribers</div>
        </div>
        <div>
          <button type="button" className="btn btn-dark rounded-pill ml-4">Subscribe</button>
        </div>
      </div>

      
      <div className='d-flex align-items-center'>
      <button type="button" class="btn btn-light rounded-start-pill"><img src = {Like} height='20px'/><span className='ms-2'>{likeCount}</span></button>
      <button type="button" class="btn btn-light rounded-end-pill"><img src = {DisLike} height='20px'/></button>
      </div>
      </div>
      


    </div>

  )
}

export default VideoDetail