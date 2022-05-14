import React from "react";
import './ProductCard.css'
import MaterialIcon from 'material-icons-react';


const ProductCard = ({ img, title, rating, price, subtitle, alt, city }) => {
  return (
    <>
      <div className="product-card">
          <img src={img} alt={alt} />
          <h3>{title}</h3>
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star_half" size="14px" color='#ffbc02'/>
          {/* icons for rating + p tag for value */}
          <h2>{price}</h2>
          <p>{subtitle}</p>
          {/* <p>{city}</p> */}

      </div>
    </>
  );
};  

export default ProductCard;
