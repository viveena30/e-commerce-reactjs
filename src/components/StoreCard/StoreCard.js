import React from "react";
import './StoreCard.css'
const StoreCard = ({img, store_name}) => {
  return (
    <>
      <div className="store-card">
        <div className="store-img">
          <img src={img} alt="store-img" />
        </div>
        <div className="store-info">
            <div className="store-name">
                {store_name}
            </div>
            <div className="store-btn">Go to store</div>
            <div className="store-btn">See products</div>
        </div>
      </div>
    </>
  );
};

export default StoreCard;
