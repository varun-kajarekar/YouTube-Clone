import React, { useState,useEffect } from "react";
import { Videos } from './'
import Signin from './Signin'



const Subscriptions = ({ session, supabase }) => {
    const [Video, setVideo] = useState([]);

    useEffect(() => {
        if(session){
            fetch("https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=AIzaSyAaVKiY4qRZ0l5qRydflA4J7GY92afBOFk", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + session.provider_token
            }
        }).then((data) => {
            return data.json()
        }).then((data) => {
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
    )
}
export default Subscriptions;