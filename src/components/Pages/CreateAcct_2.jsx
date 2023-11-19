import React, { useState } from "react";
import "./CreateAcct_2.scss";

export default function CreateAcct_2()
{
    const [cardholdersname,setCardholdersname]=useState('');
    const [cardno,setCardno]=useState('');
    const [aadharno,setAadharno]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [otp,setOtp]=useState('');
    const handleProfile = () =>{
        if(cardholdersname.length===0)
        {
            alert("Enter cardholders name")
        }
        else if(cardno.length===0)
        {
            alert("Enter card number")
        }
        else if(aadharno.length===0)
        {
            alert("Enter aadhar number")
        }
        else if(phonenumber.length===0)
        {
            alert("Enter phone number")
        }
        else if(otp.length===0)
        {
            alert("Enter otp")
        }
        else
        {
            window.location.href="/profile"

        }
    }
    return(
        <div className="create-2account">
           <div className="create-2box">
            <div className="create-2boxleft">
                <span>CREATE A <br /> NEW <br /> ACCOUNT</span>
            </div>
            <div className="create-2boxright">
                <div className="create-2boxrightform">
                <label className="username">Card Holders Name</label>
                <input type="text" placeholder="Enter your name" className="hi" onChange={(e)=>{setCardholdersname(e.target.value)}}/>
                <div className="create-2boxcarddetails">
                    <div className="error">
                    <label>Card No</label>
                <input type="text" placeholder="Enter Card Number"  onChange={(e)=>{setCardno(e.target.value)}}/>
                    </div>
                <div className="error">
                <label >Aadhar No</label>
                <input type="text" placeholder="Enter Aadhar No"  onChange={(e)=>{setAadharno(e.target.value)}}/>
                </div>
                </div>
                <div className="create-2boxcarddetails">
                    <div className="error">
                    <label>Phone Number</label>
                <input type="text" placeholder="Enter Phone Number"  onChange={(e)=>{setPhonenumber(e.target.value)}}/>
                    </div>
                <div className="error">
                <label >One Time Password</label>
                <input type="text" placeholder="Enter OTP"  onChange={(e)=>{setOtp(e.target.value)}}/>
                </div>
                </div>
                </div>
                <div className="create-2boxrightbutton">
                <button onClick={()=>{handleProfile()}}>Verify</button>  
                </div>
            </div>
           </div>
        </div>
    );
}