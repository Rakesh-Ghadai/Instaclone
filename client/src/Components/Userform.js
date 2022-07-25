import { useState } from "react";
import {Link} from "react-router-dom"
import Header from "./Header";
import axios from "axios";
import FileBase64 from "react-file-base64";
const Userform = ()=> {
    const [userState, setUserState] = useState({user_name:"", user_image:"", user_location:"", description:""});
        const handleUserAdd = ()=> {
        console.log(userState);
        axios({
             //url: "https://instaclone-10x-app.herokuapp.com/add",
            url:"http://localhost:3002/user",
            method: "POST",
            headers: {
            },
            data: userState
        }).then((res)=> {
            console.log(res)
        }).catch((err)=> {
            console.log(err)
        })
    }
    // const handleInputChange = (e, id)=> {
       
    //     setUserState({...userState,[id]: e.target.value})
    // }
    return (
        <>
            <Header/>
            <div className="main_user_form">
                
                <form>
                <div className="user_form">
                    <div className="input-file">
                    <FileBase64
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setUserState({ ...userState, user_image: base64 })}
                        className="upload_box"
                        />
                    </div>
                   
                    <div className="user_name"> <input type="text" placeholder="Author" onChange={e=>setUserState({...userState, user_name:e.target.value})}/></div>
                    <div className="user_location"><input type="text" placeholder="Location" onChange={e=>setUserState({...userState, user_location:e.target.value})}/></div>
                    <div className="user_description"><input type="text" placeholder="Description" onChange={e=>setUserState({...userState, description:e.target.value})}/></div>
                    </div>
                </form>
                
                <div className="user_post">
                <Link to='/Main'><button type="button" onClick={handleUserAdd}>POST</button></Link>
                </div>
            </div>
        </>
    )
}
export default Userform;