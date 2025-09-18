import React, { use } from 'react'

import { HiMiniXMark } from "react-icons/hi2";
import CartContent from '../Cart/CartContent';
import {  useNavigate } from 'react-router-dom';
import Checkout from '../Cart/Checkout';



const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {

    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkout');
    };



  return <div 
    className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg z-50
    transition-all duration-500 flex flex-col
    ${drawerOpen ? 'right-0' : 'right-[-100%]'}`}
    >
        {/* closing button */}
        <div className='flex justify-end p-4'>
            <button
                 
                 onClick={toggleCartDrawer}
                 >
                    <HiMiniXMark className='h-6 w-6 text-gray-700  hover:text-gray-800 ' />

            </button>
        </div>

        {/* Cart content with scrroll */}
        <div className='flex-grow overflow-y-auto p-4'>
            <h2 className='text-xl font-semibold mb-4'>Your cart.</h2>

            {/* componet for cart content */}
            <div>
                <CartContent  />
            </div>
        </div>

        {/* Checkout button */}
        <div className='p-4 border-t border-gray-300'>
            <button onClick={handleCheckout} className='w-full bg-TopBar-red text-white py-2 px-4 rounded hover:bg-red-600 transition-colors sticky bottom-0'>
                Checkout
            </button>
            <p className='text-sm text-gray-600 mt-2 tracking-tighter'>
                Shipping, taxes and discounts calculated at checkout.
            </p>
        </div>
    </div>
};

export default CartDrawer
