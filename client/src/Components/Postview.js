import React from "react";
import likelogo from "../imges/likesLogo.jpg"
import sharelogo from "../imges/shareLogo.jpg"


const Postview = (props) =>{


    return(
        <>
            <div className="main_box">
                <div className="top_layer">
                        <div className="top_left">
                            
                            <div className="name">
                            <h4>{props.name}</h4>
                            </div>

                            <div className="location">
                                <p>{props.location}</p>
                            </div>

                        </div>

                        <div className="top_right">
                           <h2>...</h2>
                        </div>
                </div>

                <div className="middle_layer">
                    <img src={props.image} alt="usersnap"/>
                </div>

                <div className="last_layer">
                    <div className="last_top">

                    <div className="last_top_left">
                        <div className="like_class"><img src={likelogo} alt="likes"/></div>
                        <div className="share_class"><img src={sharelogo} alt="share"/></div>
                    </div>

                    <div className="last_top_right">
                        <p>{props.date}</p>
                    </div>

                    </div>

                    <div className="last_middle">
                        <p>{props.like} likes</p>
                    </div>

                    <div className="last_down">
                        <h5>{props.description}</h5>
                    </div>
                        
                </div>

            </div>
                   
        </>

    )

}

export default Postview;