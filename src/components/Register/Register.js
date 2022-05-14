import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import './Register.css'



const Register = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
                <div>       
    <div className='nav-btn-link' to="/" onClick={onOpenModal}>
    CREATE ROOM
  </div>

          <Modal open={open} onClose={onCloseModal} center>
            <div classname='modal-container'>
              <h2>SHARE ROOM NAME</h2>
              <div classname='button-container'>
              <div classname='nav-btn'>
                <div className='nav-btn-link' to="/" onClick={onOpenModal}>
                  option 1
                </div>
              </div>
              <div classname='nav-btn'>
                <div className='nav-btn-link' to="/" onClick={onOpenModal}>
                  option 2
                </div>
              </div>
              </div>
            </div>
          </Modal>
          </div>
  );
};

export default Register;
