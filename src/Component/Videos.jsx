import React from 'react';
import {VideoCard,ChannelCard} from './';




const Videos = ({Video}) => {
  return (
    
    <div className="container">
		<div className="row">

            {
                Video.map((item)=>(
                    item.id.videoId && <VideoCard videos = {item} key={item?.snippet?.title}/>  
                ))
            }

        </div>
    </div>
  )
}
export default Videos