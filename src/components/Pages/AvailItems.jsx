import React from "react";
import "./AvailItems.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";

const AvailItems = () => {
  const navigate = useNavigate();
  const handleProfile =() => {
    navigate("/profile");
}
const handleBooking = () =>{
  navigate("/booking");
}
  return (
    <div className="page-a">
      <NavBar/>
    
    
    <div className="profile-a">
      <div className="sidemenu-a">
        <div className="name-a">HI CUSTOMER</div>
        <div className="btn-a">
          <button className="bt-a">BOOK AN APPOINTMENT</button>
        </div>
        <div className="list-a">
          <button className="bt-a"onClick={()=>{handleProfile()}}>View Full Profile</button>
          <button className="bt-a" onClick={()=>{handleBooking()}}>Booked Appointments</button>
          <button className="btselect-a">Available Items</button>
          <button className="bt-a">Transactions</button>
        </div>
      </div>
      <div className="profiledisplay-a">
        <div className="section-a">
          <div className="title-a">ITEMS AVAILABLE FOR THE MONTH</div>
         
        </div>
        <div className="details-a">
        <div className="sort-a">
            <button className="srt-a">SORT: <span>A-Z</span></button>
        </div>
        <div className="relation-a">
          <div className="rel1-a">
            <div className="name-a">NAME</div>
            <div className="rel-a">RELATION</div>
          </div>
        </div>
       
          <div className="rel2-a">
            <div className="line-a"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default AvailItems;
