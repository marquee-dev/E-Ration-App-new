import React from "react";
import "./CreateAcct_2.scss";

export default function CreateAcct_2()
{
    return(
        <div className="create-2account">
           <div className="create-2box">
            <div className="create-2boxleft">
                <span>CREATE A <br /> NEW <br /> ACCOUNT</span>
            </div>
            <div className="create-2boxright">
                <div className="create-2boxrightform">
                <label className="username">Card Holders Name</label>
                <input type="text" placeholder="Enter your name" className="hi"/>
                <div className="create-2boxcarddetails">
                    <div className="error">
                    <label>Card No</label>
                <input type="text" placeholder="Enter Card Number"/>
                    </div>
                <div className="error">
                <label >Aadhar No</label>
                <input type="text" placeholder="Enter Aadhar No"/>
                </div>
                </div>
                <div className="create-2boxcarddetails">
                    <div className="error">
                    <label>Phone Number</label>
                <input type="text" placeholder="Enter Phone Number"/>
                    </div>
                <div className="error">
                <label >One Time Password</label>
                <input type="text" placeholder="Enter OTP"/>
                </div>
                </div>
                </div>
                <div className="create-2boxrightbutton">
                <button>Verify</button>  
                </div>
            </div>
           </div>
        </div>
    );
}