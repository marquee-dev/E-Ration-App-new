import React from "react";
import "./Report.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";

const Report = () => {
  const navigate = useNavigate();
  const handleDetails =() => {
    navigate("/details");
}

const handleStocks = () =>{
  navigate("/stocks");
}
  return (
    <div className="page-r">
      <NavBar/>
    
    
    <div className="profile-r">
      <div className="sidemenu-r">
        <div className="name-r">HI SHOPKEEPER</div>
        <div className="btn-r">
          <button className="bt-r">VIEW APPOINTMENTS</button>
        </div>
        <div className="list-r">
          <button className="bt-r"onClick={()=>{handleStocks()}}>Remaining Stocks</button>
          <button className="bt-r" onClick={()=>{handleDetails()}}>View Customer Details</button>
          
          <button className="btselect-r">Sales Report</button>
        </div>
      </div>
      <div className="profiledisplay-r">
      <div className="title-r">SALES REPORT</div>
      <div className="card-d">
            <label className="cardlabel-d">DATE :</label>
            <input type="text" className="input-d"></input>
            <div className="buttonview">
              <button className="viewreport-d">VIEW REPORT</button>
            </div>
          </div>
        <div className="section-r">
          
         
        </div>
        <div className="details-r">
        <div className="relation-r">
          <div className="rel1-r">
            <div className="name-r">ITEMS</div>
            <div className="quant-r">TOTAL QUANTITY</div>
            <div className="price-r">TOTAL AMOUNT</div>
          </div>
          <div className="rel2-r">
            <div className="line-r"></div>
          </div>
          <div className="rel3-r">
          <div className="line-r"></div>
          <div className="total">
            <label className="totalcust">TOTAL NO. OF CUSTOMERS : </label>
            <label className="totalamt">TOTAL AMOUNT : </label>
          </div>
          </div>
        </div>
       
          
        </div>
      </div>
    </div>
    </div>
  );
};
export default Report;
