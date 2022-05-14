import React from "react";
import Title from "../../Title/Title";
import "./Electronics.css";
import ElectronicsNavbar from "./ElectronicsNavbar";
import ElectronicsCard from "./ElectronicsCard";
import ProductInfoCard from "../../ProductInfoCard/ProductInfoCard";
import TrendingProducts from "../../TrendingProducts/TrendingProducts";
import Register from "../../Register/Register";

const Electronics = () => {
  return (
    <>
      <div className="page-container">
        <Title title={"Electronics"} />
        <ElectronicsNavbar />

        <div className="electronics-container container">
        <ElectronicsCard heading={'Television'} />
        <ElectronicsCard heading={'Smart Phone'} />
        <ElectronicsCard heading={'Watches'} />
        </div>
        <div className="featured-brand-products">
            <h4>FEATURED BRAND PRODUCTS</h4>
            <div className="featured-container">
            <ProductInfoCard product_name={'camera'} rating={'4.5'} price= {'45'} />
            <ProductInfoCard product_name={'camera'} rating={'4.5'} price= {'45'} />
            <ProductInfoCard product_name={'camera'} rating={'4.5'} price= {'45'} />
            </div>
        </div>
        <TrendingProducts />


        <Register />
      </div>
    </>
  );
};

export default Electronics;   
