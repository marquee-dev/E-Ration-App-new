import React from "react";
import "./Transaction.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const navigate = useNavigate();
  const handleProfile =() => {
    navigate("/profile");
}
const handleBooking = () =>{
  navigate("/booking");
}
const handleItems = () =>{
    navigate("/items")
}
  return (
    <div className="page-t">
      <NavBar/>
    
    
    <div className="profile-t">
      <div className="sidemenu-t">
        <div className="name-t">HI CUSTOMER</div>
        <div className="btn-t">
          <button className="bt-t">BOOK AN APPOINTMENT</button>
        </div>
        <div className="list-t">
          <button className="bt-t"onClick={()=>{handleProfile()}}>View Full Profile</button>
          <button className="bt-t" onClick={()=>{handleBooking()}}>Booked Appointments</button>
          <button className="bt-t"onClick={()=>{handleItems()}}>Available Items</button>
          <button className="btselect-t">Transactions</button>
        </div>
      </div>
      <div className="profiledisplay-t">
        <div className="section-t">
          <div className="title-t">TRANSACTION</div>
         
        </div>
        <div className="details-t">
        
        <div className="relation-t">
          <div className="rel1-t">
            <div className="transact-t">LAST TRANSACTION</div>
            <div className="quant-t">ITEM & QUANTITY</div>
            <div className="price-t">PRICE</div>
          </div>
          <div className="rel2-t">
            <div className="line-t"></div>
          </div>
        </div>
       <div className="detailssub">
        <div className="iddate">
            <label className="id">ID</label>
            <label className="date">DATE</label>
        </div>
        <div className="provol">
        <label className="product">PRODUCT</label>
            <label className="volume">VOLUME</label>
        </div>
        <div className="amt">
        <label className="amount">AMOUNT</label>
        </div>
       </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default Transaction;
