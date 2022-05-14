import React from 'react'
import './ProductInfoCard.css'
import MaterialIcon from 'material-icons-react';


const ProductInfoCard = ({product_name, rating, price}) => {
    return (
        <>
      <div className="main-card">
        <div className="product-img">
            <img src="https://picsum.photos/500" alt="" />
        </div>
        <div className="product-description">
          <div className="product-title">
            <p>{product_name}</p>
          </div>
          <div className="product-rating">
            <div className="product-stars">
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star" size="14px" color='#ffbc02'/>
          <MaterialIcon icon="star_half" size="14px" color='#ffbc02'/>
          </div>
            <p>{rating}</p>
          </div>
          <div className="main-description">
            <div className="product-price">
              <p>
               $ {price}
              </p>
            </div>
            <div className="product-color">
              <div className="product-color1"></div>
              <div className="product-color2"></div>
              <div className="product-color3"></div>
            </div>
          </div>
          <div className="delivery-charge">
          <MaterialIcon icon="local_shipping" size="24px" color="#777777" />

            <p>
              Free delivery available
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY NOW</button>
          </div>
        </div>
      </div>
        </>
    )
}

export default ProductInfoCard
