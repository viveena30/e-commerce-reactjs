import React, { useState } from "react";
import MaterialIcon from "material-icons-react";
import "./Navbar.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "../Register/Register.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  $(document).ready(function () {
    $(window).scroll(function () {
      if (this.scrollY > 150) {
        $(".top-navbar-container").css("height", "45%");
      } else {
        $(".top-navbar-container").css("height", "75%");
      }
      if (this.scrollY > 150) {
        $(".bottom-navbar-container").css("height", "25%");
      } else {
        $(".bottom-navbar-container").css("height", "40%");
      }
    });
  }, 200);

  return (
    <>
      <nav className="navbar-container">
        <div className="top-navbar-container">
          <div className="top-navbar-elements">
            <div className="menu">
              <MaterialIcon icon="menu" size="32px" color="#ffffff" />

              <ul className="categories">
                <li className="category">
                  <Link to="/electronics">Electronics</Link>
                </li>
                <li className="category">
                  <Link to="/localstores">Local Stores</Link>
                </li>
              </ul>
            </div>
            <div className="logo">
              {" "}
              <Link to="/">NewBrand</Link>
            </div>
            <div className="option-menu">
              <div className="option">
                <MaterialIcon icon="search" size="32px" color="#ffffff" />
              </div>
              <div className="option">
                <MaterialIcon
                  icon="shopping_cart"
                  size="32px"
                  color="#ffffff"
                />
              </div>
              <div className="option" to="/" onClick={onOpenModal}>
                <MaterialIcon icon="person" size="32px" color="#ffffff" />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-navbar-container">
          <Link to="/">
            <li className="electronic-category">Desktop</li>
          </Link>
          <Link to="/">
            <li className="electronic-category">television</li>
          </Link>
          <Link to="/">
            <li className="electronic-category">smartphone</li>
          </Link>
          <Link to="/">
            <li className="electronic-category">watches</li>
          </Link>
          <Link to="/">
            <li className="electronic-category">home gadjets</li>
          </Link>
        </div>
      </nav>

      <Modal open={open} onClose={onCloseModal} center>
        <div classname="modal-container">
          <h2>SHARE ROOM NAME</h2>
          <div classname="button-container">
            <div classname="nav-btn">
              <div className="nav-btn-link" to="/" onClick={onOpenModal}>
                option 1
              </div>
            </div>
            <div classname="nav-btn">
              <div className="nav-btn-link" to="/" onClick={onOpenModal}>
                option 2
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
