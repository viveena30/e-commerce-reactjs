import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({heading, img}) => {
    return (

        <div className="card-container">
            <a href="">
           <img src="https://picsum.photos/500" className="image"></img> 
           <div className="headtext">{heading}</div>
           <p className="ptext">See More ...</p>
           </a>
        </div>
    )
}

export default CategoryCard;
