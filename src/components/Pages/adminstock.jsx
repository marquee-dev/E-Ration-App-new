import React from "react";
import "./AdminStock.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";

const AdminShop = () => {
  const navigate = useNavigate();
  const handleProfile =() => {
    navigate("/profile");
}
const handleBooking = () =>{
  navigate("/booking");
}
const handleTransactions = () =>{
  navigate("/transaction");
}
  return (
    <div className="page-ad">
      <NavBar/>
    
    
    <div className="profile-ad">
      <div className="sidemenu-ad">
        <div className="name-ad">    <label>ADMIN</label>
          <label><br/>PROFILE</label></div>
        <div className="list-ad">
          <button className="bt-ad"onClick={()=>{handleProfile()}}>View Shopkeeper List</button>
          <button className="bt-ad" onClick={()=>{handleBooking()}}>New User Verification</button>
          <button className="btselect-ad">Available Items</button>
          <button className="bt-ad"onClick={()=>{handleTransactions()}}>Transactions</button>
        </div>
      </div>
      <div className="profiledisplay-ad">
        <div className="section-ad">
          <div className="title-ad">ITEMS AVAILABLE FOR THE MONTH</div>
         
        </div>
        <div className="details-ad">
        <div className="sort-ad">
            <button className="srt-ad">SORT: <span>A-Z</span></button>
        </div>
        <div className="relation-ad">
          <div className="rel1-ad">
            <div className="name-ad">ITEM NAME</div>
            <div className="quant-ad">QUANTITY</div>
            <div className="price-ad">PRICE/KG</div>
          </div>
          <div className="rel2-ad">
            <div className="line-ad"></div>
          </div>
        </div>
       
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default AdminShop;
