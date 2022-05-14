import React from "react";
import "./LocalStores.css";
import LocalStoresNavbar from "./LocalStoresNavbar";
import Title from "../../Title/Title";
import StoreCard from "../../StoreCard/StoreCard";

const LocalStores = () => {
  return (
    <>
      <div className="localstores-container">
        <Title title={"Local Stores"} />
        <LocalStoresNavbar />

        <h2 className="subtitle">Trending Stores</h2>
        <div className="localstore-card-container">
          <StoreCard img={"images/1.jpg"} store_name={"xyz store"} />
          <StoreCard img={"images/1.jpg"} store_name={"xyz store"} />
          <StoreCard img={"images/1.jpg"} store_name={"xyz store"} />
          <StoreCard img={"images/1.jpg"} store_name={"xyz store"} />
          <StoreCard img={"images/1.jpg"} store_name={"xyz store"} />
          <StoreCard img={"images/1.jpg"} store_name={"xyz store"} />
        </div>
      </div>
    </>
  );
};

export default LocalStores;
