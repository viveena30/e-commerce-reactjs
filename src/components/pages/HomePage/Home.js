import React from 'react'
import BestSeller from '../../BestSeller/BestSeller'
import CategoriesSection from '../../CategoriesSection/CategoriesSection'
import FeaturedStores from '../../FeaturedStores/FeaturedStores'
import HeroSection from '../../HeroSection/HeroSection'
import HomeGadjets from '../../HomeGadjets/HomeGadjets'
import TrendingProducts from '../../TrendingProducts/TrendingProducts'

const Home = () => {
    return (
        <>
        
            <HeroSection />
            <CategoriesSection />
            <HomeGadjets />
            <BestSeller />
            <FeaturedStores />
            <TrendingProducts />
        </>
    )
}

export default Home
