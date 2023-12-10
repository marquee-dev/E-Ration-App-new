import React from "react";
import "./AdminStock.scss";
import NavBar from "../navbar.jsx";
import { useNavigate } from "react-router-dom";

const AdminStock = () => {
  const navigate = useNavigate();
  const handleShoplist = () => {
    navigate("/admin");
  };
  const handleReport = () => {
    navigate("/adminreport");
  };
  return (
    <div className="page-ad">
      <NavBar />

      <div className="profile-ad">
        <div className="sidemenu-ad">
          <div className="name-ad">
            {" "}
            <label>ADMIN</label>
            <label>
              <br />
              PROFILE
            </label>
          </div>
          <div className="list-ad">
            <button
              className="bt-ad"
              onClick={() => {
                handleShoplist();
              }}
            >
              View Shopkeeper List
            </button>
            <button className="btselect-ad">Add Stock</button>
            <button
              className="bt-ad"
              onClick={() => {
                handleReport();
              }}
            >
              Sales Report
            </button>
          </div>
        </div>
        <div className="profiledisplay-ad">
          <div className="section-ad">
            <div className="title-ad">ADD STOCK</div>
          </div>
          <div className="details-ad">

            <div className="relation-ad">
               <div className="card-d">
            <label className="cardlabel-d">ITEM NAME :</label>
            <input type="text" className="input-d"></input>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">QUANTITY :</label>
            <input type="text" className="input-d"></input>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">PRICE/KG :</label>
            <input type="text" className="input-d"></input>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">SHOPKEEPER ID :</label>
            <input type="text" className="input-d"></input>
            
          </div>
          <div className="card-d">
            
            <div className="buttonview">
              <button className="viewreport-d">SUBMIT</button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminStock;
