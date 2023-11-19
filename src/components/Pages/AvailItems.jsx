import React from "react";
import "./AvailItems.scss";
import NavBar from '../navbar.jsx';

const custprofile = () => {
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
          <button className="bt">Booked Appointments</button>
          <button className="bt">Available Items</button>
          <button className="bt">Transactions</button>
        </div>
      </div>
      <div className="profiledisplay">
        <div className="section">
          <div className="title">ITEMS AVAILABLE FOR THE MONTH</div>
         
        </div>
        <div className="details">
        <div className="sort">
            <button className="srt">SORT</button>
        </div>
        <div className="relation">
          <div className="rel1">
            <div className="name">NAME</div>
            <div className="rel">RELATION</div>
          </div>
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
export default custprofile;
