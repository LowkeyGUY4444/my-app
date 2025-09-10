import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser,HiOutlineShoppingBag} from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';



const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


  return (
  <>
  <nav className='container mx-auto py-4 flex items-center justify-between px-4'>
    {/* left-logo */}
    <div>
    <Link to='/' className='text-2xl font-bold text-gray-800'>HAMRObazzer</Link>
    </div>
    {/* center-links */}
    <div className='hidden md:flex items-center space-x-6'>
        <Link to='#' className='text-gray-700 hover:text-black font-medium uppercase'>Men</Link>
        <Link to='#' className='text-gray-700 hover:text-black font-medium uppercase'>WomMen</Link>
        <Link to='#' className='text-gray-700 hover:text-black font-medium uppercase'>Topware</Link>
        <Link to='#' className='text-gray-700 hover:text-black font-medium uppercase'>bottemware</Link>
    </div>
    {/* Right-Icon */}
    <div className='flex items-center space-x-4'>
        <Link to='/profile' className=' hover:text-black '>
            <HiOutlineUser className='h-6 w-6 text-gray-700' />
        </Link>

        <button onClick={toggleCartDrawer} className='relative hover:text-black '>
            <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
            <span className='absolute -top-1  bg-TopBar-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
        </button>

    {/* Search */}
    <div className="overflow-hidden">
    <SearchBar />
    </div>

    {/* Menu */}
    <button className='md:hidden'>
        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
    </button>

    </div>

  </nav>
  <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
  </>
  )
}

export default Navbar
