import React from "react";
import "./Details.scss";
import NavBar from "../navbar.jsx"
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const handleStocks = () =>{
    navigate("/stocks");
  }
  const handleReport = () =>{
    navigate("/report");
  }

  return (
    <div className="page-d">
      <NavBar/>
    
    
    <div className="profile-d">
      <div className="sidemenu-d">
        <div className="name-d">HI SHOPKEEPER</div>
        <div className="btn-d">
          <button className="bt-d">VIEW APPOINTMENTS</button>
        </div>
        <div className="list-d">
          <button className="bt-d" onClick={()=>{handleStocks()}}>Remaining Stocks</button>
          <button className="btselect-d">View Customer Details</button>
          <button className="bt-d" onClick={()=>{handleReport()}}>Sales Report</button>
          
        </div>
      </div>
      <div className="profiledisplay-d">
        <div className="section-d">
          <div className="title-d">PROFILE</div>
          <div className="details-d">
            <div className="custn-d">
              CARD NUMBER
              <div className="custnbox-d">
                
              </div>
            </div>
            <div className="custn-d">
              CUSTOMER NAME
              <div className="custnbox-d"></div>
            </div>
            <div className="custn-d">
              CARD TYPE
              <div className="custnbox-d"></div>
            </div>
            <div className="custn-d">
              PHONE NO
              <div className="custnbox-d"></div>
            </div>
            <div className="custn-d">
              TALUK
              <div className="custnbox-d"></div>
            </div>
            <div className="custn-d">
              ADDRESS
              <div className="custnbox-d"></div>
            </div>
          </div>
        </div>
        <div className="relation-d">
          <div className="rel1-d">
            <div className="name-d">NAME</div>
            <div className="rel-d">RELATION</div>
          </div>
          <div className="rel2-d">
            <div className="line-d"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Details;
