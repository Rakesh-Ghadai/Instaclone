import React from "react";
import Header from "./Header";
import { useState,useEffect } from "react";
import axios from "axios";

import Postview from "./Postview";

const Main =() =>{
    const [users, setUsers]= useState([]);
    useEffect(()=>{
        //axios.get("https://instaclone-10x-app.herokuapp.com/user")
        axios.get("http://localhost:3002/user")
        .then(res=>{
            setUsers(res.data.user)
            //console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    })
    return(
       
        <>
             <Header/>
            {[...users].reverse().map((user)=>{
                return(
                    <Postview key={user._id} name={user.user_name} image={user.user_image} location={user.user_location} description={user.description}  date={user.date} like={user.likes}/>
                )
            }
            )}
        </>
    );
}

export default Main;