import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'

import { FetchVideoDetails, FetchchannelsDetails,FetchSubDetails } from '../utils/FetchFromApi'
import Like from '../utils/like.png'
import DisLike from '../utils/dislike.png'


const VideoDetail = ({ session, supabase }) => {
  const [Video, setVideo] = useState([])
  const [Channel, setChannel] = useState([])
  const { id } = useParams();
  const [Subscribechannel, setSubscribechannel] = useState([]);
  const [sub, setsub] = useState(false);


  var tempChannel = [];


  useEffect(() => {

    // Get request for video Details 
    FetchVideoDetails(`${id}`)
      .then((data) => {

        // Set the details of video in the Video state
        setVideo(data.items);

        // Get request for channels Details 

        FetchchannelsDetails(data.items[0]?.snippet?.channelId)
          .then((data) => { 

            // Set the details of Channel in the Channel state
            setChannel(data?.items[0]) 

            // I dont know why... at first render the channel details are not store in Channel state so i use tempChannel var for temp... store
            tempChannel = data?.items[0]
            if (session) {

              // Get request for subscribe yt channels  Details of the login user 
              FetchSubDetails(session)
              .then((data) => {
      
                // Set the details of subscribe in the Subscribechannel state
                setSubscribechannel(data.items)

                // Iterate over the details of subscribe to find current yt channel is sub or not
                data.items.map((item)=>{
                  if(item?.snippet?.resourceId?.channelId === tempChannel?.id){

                    // If true then change the state of subscribe to true to render the subscribe button
                    setsub(true);
                  }
              });
              })
      
            }
          });

        
      }
      );
      
  }, [])



  // this function change the Normal number formate to KMB Number formate like for 1000 to 1K or 1,000,000 to 1M
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
  subCount = formatNumber(Channel?.statistics?.subscriberCount);
  let likeCount = '1K';
  likeCount = formatNumber(Video[0]?.statistics?.likeCount);



  const HandleClick = ()=>{
    sub?setsub(false):setsub(true);
  }


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
          <div className='d-inline-flex ms-3'>
            <img src={Channel?.snippet?.thumbnails?.default?.url} className='rounded-circle' height={50} />
          </div>
          <div className='d-flex flex-column mx-2'>
            <div class="fw-semibold">{Video[0]?.snippet?.channelTitle}</div>
            <div class="fw-lighter">{subCount} subscribers</div>
          </div>
          <div>


            {
              
              <button type="button"
                onClick={HandleClick}
                className="btn btn-dark rounded-pill ms-2">
                {
                  sub ? "Unsubscribe" : "Subscribe"
                }
              </button>
            }


          </div>
        </div>


        <div className='d-none d-lg-block d-flex align-items-center'>
          <button type="button" class="btn btn-light rounded-start-pill"><img src={Like} height='20px' /><span className='ms-2'>{likeCount}</span></button>
          <button type="button" class="btn btn-light rounded-end-pill"><img src={DisLike} height='20px' /></button>
        </div>
      </div>



    </div>

  )
}

export default VideoDetail