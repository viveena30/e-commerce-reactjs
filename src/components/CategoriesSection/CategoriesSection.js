import React from "react";
import Title from "../Title/Title";
import "./CategoriesSection.css";
import CategoryCard from "./CategoryCard";

const CategoriesSection = () => {
  return (
    <>
      <div className="container">
        <Title title={"categories"} />
        <div className="category-container">
        <CategoryCard heading={'Television'} />
        <CategoryCard heading={'Smart Phone'} />
        <CategoryCard heading={'Watches'} />
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
