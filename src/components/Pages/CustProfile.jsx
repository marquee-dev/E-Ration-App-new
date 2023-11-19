import React from "react";
import "./CustProfile.scss";
import NavBar from "../navbar.jsx"
import { useNavigate } from "react-router-dom";

const CustProfile = () => {
  const navigate = useNavigate();
  const handleBooking = () =>{
    navigate("/booking");
  }
  const handleItems = () =>{
    navigate("/items")
} 
  return (
    <div className="page">
      <NavBar/>
    
    
    <div className="profile">
      <div className="sidemenu">
        <div className="name">HI CUSTOMER</div>
        <div className="btn">
          <button className="bt">BOOK AN APPOINTMENT</button>
        </div>
        <div className="list">
          <button className="btselect">View Full Profile</button>
          <button className="bt" onClick={()=>{handleBooking()}}>Booked Appointments</button>
          <button className="bt" onClick={()=>{handleItems()}}>Available Items</button>
          <button className="bt">Transactions</button>
        </div>
      </div>
      <div className="profiledisplay">
        <div className="section">
          <div className="title">PROFILE</div>
          <div className="details">
            <div className="custn">
              CARD NUMBER
              <div className="custnbox">
                
              </div>
            </div>
            <div className="custn">
              CUSTOMER NAME
              <div className="custnbox"></div>
            </div>
            <div className="custn">
              CARD TYPE
              <div className="custnbox"></div>
            </div>
            <div className="custn">
              PHONE NO
              <div className="custnbox"></div>
            </div>
            <div className="custn">
              TALUK
              <div className="custnbox"></div>
            </div>
            <div className="custn">
              ADDRESS
              <div className="custnbox"></div>
            </div>
          </div>
        </div>
        <div className="relation">
          <div className="rel1">
            <div className="name">NAME</div>
            <div className="rel">RELATION</div>
          </div>
          <div className="rel2">
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default CustProfile;
