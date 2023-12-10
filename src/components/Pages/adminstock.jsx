import React, { useState } from "react";
import "./AdminStock.scss";
import NavBar from "../navbar.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminStock = () => {
  const navigate = useNavigate();
  const [itemname,setItemname]=useState('');
  const [quantity,setQuantity]=useState('');
  const [price,setPrice]=useState('')
  const [shopkeeperid,setShopkeeperid]=useState('')
  const handleShoplist = () => {
    navigate("/admin");
  };
  const handleReport = () => {
    navigate("/adminreport");
  };
  const handleSubmit = () =>{
    const url = "http://localhost:4000/addstock";
      const data = {
        itemname:itemname,
        quantity:quantity,
        price:price,
        shopkeeperid:shopkeeperid
      };

      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
        window.location.reload();
  }
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
            <input type="text" className="input-d" onChange={(e)=>{setItemname(e.target.value)}}></input>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">QUANTITY :</label>
            <input type="text" className="input-d" onChange={(e)=>{setQuantity(e.target.value)}}></input>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">PRICE/KG :</label>
            <input type="text" className="input-d" onChange={(e)=>{setPrice(e.target.value)}}></input>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">SHOPKEEPER ID :</label>
            <input type="text" className="input-d" onChange={(e)=>{setShopkeeperid(e.target.value)}}></input>
            
          </div>
          <div className="card-d">
            
            <div className="buttonview">
              <button className="viewreport-d" onClick={()=>{handleSubmit()}}>SUBMIT</button>
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
