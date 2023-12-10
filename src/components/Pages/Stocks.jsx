// Stocks.jsx
import React, { useState } from "react";
import "./Stocks.scss";
import Modal from "react-modal";
import NavBar from "../navbar.jsx";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Stocks = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDetails = () => {
    navigate("/details");
  };

  const handleReport = () => {
    navigate("/addtransaction");
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
