import React, { useState } from "react";
import "./CreateAcct_1.scss";
import { useNavigate } from "react-router-dom";

export default function CreateAcct_1()
{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword]=useState('')
    const navigate=useNavigate();
    const handleVerify = () =>{
        if(username.length === 0)
        {
            alert("Please enter a username")
        }
        else if(password.length === 0)
        {
            alert("Please enter a password")
        }
        else if(confirmpassword.length === 0)
        {
            alert("Please confirm your password")
        }
        else if(password!==confirmpassword)
        {
            alert("Passwords does not match")
        }
        else
        {
            navigate("/verify",{
                state:{
                    username:username,
                    password:password
                }
            }); 

        }
    }

    return(
        <div className="createaccount">
           <div className="createbox">
            <div className="createboxleft">
                <span>CREATE A <br /> NEW <br /> ACCOUNT</span>
            </div>
            <div className="createboxright">
                <div className="createboxrightform">
                <label className="username">Username</label>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter your username"/>
                <label className="password">Password</label>
                <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your password"/>
                <label className="password">Confirm Password</label>
                <input type="text"  onChange={(e)=>{setConfirmpassword(e.target.value)}} placeholder="Enter password again"/>
                </div>
                <div className="createboxrightbutton">
                <button onClick={()=>{handleVerify()}}>Next</button>  
                </div>
            </div>
           </div>
        </div>
    );
}