import React, { useState } from "react";
import "./AddTransaction.scss";
import NavBar from '../navbar.jsx';
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import Swal from 'sweetalert2';
const AddTransaction = () => {
  const location=useLocation();
  const username=location.state.username;
  const Swal = require('sweetalert2')
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [dete,setDete]=useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDetails =() => {
    navigate("/details",{
      state:{
        username:username
      }
    });
}

const handleStocks = () =>{
  navigate("/stocks",{
    state:{
      username:username
    }
  });
}
const openModal = () => {
  axios.get("http://localhost:4000/viewappointments")
  .then(function (response) {
    console.log('Axios request successful');
    setUserData(response.data);
  })
  .catch(function (error) {
    console.error('Error fetching data:', error);
  });
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};
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
    setDete(date);
    console.log(dete)
    Swal.fire("Date Selected", date);
    
    // const url = "http://localhost:4000/book";
    // const data = {
    //   username: username,
    //   date:dete
    // };
    
    // axios.post(url, data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    // window.location.reload();
  }
}
const modalContent = (
  <div className="modalcontent">
  <div className="appointment">
    <label className="heading">Appointments</label>
    {/* Add any content you want to display in the modal */}
    <label className="button" onClick={closeModal}>{<CloseIcon/>}</label>
    
  </div>
  <div className="relation-s">
            <div className="rel1-s">
              <div className="name-s">BOOKING ID</div>
              <div className="quant-s">USERNAME</div>
              <div className="price-s">BOOKING DATE</div>
            </div>
            <div className="rel2-s">
              <div className="line-s"></div>
            </div>
            <div className="rel3-s">
            <div className="id-s">
            {userData?.map(user => (
  <span key={user.idbooking}>{user.idbooking}</span>
))}
            </div>
            <div className="username-s">
            {userData?.map(user => (
  <span key={user.username}>{user.username}</span>
))}
            </div>
            <div className="date-s">
            {userData?.map(user => (
  <span key={user.date}>{user.date}</span>
))}
            </div>
            </div>
            
          </div>
  </div>
  
);
  return (
    <div className="page-r">
      <NavBar/>
    
    
    <div className="profile-r">
      <div className="sidemenu-r">
        <div className="name-r">HI SHOPKEEPER</div>
        <div className="btn-r">
          <button className="bt-r"onClick={openModal}>VIEW APPOINTMENTS</button>
        </div>
        <div className="list-r">
          <button className="bt-r"onClick={()=>{handleStocks()}}>Remaining Stocks</button>
          <button className="bt-r" onClick={()=>{handleDetails()}}>View Customer Details</button>
          
          <button className="btselect-r">Add Transaction</button>
        </div>
      </div>
      <div className="profiledisplay-r">
      <div className="title-r">ADD TRANSACTION</div>
      <div className="card-d">
            <label className="cardlabel-d">CARD NO :</label>
            <input type="number" className="input-d"></input>
            <div className="buttonview">
              <button className="viewreport-d">ENTER</button>
            </div>
          </div>
        <div className="section-r">
          
         
        </div>
        <div className="details-r">
        <div className="relation-r">
        <div className="card-d">
            
            <div className="buttonview">
              <button className="viewreport-d"onClick={(e)=>{handleSample()}} >SELECT DATE</button>
              <div className="displaydate">{dete}</div>
            </div>
          </div>
          <div className="card-d">
            <label className="cardlabel-d">RICE :</label>
            <input type="number" className="input-d"></input>
            <label >IN KG</label>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">KEROSENE :</label>
            <input type="number" className="input-d"></input>
            <label >IN LITRE</label>
          </div>
          <div className="card-d">
            <label className="cardlabel-d">SUGAR :</label>
            <input type="number" className="input-d"></input>
            <label >IN KG</label>
            
          </div>
          <div className="card-d">
            <label className="cardlabel-d">TOTAL PRICE :</label>
            <input type="number" className="input-d"></input>
            <label >IN ₹</label>
          </div>
          <div className="card-d">
            
            <div className="buttonview">
              <button className="viewreport-d">SUBMIT</button>
            </div>
          </div>
        </div>
       
          
        </div>
      </div>
    </div>
    <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Appointments Modal"
       className="modal"
       overlayClassName="modal-overlay"
      >
        {modalContent}
        
      </Modal>
    </div>
  );
};
export default AddTransaction;
