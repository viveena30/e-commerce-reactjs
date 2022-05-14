import React from 'react';
import './ElectronicsCard.css';

const ElectronicsCard = ({heading, img}) => {
    return (

        <div className="electronics-card-container">
            <a href="">
           <img src="https://picsum.photos/500" className="image"></img> 
           <div className="headtext">{heading}</div>
           <p className="ptext">See More ...</p>
           </a>
        </div>
    )
}

export default ElectronicsCard;
