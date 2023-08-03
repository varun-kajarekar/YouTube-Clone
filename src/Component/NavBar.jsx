import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../utils/yt_light.png'
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'


const NavBar = () => {
    const session = useSession();
    const supabase = useSupabaseClient();
    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube'
            }
        }
        );
        if (error) {
            console.log(error)
        } else {
            console.log("success")
        }
    }
    async function signOut() {
        await supabase.auth.signOut();
    }
    return (
        <div className="navbar navbar-expand-lg bg-body-tertiaryName sticky-top bg-white" >
            <div className="container-fluid">
                <Link to={`/`}>
                    <img
                        src={logo}
                        alt="Logo"
                        height="30"
                        className="d-inline-block  me-2"
                    />
                </Link>
                <div className="d-flex  " id="navbarSupportedContent">
                    {
                        session ?
                            <>
                                <div class="dropdown d-flex my-1">
                                    <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {session?.user?.user_metadata?.name}
                                    </button>
                                    <ul class="dropdown-menu justify-content-center">
                                        <li><button className='btn btn-light' onClick={signOut}>Sign out</button></li>
                                    </ul>
                                </div>
                                
                            </>
                            :
                            <>
                                <button className='btn btn-light  my-1' onClick={googleSignIn}>Sign In with Google</button>
                            </>
                    }
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default NavBar