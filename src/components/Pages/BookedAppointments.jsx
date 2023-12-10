import React, { useEffect, useState } from "react";
import "./BookedAppointments.scss";
import NavBar from "../navbar.jsx";
import axios from "axios";
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from "react-router-dom";

const BookedAppointments = () => {
  const location=useLocation();
  const username=location.state.username;
    const navigate=useNavigate();
    const [userData, setUserData] = useState(null);
    const Swal = require('sweetalert2')
    useEffect(() => {
      axios.get("http://localhost:4000/bookdata", {
        params: {
          username: username
        }
      })
      .then(function (response) {
        console.log('Axios request successful');
        setUserData(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
    }, []);
    const handleProfile =() => {
        navigate("/profile",{
          state:{
            username:username
          }
        });
    }
    const handleItems = () =>{
        navigate("/items",{
          state:{
            username:username
          }
        })
    }
    const handleTransactions = () =>{
      navigate("/transaction",{
        state:{
          username:username
        }
      });
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
        const dete=date;
        console.log(dete)
        Swal.fire("BOOKING CONFIRMED", date);
        
        const url = "http://localhost:4000/book";
        const data = {
          username: username,
          date:dete
        };
        
        axios.post(url, data)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        window.location.reload();
      }
    }
  return (
    <div className="page-ba">
      <NavBar />

      <div className="profile-ba">
        <div className="sidemenu-ba">
          <div className="name-ba">HI CUSTOMER</div>
          <div className="btn-ba">
                <button className="bt-ba" onClick={(e)=>{handleSample()}}>BOOK AN APPOINTMENT</button>
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
                  {/* <label className="snou-ba">SNO</label> */}
                  <label className="book-ba">BOOKING ID</label>
                  <label className="datet-ba">DATE ALLOTED</label>
                  </div>
                  <div className="line">
                    
                  </div>
                  <div className="details-ba">
                    <div className="id-details">
                    {userData?.map(user => (
    <span key={user.idbooking}>{user.idbooking}</span>
  ))}
                    </div>
                    <div className="date-details">
                    {userData?.map(user => (
    <span key={user.date}>{user.date}</span>
  ))}
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookedAppointments; 
