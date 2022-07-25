import React from "react";
import {Link} from "react-router-dom";
import instafour from "../imges/instafour.jpg";
import instatext from "../imges/instatext.jpg";

const Landingpage = () =>{
    return(
        <>
        <div className="main_div">
            <div className="img_div">
                <img src={instafour} alt="the universe" />
            </div>
            <div className="right_div">
                <div className="inside_right">
                        <img src={instatext} alt="Instaclone"/>
                </div>
                <div className="inside_right_btn">
                <Link to='Main'><button className="btn-hover color-6">Get Started</button></Link>
                </div> 
            </div>
        </div>
        </>
    )

}

export default Landingpage;