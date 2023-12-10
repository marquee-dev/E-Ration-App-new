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
    navigate("/booking");
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
            <div className="sort-ad">
              <button className="srt-ad">
                SORT: <span>A-Z</span>
              </button>
            </div>
            <div className="relation-ad">
              <div className="rel1-ad">
                <div className="name-ad">ITEM</div>
                <div className="quant-ad">QUANTITY</div>
              </div>
              <div className="rel2-ad">
                <div className="line-ad"></div>
              </div>
              <div className="btnadd">
                <button className="add-ad">ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminStock;
