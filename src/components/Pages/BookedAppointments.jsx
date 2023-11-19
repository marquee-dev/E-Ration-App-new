import React from "react";
import "./CustProfile.scss";
import NavBar from "../navbar.jsx"

const custprofile = () => {
  return (
    <div className="page-ba">
      <NavBar/>
    
    
    <div className="profile-ba">
      <div className="sidemenu-ba">
        <div className="name-ba">HI CUSTOMER</div>
        <div className="btn-ba">
          <button className="bt-ba">BOOK AN APPOINTMENT</button>
        </div>
        <div className="list-ba">
          <button className="btselect-ba">View Full Profile</button>
          <button className="bt-ba">Booked Appointments</button>
          <button className="bt-ba">Available Items</button>
          <button className="bt-ba">Transactions</button>
        </div>
      </div>
      <div className="profiledisplay-ba">
        <div className="section-ba">
          <div className="title-ba">PROFILE</div>
          <div className="details-ba">
            <div className="custn-ba">
              CARD NUMBER
              <div className="custnbox-ba">
                
              </div>
            </div>
            <div className="custn-ba">
              CUSTOMER NAME
              <div className="custnbox-ba"></div>
            </div>
            <div className="custn-ba">
              CARD TYPE
              <div className="custnbox-ba"></div>
            </div>
            <div className="custn-ba">
              PHONE NO
              <div className="custnbox-ba"></div>
            </div>
            <div className="custn-ba">
              TALUK
              <div className="custnbox-ba"></div>
            </div>
            <div className="custn-ba">
              ADDRESS
              <div className="custnbox-ba"></div>
            </div>
          </div>
        </div>
        <div className="relation-ba">
          <div className="rel1-ba">
            <div className="name-ba">NAME</div>
            <div className="rel-ba">RELATION</div>
          </div>
          <div className="rel2-ba">
            <div className="line-ba"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default custprofile;
