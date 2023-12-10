// Stocks.jsx
import React, { useEffect, useState } from "react";
import "./Stocks.scss";
import Modal from "react-modal";
import axios from "axios";
import NavBar from "../navbar.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Stocks = () => {
  const location=useLocation();
  const username=location.state.username;
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [itemData, setItemData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDetails = () => {
    navigate("/details",{
      state:{
        username:username
      }
    });
  };

  const handleReport = () => {
    navigate("/addtransaction",{
      state:{
        username:username
      }
    });
  };
  useEffect(() => {
    console.log("sreerag")
    axios.get("http://localhost:4000/viewitems", {
      params: {
        username: username
      }
    })
    .then(function (response) {
      console.log(username)
      console.log('Axios request successful');
      setItemData(response.data);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
  }, []);
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
    <div className="page-s">
      <NavBar />

      <div className="profile-s">
        <div className="sidemenu-s">
          <div className="name-s">HI SHOPKEEPER</div>
          <div className="btn-s">
            <button className="bt-s" onClick={openModal}>
              VIEW APPOINTMENTS
            </button>
          </div>
          <div className="list-s">
            <button className="btselect-s">Remaining Stocks</button>
            <button className="bt-s" onClick={() => handleDetails()}>
              View Customer Details
            </button>
            <button className="bt-s" onClick={() => handleReport()}>
            Add Transaction
            </button>
          </div>
        </div>
        <div className="profiledisplay-s">
          <div className="section-s">
            <div className="title-s">ITEMS AVAILABLE FOR THE MONTH</div>
          </div>
          <div className="details-s">
            <div className="sort-s">
              <button className="srt-s">SORT: <span>A-Z</span></button>
            </div>
            <div className="relation-s">
              <div className="rel1-s">
                <div className="name-s">ITEM NAME</div>
                <div className="quant-s">QUANTITY</div>
                <div className="price-s">PRICE/KG</div>
              </div>
              <div className="rel2-s">
                <div className="line-s"></div>
              </div>
              <div className="rel3-s">
              <div className="id-s">
              {itemData?.map(item => (
    <span key={item.name}>{item.name}</span>
  ))}
              </div>
              <div className="username-s">
              {itemData?.map(item => (
    <span key={item.quantity}>{item.quantity}</span>
  ))}
              </div>
              <div className="date-s">
              {itemData?.map(item => (
    <span key={item.price}>{item.price}</span>
  ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal component */}
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

export default Stocks;


/* Styles for the modal content */
