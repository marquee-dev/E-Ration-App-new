import React, { useState } from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

export default function LoginPage()
{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();
    const handleSignIn = () =>{
        if(username.length === 0)
        {
            alert("Enter username")
        }
        else if(password.length === 0)
        {
            alert("Enter password")
        }
        else
        {
            navigate("/profile")
        }
    }
    const handleCreate = () =>{
        navigate("/create")
    }
    return(
        <div className="loginpage">
           <div className="loginbox">
            <div className="loginboxleft">
                <span>LOGIN TO <br /> YOUR <br /> PROFILE</span>
            </div>
            <div className="loginboxright">
                <div className="loginboxrightform">
                <label className="username">Username</label>
                <input type="text" placeholder="Enter your Username" onChange={(e)=>{setUsername(e.target.value)}}/>
                <label className="password">Password</label>
                <input type="text"placeholder="Enter your Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <span className="forgot">Forgot Password?</span>
                </div>
                <div className="loginboxrightbutton">
                <button onClick={()=>{handleSignIn()}}>Sign in</button>
                    <span onClick={()=>{handleCreate()}}>Create new account</span>
                </div>
            </div>
           </div>
        </div>
    );
}