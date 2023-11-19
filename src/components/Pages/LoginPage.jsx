import React from "react";
import "./LoginPage.scss";
import { useNavigate } from "react-router-dom";

export default function LoginPage()
{
    const navigate = useNavigate();
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
                <input type="text" placeholder="Enter your Username"/>
                <label className="password">Password</label>
                <input type="text"placeholder="Enter your Password"/>
                <span className="forgot">Forgot Password?</span>
                
                </div>
                <div className="loginboxrightbutton">
                <button>Sign in</button>
                    <span onClick={()=>{handleCreate()}}>Create new account</span>
                </div>
            </div>
           </div>
        </div>
    );
}