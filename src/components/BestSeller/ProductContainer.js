import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { cardOne, cardTwo, cardThree, cardFour } from '../BestSeller/Data'
import './ProductContainer.css'
const ProductContainer = () => {
    return (
        <>
            <div className="product-container">
                <ProductCard {...cardOne}/>
                <ProductCard {...cardTwo}/>
                <ProductCard {...cardThree}/>
                <ProductCard {...cardFour}/>
            </div>
        </>
    )
}

export default ProductContainer
