import React from 'react';
import {VideoCard} from './';




const Videos = ({Video}) => {
  return (
    
    <div className="container">
		<div className="row">

            {
                Video.map((item)=>(
                    <VideoCard videos = {item} key={item?.snippet?.title}/>
                ))
            }

        </div>
    </div>
  )
}
export default Videos