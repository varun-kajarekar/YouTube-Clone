import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../utils/yt_light.png'

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg bg-body-tertiaryName" >
            <div className="container-fluid">
                <img
                    src={logo}
                    alt="Logo"
                    height="30"
                    className="d-inline-block  me-2"
                />                
                    <div className="d-flex " id="navbarSupportedContent">
                        <SearchBar />
                    </div>

            </div>
        </div>
    )
}

export default NavBar