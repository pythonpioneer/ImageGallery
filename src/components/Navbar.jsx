import React from 'react';


// component to render navigation bar
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" style={{fontFamily: "Pattaya", fontSize: "30px", fontWeight: "bold"}} href="#">Image Gallery</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold" href="#">Explore</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold" href="#">Collection</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Community
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{borderRadius: "10px"}} />
                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    </form>
                </div>
            </nav>
        </>
    )
}
