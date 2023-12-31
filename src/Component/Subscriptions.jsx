import React, { useState,useEffect } from "react";
import { Videos } from './'
import Signin from './Signin'
import { GetAllsubscriptions } from '../utils/FetchFromApi'




const Subscriptions = ({ session, supabase }) => {
    const [Video, setVideo] = useState([]);

    useEffect(() => {
        if(session){
            GetAllsubscriptions(session)
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
    )
}
export default Subscriptions;