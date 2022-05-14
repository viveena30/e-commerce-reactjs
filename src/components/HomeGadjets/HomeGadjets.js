import React from "react";
import ProductContainer from "./ProductContainer";
import Title from "../Title/Title";
import "./HomeGadjets.css";

const HomeGadjets = () => {
  return (
    <>
      <div className="container">
        <Title title={"Home Gadjets"} />
        <ProductContainer />
      </div>
    </>
  );
};

export default HomeGadjets;
