import React from 'react';
import {VideoCard,ChannelCard} from './';




const Videos = ({Video}) => {
  return (
    
    <div className="container">
		<div className="row">

            {
                Video.map((item)=>(
                    item?.snippet?.categoryId?
                    <VideoCard videos = {item} key={item?.snippet?.title}/>
                    :
                    <ChannelCard Channel = {item} key={item?.snippet?.title}/>
                ))
            }

        </div>
    </div>
  )
}
export default Videos