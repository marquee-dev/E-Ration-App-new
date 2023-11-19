import React from "react";
import "./CreateAcct_1.scss";

export default function CreateAcct_1()
{
    return(
        <div className="createaccount">
           <div className="createbox">
            <div className="createboxleft">
                <span>CREATE A <br /> NEW <br /> ACCOUNT</span>
            </div>
            <div className="createboxright">
                <div className="createboxrightform">
                <label className="username">Username</label>
                <input type="text" placeholder="Enter your username"/>
                <label className="password">Password</label>
                <input type="text"placeholder="Enter your password"/>
                <label className="password">Confirm Password</label>
                <input type="text"placeholder="Enter password again"/>
                </div>
                <div className="createboxrightbutton">
                <button>Next</button>  
                </div>
            </div>
           </div>
        </div>
    );
}