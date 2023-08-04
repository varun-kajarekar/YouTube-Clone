import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../utils/yt_light.png'
import Signin from './signin'
import UserInfo from './userInfo'


const NavBar = ({ session, supabase }) => {

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
                        session ?<UserInfo session = {session} supabase = {supabase}/>:<Signin session = {session} supabase = {supabase}/>
                    }
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default NavBar