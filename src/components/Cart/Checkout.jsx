import React, { use } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaypalButton from './PaypalButton';

    const cart = {
    products:[
        {
            id: 1,
            name: 't-shirt',
            size: 'M',
            color: 'Red',
            quantity: 2,
            price: 799,
            image:"https://picsum.photos/200?random=1"
        },
        {
            id: 2,
            name: 'Jeans',
            size: 'M',
            color: 'blue',
            quantity: 1,
            price: 1999,
            image:"https://picsum.photos/200?random=2"
        },
    ],
    totalprice: 2798,
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

    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful", details);
        navigate("/orderconfirmation");
    };


     const handleClick = () => {
            // Redirect to confirmation page
            navigate("/orderconfirmation");
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
                        {/* paypal component */}
                        
                        <PaypalButton amount={cart.totalprice} onSuccess={handlePaymentSuccess} onError={(err) => {
                            console.log(err);
                        alert("payment Unsuccessful! Try again")}} />

                        {/* ✅ Cash on Delivery */}
                        <button
                            onClick={handleClick}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-md transition"
                        >
                            Cash on Delivery
                        </button>

                    </div>  
                    
                )}

            </div>
        </form>
      </div>
      {/* Right Section */}
      <div className='bg-gray-50 p-6 rounded-lg'>
        <h3 className='text-lg mb-4'>Order Summary</h3>
        <div className='border-t py-4 mb-4'>
            {cart.products.map((product, index) => (
                <div key={index} className='flex justify-between items-start py-2 border-b'>
                    <div className='flex items-start'>
                     
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-24 object-cover mr-4"
                        />
                        <div> 
                            <h3 className='text-mb'>{product.name}</h3>
                            <p className='text-gray-500'>Size: {product.size}</p>
                            <p className='text-gray-500'>Color: {product.color}</p>
                        </div>
                    </div>
                    <p className='text-xl'>RS.{product.price?.toLocaleString()}</p>
                </div>
            ))}

        </div>
            <div className='flex justify-between items-center text-lg mb-4'>
                <p>Total</p>
                <p>RS.{cart.totalprice?.toLocaleString()}</p>
            </div>
            <div className='flex justify-between items-center text-lg'>
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <div className='flex justify-between items-center text-lg mb-4 border-t pt-4'>
                <p className='font-bold'>Total</p>
                <p className='font-bold'> RS.{cart.totalprice?.toLocaleString()}</p>

            </div>
      </div>
    </div>
  );
};

export default Checkout
