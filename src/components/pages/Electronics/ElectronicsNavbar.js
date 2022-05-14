import React from "react";
import "./ElectronicsNavbar.css";
import { Link } from "react-router-dom";

const ElectronicsNavbar = () => {

  return (
    <>
      <nav className="electronics-navbar-container">
        
        <div className="brands-navbar-container">
          <li className="electronic-category">Real Me</li>
          <li className="electronic-category">Samsung</li>
          <li className="electronic-category">Voltas</li>
          <li className="electronic-category">LG</li>
          <li className="electronic-category">Philips</li>
          <li className="electronic-category">Vivo</li>
          <li className="electronic-category">MI</li>
          <li className="electronic-category">whirlpool</li>
        </div>
      </nav>
    </>
  );
};

export default ElectronicsNavbar;
