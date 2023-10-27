import React, { useState } from 'react';
import { useTheme } from '../context/themeContext';


// component to render navigation bar
export default function Navbar() {

    // fetch the values from the theme context
    const { colorPalletes, theme, setTheme } = useTheme();
    const [modeColor, setModeColor] = useState(colorPalletes.light);

    // change the theme of the app
    const handleToggleTheme = () => {
        if (theme === "dark") {
            setTheme("light");
            setModeColor(colorPalletes.light);
            document.body.style.backgroundColor = colorPalletes.light.background;
        }
        else {
            setTheme("dark");
            setModeColor(colorPalletes.dark);
            document.body.style.backgroundColor = colorPalletes.dark.background;
        }
    }

    // return the jsx to render the content
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{ backgroundColor: modeColor.background }}>
                <div className="container"> {/* Wrap the content in a container */}
                    <a className="navbar-brand" style={{ fontFamily: "Pattaya", fontSize: "30px", fontWeight: "bold", marginBottom: "10px", color: modeColor.text }} href="#">
                        Image Gallery
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center ml-4" id="navbarSupportedContent"> {/* Add justify-content-center */}
                        <form className="form-inline my-2 my-lg-0"> {/* Add mr-2 for right margin */}
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: "10px", backgroundColor: theme == "dark" ? "#4F4F4F" : "#FFFFFF", color: theme === "dark" && colorPalletes.dark.text }} />
                        </form>
                        <ul className="navbar-nav mr-5" >
                            <li className="nav-item active ml-3">
                                <a className="nav-link font-weight-bold" href="#" style={{ color: modeColor.text }}>
                                    Explore
                                </a>
                            </li>
                            <li className="nav-item active ml-3">
                                <a className="nav-link font-weight-bold" href="#" style={{ color: modeColor.text }}>
                                    Collection
                                </a>
                            </li>
                            <li className="nav-item active ml-3">
                                <a className="nav-link font-weight-bold" href="#" id="navbarDropdown" role="button" aria-expanded="false" style={{ color: modeColor.text }}>
                                    Community
                                </a>
                            </li>
                            <li className="nav-item ml-3">
                                <div className="d-flex align-items-center">
                                    <div className="nav-link active font-weight-bold" id="navbarDropdown" style={{width: "110px", color: modeColor.text }} >
                                        {theme === "light" ? "Dark" : "Light"} Mode
                                    </div>
                                    <div className="custom-control custom-switch nav-link ml-4">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={handleToggleTheme} style={{ outline: 'none' }} defaultunchecked />
                                        <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
