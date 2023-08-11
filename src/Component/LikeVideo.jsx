import React , { useState,useEffect } from "react";
import { Videos } from './'
import Signin from './Signin'
import { GetLikesubscriptions } from '../utils/FetchFromApi'


const LikeVideo=({ session, supabase })=>{
    const [Video, setVideo] = useState([]);

    useEffect(() => {
        if(session){
            GetLikesubscriptions(session)
            .then((data) => {
            setVideo(data.items)
        })
        }
      }, [session])
    return (
        <>
            {
                session ?
                    <div className="d-flex flex-column">
                        <div className="p-2">
                            <Videos Video={Video} />
                        </div>

                    </div>
                : <Signin session = {session} supabase = {supabase}/>
            }


        </>
    );
}

export default LikeVideo;