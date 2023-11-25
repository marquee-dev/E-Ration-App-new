import React from "react";
import "./Stocks.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";

const Stocks = () => {
  const navigate = useNavigate();
  const handleDetails =() => {
    navigate("/details");
}
const handleTime = () =>{
  navigate("/time");
}
const handleReport = () =>{
  navigate("/report");
}
  return (
    <div className="page-s">
      <NavBar/>
    
    
    <div className="profile-s">
      <div className="sidemenu-s">
        <div className="name-s">HI CUSTOMER</div>
        <div className="btn-s">
          <button className="bt-s">VIEW APPOINTMENTS</button>
        </div>
        <div className="list-s">
          <button className="btselect-s">Remaining Stocks</button>
          <button className="bt-s" onClick={()=>{handleDetails()}}>View Customer Details</button>
          <button className="bt-s"onClick={()=>{handleTime()}}>Set Shop Time</button>
          <button className="bt-s"onClick={()=>{handleReport()}}>Sales Report</button>
        </div>
      </div>
      <div className="profiledisplay-s">
        <div className="section-s">
          <div className="title-s">ITEMS AVAILABLE FOR THE MONTH</div>
         
        </div>
        <div className="details-s">
        <div className="sort-s">
            <button className="srt-s">SORT: <span>A-Z</span></button>
        </div>
        <div className="relation-s">
          <div className="rel1-s">
            <div className="name-s">ITEM NAME</div>
            <div className="quant-s">QUANTITY</div>
            <div className="price-s">PRICE/KG</div>
          </div>
          <div className="rel2-s">
            <div className="line-s"></div>
          </div>
        </div>
       
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default Stocks;
