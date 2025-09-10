import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";



const CartContent = () => {

    const cartProducts = [
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
    ];

  return (
  <div>
    {
    cartProducts.map((product, index) => (
        <div key={index} className='flex items-start justify-between py-4 border-b'>

            <div className='flex items-start'>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className='w-20 h-24 object-cover  mr-4 rounded' 
                />
                <div>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                    <p className='text-sm text-gray-600'>Size: {product.size} | Color: {product.color}</p>
                    <div className='flrx items-center mt-2'>
                        <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                        <span className='px-2'>{product.quantity}</span>
                        <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-lg font-semibold'>{product.price}</p>
                <button className='text-sm text-red-600 hover:underline mt-2'>
                    <RiDeleteBinLine className='h-8 w-8' />
            </button>
            </div>
        </div>
    ))}
  </div>
    );
};

export default CartContent
