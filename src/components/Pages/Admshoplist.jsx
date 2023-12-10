import React from "react";
import "./Admshoplist.scss";
import Navbar from "../navbar"

export default function Admshoplist()
{
    return(
        
        <div className="admshoplist">
            <div className="navbar-admshoplist">
            <Navbar/>
            <div className="profile-adm">
      <div className="sidemenu-adm">
        <div className="name-adm">
          <label>ADMIN</label>
          <label><br/>PROFILE</label>
        </div>
        <div className="list-adm">
          <button className="btselect-adm">View Shopkeeper List</button>
          <button className="bt-adm">New User Verification</button>
          <button className="bt-adm" >Stock To Shopkeepers</button>
          
        </div>
      </div>
            </div>
        <div className="profiledisplay-adm">
            <div className="profile-adm">
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
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}