import React from 'react'
import heroImg from '../../assets/rabbit-hero.webp';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        <section className='relative'>
            <img src={heroImg} alt="hero Banner" className='w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-5'>
                <div className='text-center text-white px-6'>
                    <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4'>Vacation <br />Ready</h1>
                    <p className='text-sm tracking-tighter md:text-lg mb-6'>
                        Explore our wide range of vacation-ready outfits with fast shipping and easy returns.
                    </p>
                    <Link to='#' className='bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition'>
                        Shop Now
                    </Link> 
                </div>
            </div>
        </section>
    </div>
  );
};

export default Hero
