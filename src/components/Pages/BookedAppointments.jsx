import React from "react";
import "./BookedAppointments.scss";
import NavBar from "../navbar.jsx"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const BookedAppointments = () => {
    const navigate=useNavigate();
    const Swal = require('sweetalert2')
    const handleProfile =() => {
        navigate("/profile");
    }
    const handleItems = () =>{
        navigate("/items")
    }
    const handleTransactions = () =>{
      navigate("/transaction");
    }
    const handleSample =async (e) =>{
      const { value: date } = await Swal.fire({
        title: "SELECT YOUR DATE",
        input: "date",
        didOpen: () => {
          const today = (new Date()).toISOString();
          Swal.getInput().min = today.split("T")[0];
          
        }
      });
      if (date) {
        Swal.fire("BOOKING CONFIRMED", date);
        
      }
    }
  return (
    <div className="page-ba">
      <NavBar/>
    
    
    <div className="profile-ba">
      <div className="sidemenu-ba">
        <div className="name-ba">HI CUSTOMER</div>
        <div className="btn-ba">
          <button className="bt-ba" onClick={(e)=>{handleSample()}}>BOOK AN APPOINTMENT</button>
        </div>
        <div className="list-ba">
          <button className="bt-ba" onClick={()=>{handleProfile()}}>View Full Profile</button>
          <button className="btselect-ba">Booked Appointments</button>
          <button className="bt-ba" onClick={()=>{handleItems()}}>Available Items</button>
          <button className="bt-ba"onClick={()=>{handleTransactions()}}>Transactions</button>
        </div>
      </div>
      <div className="profiledisplay-ba">
        <div className="section-ba">
          <div className="title-ba">BOOKED APPOINTMENTS</div>
          <div className="relation-ba">
          <div className="rel1-ba">
            <div className="name-ba">NAME</div>
            <div className="rel-ba">RELATION</div>
import NavBar from "../navbar.jsx";
import { useNavigate } from "react-router-dom";

const BookedAppointments = () => {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleItems = () => {
    navigate("/items");
  };
  const handleTransactions = () => {
    navigate("/transaction");
  };
  return (
    <div className="page-ba">
      <NavBar />

      <div className="profile-ba">
        <div className="sidemenu-ba">
          <div className="name-ba">HI CUSTOMER</div>
          <div className="btn-ba">
            <button className="bt-ba">BOOK AN APPOINTMENT</button>
          </div>
          <div className="list-ba">
            <button
              className="bt-ba"
              onClick={() => {
                handleProfile();
              }}
            >
              View Full Profile
            </button>
            <button className="btselect-ba">Booked Appointments</button>
            <button
              className="bt-ba"
              onClick={() => {
                handleItems();
              }}
            >
              Available Items
            </button>
            <button
              className="bt-ba"
              onClick={() => {
                handleTransactions();
              }}
            >
              Transactions
            </button>
          </div>
        </div>
        <div className="profiledisplay-ba">
          <div className="section-ba">
            <div className="title-ba">BOOKED APPOINTMENTS</div>
            <div className="relation-ba">
              <div className="rel1-ba">
                <div className="upcom">
                  <div className="up">
                    <label className="upcoming">UPCOMING</label>
                  </div>
                  <div className="updetails">
                  <label className="snou-ba">SNO</label>
                  <label className="book-ba">BOOKING ID</label>
                  <label className="datet-ba">DATE & TIME ALLOTED</label>
                  </div>
                  <div className="line">
                    
                  </div>
                </div>
                <div className="comp">
                  <div className="com">
                    <label className="completed">COMPLETED</label>
                  </div>
                  <div className="compdetails">
                    <label className="sno">SNO</label>
                    <label className="bill-ba">BILLID</label>
                    <label className="date-ba">DATE OF PURCHASE & TIME</label>
                    <label className="item-ba">ITEM & QUANTITY</label>
                    <label className="total-ba">TOTAL PRICE</label>
                  </div>
                </div>
              </div>
              <div className="rel2-ba">
                <div className="line-ba"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookedAppointments;
