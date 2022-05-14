import React from "react";
import ProductContainer from "./ProductContainer";
import Title from "../Title/Title";
import "./BestSeller.css";

const BestSeller = () => {
  return (
    <>
      <div className="container">
        <Title title={"best seller"} />
        <ProductContainer />
      </div>
    </>
  );
};

export default BestSeller;
