import React from 'react'
import Hero from '../components/Layout/Hero';
import GenderCollection from '../components/Products/GenderCollection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import Recommended from '../components/Products/Recommended';


const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArrivals />

        {/* Best Seller */}
        <h2 className='text-3xl font-bold mb-4 text-center'>Best Seller</h2>
        <ProductDetails />
        <Recommended />


    </div>
  );
};

export default Home
