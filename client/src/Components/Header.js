import React from "react";
import {Link} from "react-router-dom"
import camera from "../imges/cameraLogo.jpg";
import instaclone from "../imges/instacloneLogo.jpg"

const Header=()=>{
    return(
        <>
        <div className="container">
                <header>
                    <div className="nav">
                       <Link to="/"> <img src={instaclone} alt="instclone"></img></Link>
                        <Link to="/Userform"> <img src={camera} alt="camera"></img></Link>
                    </div>
                </header>
                <hr className="line" />
                </div >
        </>
    )
}

export default Header;