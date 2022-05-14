import React from "react";
import Title from "../Title/Title";
import "./FeaturedStores.css";
import StoreCard from "../StoreCard/StoreCard";

const FeaturedStores = () => {
  return (
    <>
      <div className="container">
        <Title title={"Featured Stores"} />
        <div className="featured">
        <StoreCard img={'images/1.jpg'} store_name={'XYZ store'}/>
        <StoreCard img={'images/1.jpg'} store_name={'XYZ store'}/>
        <StoreCard img={'images/1.jpg'} store_name={'XYZ store'}/>
        </div>
      </div>
    </>
  );
};

export default FeaturedStores;
