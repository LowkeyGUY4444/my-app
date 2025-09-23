import React, { use, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MyOrderPage = () => {

    const [Orders, setOrders] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        //simulate faching order data
        setTimeout(() => {
            const mockOrders = [
                { 
                    _id: 12345,
                    careatedAt: new Date(),
                    shippingAddress: '123 Main St',
                    orderItems: [
                        {
                            productId: 1,
                            name: 'product 1',
                            image:"https://picsum.photos/500?random=16"
                        },
                    ],
                    totalPrise:100,
                    isPaid: false,
                    paidAt: new Date(),
                    isDelivered: false,
                    deliveredAt: new Date(),
                },
                {
                    _id: 12346,
                    careatedAt: new Date(),
                    shippingAddress: '123 Main St', 
                    orderItems: [
                        {
                            productId: 2,
                            name: 'product 2',
                            image:"https://picsum.photos/500?random=17"
                        },
                    ],
                    totalPrise:200,
                    isPaid: false ,
                    paidAt: new Date(),
                    isDelivered: false,
                    deliveredAt: new Date(),
                }
            ];

            setOrders(mockOrders);
            }, 1000);
        }, []);


        const handleRowClick = (orderId) => {
            navigate(`/order/${orderId}`);
        };

  return (
    <div className='max-w-7xl mx-auto p-4 sm:p-6'>
      <h2 className='text-xl sm:text:2xl font-semibold mb-6'>My Order</h2>
      <div className='ralative shadow-md sm:rounded-lg overflow-hidden'>
        <table className='min-w-full text=left text-gray-500'>
            <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                <tr>
                    <th className='py-2 px-4 sm:py-3 text-left'>Image</th>
                    <th className='py-2 px-4 sm:py-3 text-left'>Order ID</th>
                    <th className='py-2 px-4 sm:py-3 text-left'>Created</th>
                    <th className='py-2 px-4 sm:py-3 text-left'>Shipping Address</th>
                    <th className='py-2 px-4 sm:py-3 text-left'>Items</th>
                    <th className='py-2 px-4 sm:py-3 text-left'>Prise</th>
                    <th className='py-2 px-4 sm:py-3 text-left'>Status</th>
                </tr>
            </thead>
            <tbody>
                {Orders.length > 0 ? (
                    Orders.map((order) => (
                        <tr 
                            key={order._id} 
                            onClick={() => handleRowClick(order._id)}
                            className='border-b hover:border-gray-50 cursor-pointer'>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    <img
                                    src={order.orderItems[0].image}
                                    alt={order.orderItems[0].name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                                    />
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    #{order._id}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {new Date(order.careatedAt).toLocaleDateString()}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {order.shippingAddress}
                                </td>  
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {order.orderItems.length}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    {order.totalPrise}
                                </td>
                                <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                    <span
                                        className={`${
                                        order.isPaid
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        } px-2 py-2 rounded-full text-xs sm:text-sm font-medium`}
                                    >
                                        {order.isPaid ? "Paid" : "Pending"}
                                    </span>
                                </td>
                                
                        </tr>                           
                    ))
                ):(                                       
                    <tr>
                        <td
                            colSpan={7}
                            className='py-4 px-4 text-center text-gray-500'
                        >
                            No order found.
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
      </div>
    </div>
  )
}

export default MyOrderPage
