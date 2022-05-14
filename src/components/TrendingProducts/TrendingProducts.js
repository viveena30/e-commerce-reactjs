import React from "react";
import Title from "../Title/Title";
import "./TrendingProducts.css";
import StoreCard from "../StoreCard/StoreCard";

const TrendingProducts = () => {
  return (
    <>
      <div className="container">
        <Title title={"trending Stores"} />
        <div className="trending">
        <StoreCard img={'images/1.jpg'} store_name={'XYZ store'}/>
        <StoreCard img={'images/1.jpg'} store_name={'XYZ store'}/>
        <StoreCard img={'images/1.jpg'} store_name={'XYZ store'}/>
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
