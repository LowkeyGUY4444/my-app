import React, { use } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




    const cart = {
    products:[
        {
            id: 1,
            name: 't-shirt',
            size: 'M',
            color: 'Red',
            quantity: 2,
            price: "Rs. 799",
            image:"https://picsum.photos/200?random=1"
        },
        {
            id: 2,
            name: 'Jeans',
            size: 'M',
            color: 'blue',
            quantity: 1,
            price: "Rs. 1999",
            image:"https://picsum.photos/200?random=2"
        },
    ],
    totalprose: 2798,
}

const Checkout = () => {

    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null);
    const [ShippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        
    });

    const handledCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123456789);
    };


  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
      {/* leftSection */}
      <div className='bg-white p-6 rounded-lg'>
        <h2 className='text-2xl uppercase mb-6'>
            CheckOut
        </h2>

        <form onSubmit={handledCreateCheckout}>
            <h3 className='text-lg mb-4'>Contact Details</h3>
            <div className='mb-4'>
                <lable className=" block text-gray-700">E-mail</lable>
                <input type='email' value='user@email.com' className='w-full p-2 border rounded' disabled />
            </div>

            <h3 className='text-lg mb-4'>Details</h3>
            <div className='mb-4 grid grid-cols-2 gap-4'>
                <div>
                <lable className=" block text-gray-700">First Name</lable>
                <input 
                    type='text' 
                    value={ShippingAddress.firstName} 
                    onChange={(e) => setShippingAddress({...ShippingAddress, firstName: e.target.value})} 
                    className='w-full p-2 border rounded' 
                    required />
                </div>
                <div>
                    <lable className=" block text-gray-700">Last Name</lable>
                    <input 
                        type='text' 
                        value={ShippingAddress.lastName} 
                        onChange={(e) => setShippingAddress({...ShippingAddress, lastName: e.target.value})} 
                        className='w-full p-2 border rounded' 
                        required />
                </div>
            </div>
            <div className='mb-4'>
                <lable className=" block text-gray-700">Address</lable>
                <input 
                    type='text' 
                    value={ShippingAddress.address} 
                    onChange={(e) => setShippingAddress({...ShippingAddress, address: e.target.value})} 
                    className='w-full p-2 border rounded' 
                    required />
            </div>

            <div className='mb-4 grid grid-cols-2 gap-4'>
                <div>
                <lable className=" block text-gray-700">City</lable>
                <input 
                    type='text' 
                    value={ShippingAddress.city} 
                    onChange={(e) => setShippingAddress({...ShippingAddress, city: e.target.value})} 
                    className='w-full p-2 border rounded' 
                    required />
                </div>
                <div>
                    <lable className=" block text-gray-700">zip-Code</lable>
                    <input 
                        type='text' 
                        value={ShippingAddress.zipCode} 
                        onChange={(e) => setShippingAddress({...ShippingAddress, zipCode: e.target.value})} 
                        className='w-full p-2 border rounded' 
                        required />
                </div>
            </div>
            <div className='mb-4'>
                <lable className=" block text-gray-700">State</lable>
                <input 
                    type='text' 
                    value={ShippingAddress.state} 
                    onChange={(e) => setShippingAddress({...ShippingAddress, state: e.target.value})} 
                    className='w-full p-2 border rounded' 
                    required />
            </div>
            <div className='mb-4'>
                <lable className=" block text-gray-700">Phone</lable>
                <input 
                    type='text' 
                    value={ShippingAddress.phone} 
                    onChange={(e) => setShippingAddress({...ShippingAddress, phone: e.target.value})} 
                    className='w-full p-2 border rounded' 
                    required />
            </div>

            {/* checkout button         */}

            <div className='mt-6'>
                {!checkoutId ? (
                    <button type='submit' className='w-full bg-TopBar-red text-white py-2 px-4 rounded hover:bg-red-600'>
                        Continue to Payment
                    </button>
                ) : (
                    <div>
                        <h3 className='text-lg mb-4'>Pay with Esewa</h3>
                        {/* Esewa component */}
                    </div>
                )}
            </div>
            
        </form>
      </div>
    </div>
  );
};

export default Checkout
