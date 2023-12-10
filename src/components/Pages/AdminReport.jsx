import React from "react";
import "./AdminReport.scss";
import NavBar from "../navbar.jsx";
import { useNavigate } from "react-router-dom";

const AdminReport = () => {
  const navigate = useNavigate();
  const handleShoplist = () => {
    navigate("/admin");
  };
  const handleStock = () => {
    navigate("/adminstock");
  };
  return (
    <div className="page-adr">
      <NavBar />

      <div className="profile-adr">
        <div className="sidemenu-adr">
          <div className="name-adr">
            {" "}
            <label>ADMIN</label>
            <label>
              <br />
              PROFILE
            </label>
          </div>
          <div className="list-adr">
            <button
              className="bt-adr"
              onClick={() => {
                handleShoplist();
              }}
            >
              View Shopkeeper List
            </button>
            <button className="bt-adr"onClick={() => {
                handleStock();
              }}>Add Stock</button>
            <button
              className="btselect-adr"
              
            >
              Sales Report
            </button>
          </div>
        </div>
        <div className="profiledisplay-adr">
          <div className="section-adr">
            <div className="title-adr">SALES REPORT</div>
          </div>
          <div className="btnclass">
            <button className="btn-adr">Download Sales Report</button>
          </div>
          {/* <div className="details-adr">
           
            <div className="relation-adr">
            
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default AdminReport;
