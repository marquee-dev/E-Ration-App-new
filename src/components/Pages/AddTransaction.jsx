import React, { useState } from "react";
import "./AddTransaction.scss";
import NavBar from '../navbar.jsx';
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
const AddTransaction = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDetails =() => {
    navigate("/details");
}

const handleStocks = () =>{
  navigate("/stocks");
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
            <input type="text" className="input-d"></input>
            <div className="buttonview">
              <button className="viewreport-d">ENTER</button>
            </div>
          </div>
        <div className="section-r">
          
         
        </div>
        <div className="details-r">
        <div className="relation-r">
          <div className="rel1-r">
            <div className="name-r">ITEMS</div>
            <div className="quant-r">TOTAL QUANTITY</div>
            <div className="price-r">TOTAL AMOUNT</div>
          </div>
          <div className="rel2-r">
            <div className="line-r"></div>
          </div>
          <div className="rel3-r">
          <div className="line-r"></div>
          <div className="total">
            <button className="add-r">Add Transaction</button>
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
