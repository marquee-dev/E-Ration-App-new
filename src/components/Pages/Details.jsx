import React, { useState } from "react";
import "./Details.scss";
import NavBar from "../navbar.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';

const Details = () => {
  const navigate = useNavigate();
  const [cardno,setCardno]=useState('');
  const [userData, setUserData] = useState(null);
  const handleStocks = () => {
    navigate("/stocks");
  };
  const handleReport = () => {
    navigate("/addtransaction");
  };
  const handleDetails = () => {
    axios.get("http://localhost:4000/viewdata", {
      params: {
        cardno:cardno
      }
    })
    .then(function (response) {
      console.log('Axios request successful');
      setUserData(response.data);
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
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
            </div>
    </div>
    
  );

  return (
    <div className="page-d">
      <NavBar />

      <div className="profile-d">
        <div className="sidemenu-d">
          <div className="name-d">HI SHOPKEEPER</div>
          <div className="btn-d">
            <button className="bt-d"onClick={openModal}>VIEW APPOINTMENTS</button>
          </div>
          <div className="list-d">
            <button
              className="bt-d"
              onClick={() => {
                handleStocks();
              }}
            >
              Remaining Stocks
            </button>
            <button className="btselect-d">View Customer Details</button>
            <button
              className="bt-d"
              onClick={() => {
                handleReport();
              }}
            >
              Add Transaction
            </button>
          </div>
        </div>
        <div className="profiledisplay-d">
          <div className="title-d">VIEW CUSTOMER DETAILS</div>
          <div className="card-d">
            <label className="cardlabel-d">CARD NO :</label>
            <input type="text" className="input-d" onChange={(e)=>{setCardno(e.target.value)}}></input>
            <div className="buttonview">
              <button className="viewreport-d" onClick={()=>{handleDetails()}}>VIEW REPORT</button>
            </div>
          </div>
          <div className="sect-d">
            <div className="section-d">
              <div className="details-d">
                <div className="custn-d">
                  CARD NUMBER
                  <div className="custnbox-d">
                  {userData?.map(user => (
    <span key={user.CardNo}>{user.CardNo}</span>
  ))}
                  </div>
                </div>
                <div className="custn-d">
                  CUSTOMER NAME
                  <div className="custnbox-d">
                  {userData?.map(user => (
    <span key={user.Name}>{user.Name}</span>
  ))}
                  </div>
                </div>
                <div className="custn-d">
                  CARD TYPE
                  <div className="custnbox-d">
                  <span>APL</span>
                  </div>
                </div>
                <div className="custn-d">
                  PHONE NUMBER
                  <div className="custnbox-d">
                  {userData?.map(user => (
    <span key={user.PhoneNo}>{user.PhoneNo}</span>
  ))}
                  </div>
                </div>
                <div className="custn-d">
                  ADDRESS
                  <div className="custnbox-d">
                  {userData?.map(user => (
    <span key={user.Address}>{user.Address}</span>
  ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relation-d">
              <div className="rel1-d">
                <div className="name-d">NAME</div>
                <div className="rel-d">RELATION</div>
              </div>
              <div className="rel2-d">
                <div className="line-d"></div>
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
export default Details;
