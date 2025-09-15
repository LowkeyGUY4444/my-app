import React from 'react'
import Hero from '../components/Layout/Hero';
import GenderCollection from '../components/Products/GenderCollection';
import NewArrivals from '../components/Products/NewArrivals';
import ProductDetails from '../components/Products/ProductDetails';
import Maylike from '../components/Products/MayLike';
import FeaturedCollection from '../components/Products/FeaturedCollection';
import FeatureSection from '../components/Products/FeatureSection';


const palceholderProducts =[

   {
    _id: 1,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=16'}],
    },
        {
    _id: 2,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=17'}],
    },    {
    _id: 3,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=18'}],
    },    {
    _id: 4,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=19'}],
    },
     {
    _id: 5,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=20'}],
    },
        {
    _id: 6,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=21'}],
    },    {
    _id: 7,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=22'}],
    },    {
    _id: 8,
    name: 'Jacket',
    price: 'RS.5999',
    images: [{ url:'https://picsum.photos/500?random=23'}],
    },
]



const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection />
        <NewArrivals />

        {/* Best Seller */}
        <h2 className='text-3xl font-bold mb-4 text-center'>Best Seller</h2>
        <ProductDetails />

        {/* collection for  Women section */}
        <div className='container mx-auto '>
          <h2 className='text-3xl font-bold mb-4 text-center'>
            Top Wares for Women
          </h2>
           <Maylike products={palceholderProducts} />
        </div>
        <FeaturedCollection />

        <FeatureSection />


    </div>
  );
};

export default Home
