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
                    height="35"
                    className="d-inline-block  me-2"
                />

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse nav justify-content-end"
                    id="navbarSupportedContent"
                >
                    <div className="d-flex " id="navbarSupportedContent">
                        <SearchBar />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar