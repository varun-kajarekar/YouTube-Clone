import React from "react";

const SubscribeBtn = ({Subscribechannel,Channel,setsub,sub}) => {
    Subscribechannel.map((items)=>{
        if(items?.snippet?.resourceId?.channelId === Channel?.id){
            setsub(true);
        }
    });

    
    return (
        <button type="button" 
        className="btn btn-dark rounded-pill ms-2">
            {
                sub?"Unsubscribe":"Subscribe"
            }
        </button>
    )

}
export default SubscribeBtn;
