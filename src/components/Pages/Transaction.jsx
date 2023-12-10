import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Transaction.scss";
import NavBar from '../navbar.jsx';
import { useLocation, useNavigate } from "react-router-dom";

const Transaction = () => {
  const location=useLocation();
  const username=location.state.username;
  const [userData, setUserData] = useState(null);
  const Swal = require('sweetalert2')
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:4000/customertransaction", {
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
const handleBooking = () =>{
  navigate("/booking",{
    state:{
      username:username
    }
  });
}
const handleItems = () =>{
    navigate("/items",
    {
      state:{
        username:username
      }
    })
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
    
  }
  window.location.reload();
}
  return (
    <div className="page-t">
      <NavBar/>
    
    
    <div className="profile-t">
      <div className="sidemenu-t">
        <div className="name-t">HI CUSTOMER</div>
        <div className="btn-t">
          <button className="bt-t"  onClick={()=>{handleSample()}}>BOOK AN APPOINTMENT</button>
        </div>
        <div className="list-t">
          <button className="bt-t"onClick={()=>{handleProfile()}}>View Full Profile</button>
          <button className="bt-t" onClick={()=>{handleBooking()}}>Booked Appointments</button>
          <button className="bt-t"onClick={()=>{handleItems()}}>Available Items</button>
          <button className="btselect-t">Transactions</button>
        </div>
      </div>
      <div className="profiledisplay-t">
        <div className="section-t">
          <div className="title-t">TRANSACTION</div>
         
        </div>
        <div className="details-t">
        
        <div className="relation-t">
          <div className="rel1-t">
            <div className="transact-t">LAST TRANSACTION</div>
            <div className="quant-t">ITEM & QUANTITY</div>
            <div className="price-t">PRICE</div>
          </div>
          <div className="rel2-t">
            <div className="line-t"></div>
          </div>
        </div>
        <div className="all">
       <div className="first">

        <div className="id">
          <header>ID</header>
          {userData?.map(user => (
     <span key={user.TransID}>{user.TransID}</span>
   ))}
        </div>
        <div className="date">
        <header>DATE</header>
        {userData?.map(user => (
    <span key={user.TransactionDate}>{user.TransactionDate}</span>
  ))}
        </div>
       </div>
          <div className="second">
            <div className="rice"><header>RICE</header>{userData?.map(user => (
    <span key={user.Rice}>{user.Rice}</span>
  ))}</div>
            <div className="kerosene"><header>KEROSENE</header>{userData?.map(user => (
    <span key={user.Kerosene}>{user.Kerosene}</span>
  ))}</div>
            <div className="sugar"><header>SUGAR</header>{userData?.map(user => (
    <span key={user.Sugar}>{user.Sugar}</span>
  ))}</div>
          </div>
          <div className="third">
            <div className="price">
            <header>PRICE</header>
            {userData?.map(user => (
    <span key={user.TotalAmount}>{user.TotalAmount}</span>
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
export default Transaction;
