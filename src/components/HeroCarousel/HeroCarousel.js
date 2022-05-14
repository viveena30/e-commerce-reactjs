import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './HeroCarousel.css'

const HeroCarousel = () => {
    return (
        <>
            <div className="carousel-container">
             <Carousel autoPlay infiniteLoop interval="2000">
                <div>
                    <img src="images/heroSection.png" />
                    
                </div>
                <div>
                    <img src="images/heroSection2.png" />
                </div>
                <div>
                    <img src="images/heroSection3.png" />
                </div>
            </Carousel>
            </div>
        </>
    )
}

export default HeroCarousel
