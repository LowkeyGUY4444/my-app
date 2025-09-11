import React from 'react'
import menCollImg from '../../assets/mens-collection.webp';
import womenCollImg from '../../assets/womens-collection.webp';
import { Link } from 'react-router-dom';



const GenderCollection = () => {
  return (
    <section className='py-16 px-4  lg:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>
        {/* Womens Collection */}
        <div className='relative flex-1'>
            <img src={womenCollImg} alt="Women's Collection" className=' w-full h-[700px] object-cover'></img>
            <div className='absolute bottom-8 left-8 bg-white bg-opacity-80 p-4'>
                <h2 className='text-2xl font-bold  text-gray-800 mb-9'>Women's Collection</h2>
                <Link to='/collection/all?gender=Women' className='text-gray-900 underline'>Shop Now</Link>
            </div>
        </div>
        {/* Mens Collection */}
        <div className='relative flex-1'>
            <img src={menCollImg} alt="Men's Collection" className=' w-full h-[700px] object-cover'></img>
            <div className='absolute bottom-8 left-8 bg-white bg-opacity-80 p-4'>
                <h2 className='text-2xl font-bold  text-gray-800 mb-9'>Men's Collection</h2>
                <Link to='/collection/all?gender=Men' className='text-gray-900 underline'>Shop Now</Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollection
 