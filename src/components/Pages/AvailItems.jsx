import React from "react";
import "./AvailItems.scss";
import NavBar from '../navbar.jsx';
import { useLocation, useNavigate } from "react-router-dom";

const AvailItems = () => {
  const location=useLocation();
  const username=location.state.username;
  const navigate = useNavigate();
  const handleProfile =() => {
    navigate("/profile",{
      state:{
        username:username
      }
    });
}
const handleBooking = () =>{
  navigate("/booking",{
    state:{
      username:username
    }
  });
}
const handleTransactions = () =>{
  navigate("/transaction",{
    state:{
      username:username
    }
  });
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
          <button className="bt-a"onClick={()=>{handleTransactions()}}>Transactions</button>
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
            <div className="name-a">ITEM NAME</div>
            <div className="quant-a">QUANTITY</div>
            <div className="price-a">PRICE/KG</div>
          </div>
          <div className="rel2-a">
            <div className="line-a"></div>
          </div>
        </div>
       
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default AvailItems;
