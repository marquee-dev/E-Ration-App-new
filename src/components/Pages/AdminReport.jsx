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
            <div className="title-adr">ADD STOCK</div>
          </div>
          <div className="details-adr">
            <div className="sort-adr">
              <button className="srt-adr">
                SORT: <span>A-Z</span>
              </button>
            </div>
            <div className="relation-adr">
              <div className="rel1-adr">
                <div className="name-adr">ITEM</div>
                <div className="quant-adr">QUANTITY</div>
              </div>
              <div className="rel2-adr">
                <div className="line-adr"></div>
              </div>
              <div className="btnadrd">
                <button className="add-adr">ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminReport;
