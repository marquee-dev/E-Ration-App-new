import React from "react";
import "./Stocks.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";

const Stocks = () => {
  const navigate = useNavigate();
  const handleDetails =() => {
    navigate("/details");
}

const handleReport = () =>{
  navigate("/report");
}
  return (
    <div className="page-s">
      <NavBar/>
    
    
    <div className="profile-s">
      <div className="sidemenu-s">
        <div className="name-s">HI SHOPKEEPER</div>
        <div className="btn-s">
          <button className="bt-s">VIEW APPOINTMENTS</button>
        </div>
        <div className="list-s">
          <button className="btselect-s">Remaining Stocks</button>
          <button className="bt-s" onClick={()=>{handleDetails()}}>View Customer Details</button>
          
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
// .modal-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.6); /* Adjust the opacity to control the blur effect */
//   backdrop-filter: blur(5px); /* Adjust the blur amount */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999; /* Make sure the modal appears above other content */
// }

// /* Styles for the modal content */
// .modal {
//   background: rgba(23, 7, 32, 1);;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//   // max-width: 80%;
//   // max-height: 80%;
//   box-sizing: border-box;
//   border: 1px solid white;
//   width: 40vw;
//   height: 45vh;
//   overflow-y: auto;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   font-family: 'Sarabun',sans-serif;