import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CustProfile.scss";
import NavBar from "../navbar.jsx"
import { useLocation, useNavigate } from "react-router-dom";

const CustProfile = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const [userData, setUserData] = useState(null);
  const Swal = require('sweetalert2')
  const username=location.state.username;
  // useEffect(() => {
  //   axios.get('/fetch', {
  //     params: {
  //       username: username
  //     }
  //   })
  //   .then(function (response) {
  //     // Assuming the response data is an array of user data
  //     setUserData(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error('Error fetching data:', error);
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log('Inside useEffect');
  
  //   axios.get('/fetch', {
  //     params: {
  //       username: username
  //     }
  //   })
  //   .then(function (response) {
  //     console.log('Axios request successful');
  //     setUserData(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error('Error fetching data:', error);
  //   });
  // }, [/* dependencies */]);
   useEffect(() => {
    axios.get("http://localhost:4000/data", {
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
  const handleBooking = () =>{
    navigate("/booking",{
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
// const handleButton = () =>{
//   console.log("hi00")
   
// }

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
    <div className="page">
      <NavBar/>
    
    
    <div className="profile">
      <div className="sidemenu">
        <div className="name">HI CUSTOMER</div>
        <div className="btn">
          <button className="bt" onClick={()=>{handleSample()}}>BOOK AN APPOINTMENT</button>
        </div>
        <div className="list">
          <button className="btselect">View Full Profile</button>
          <button className="bt" onClick={()=>{handleBooking()}}>Booked Appointments</button>
          <button className="bt" onClick={()=>{handleItems()}}>Available Items</button>
          <button className="bt"onClick={()=>{handleTransactions()}}>Transactions</button>
        </div>
      </div>
      <div className="profiledisplay">
        <div className="section">
          <div className="title">PROFILE</div>
          <div className="details">
            <div className="custn">
              CARD NUMBER
              <div className="custnbox">
                {/* {userData.map(user=>(
                  <span>{user.Cardno}</span>
                ))} */}
                {userData?.map(user => (
    <span key={user.Cardno}>{user.Cardno}</span>
  ))}
                             {/* <span>{cardno}</span>    */}
                             {/* <button onClick={()=>{handleButton()}}>HI</button> */}
              </div>
            </div>
            <div className="custn">
              CUSTOMER NAME
              <div className="custnbox">
              {/* <span>{cardholdersname}</span> */}
              {userData?.map(user => (
    <span key={user.Name}>{user.Name}</span>
  ))}
              </div>
            </div>
            <div className="custn">
              CARD TYPE
              <div className="custnbox">
                <span>APL</span>
              </div>
            </div>
            
            
            <div className="custn">
              ADDRESS
              <div className="custnbox">
              {userData?.map(user => (
    <span key={user.Address}>{user.Address}</span>
  ))}
              </div>
            </div>
            <div className="custn">
              PHONE NUMBER
              <div className="custnbox">
              {userData?.map(user => (
    <span key={user.PhoneNo}>{user.PhoneNo}</span>
  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relation">
          <div className="rel1">
            <div className="name">NAME</div>
            <div className="rel">RELATION</div>
          </div>
          <div className="rel2">
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

}
export default CustProfile;
