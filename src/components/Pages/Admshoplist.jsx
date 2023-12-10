import React, { useEffect, useState } from "react";
import "./Admshoplist.scss";
import axios from "axios";
import Navbar from "../navbar.jsx";
import { useNavigate } from "react-router-dom";

export default function Admshoplist() {
  const navigate= useNavigate();
  const [userData, setUserData] = useState(null);
  const handleStock=()=>{
    navigate("/adminstock");
  }
  const handleReport=()=>{
    navigate("/adminreport");
  }
  useEffect(() => {
    axios.get("http://localhost:4000/viewshopkeeper")
    .then(function (response) {
      console.log('Axios request successful');
      setUserData(response.data);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
  }, []);
  return (
    <div className="page-adm">
    <Navbar/>
  
  
  <div className="profile-adm">
    <div className="sidemenu-adm">
      <div className="name-adm">
        <label>ADMIN</label>
        <label><br/>PROFILE</label>
      </div>
     
      <div className="list-adm">
      <button className="btselect-adm">View Shopkeeper List</button>
      <button className="bt-adm"onClick={()=>{handleStock()}}>Add stock</button>
      <button className="bt-adm"onClick={()=>{handleReport()}}>Sales Report</button>
        
        
      </div>
    </div>
    <div className="profiledisplay-adm">
      <div className="section-adm">
        <div className="title-adm">SHOPKEEPER LIST</div>
       
      </div>
      <div className="details-adm">
      <div className="sort-adm">
          <button className="srt-adm">SORT: <span>A-Z</span></button>
      </div>
      <div className="relation-adm">
        <div className="rel1-adm">
          <div className="name-adm">SHOP NO.</div>
          <div className="quant-adm">SHOPKEEPER NAME</div>
          <div className="price-adm">PLACE</div>
        </div>
        <div className="rel2-adm">
          <div className="line-adm"></div>
        </div>
        <div className="rel3-adm">
          <div className="shopno-adm">
          {userData?.map(user => (
    <span key={user.ShopkeeperID}>{user.ShopkeeperID}</span>
  ))}
          </div>
          <div className="shopkeepername-adm">
          {userData?.map(user => (
    <span key={user.Name}>{user.Name}</span>
  ))}
          </div>
          <div className="place-adm">
          {userData?.map(user => (
    <span key={user.Address}>{user.Address}</span>
  ))}
          </div>
        </div>
      </div>
     
        
      </div>
    </div>
  </div>
  </div>
);
  };
