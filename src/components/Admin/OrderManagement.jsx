import React from 'react'

const OrderManagement = () => {

  const orders =[
    {
      _id: 123123,
      user: {
        name: 'akshya'
      },
      totalPrise: 5000,
      status: 'Processing',
    },
    {
      _id: 12355123,
      user: {
        name: 'Bipin'
      },
      totalPrise: 10000,
      status: 'Processing',
    }
  ]


 const handlestatuschange = (orderId, newStatus) => {
  console.log(`Changing status for order ${orderId} to ${newStatus}`);
 }

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-6'>Order Management</h2>
      <div className='overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='min-w-full text-gray-500'>
          <thead className='bg-gray-200 text-xs uppercase text-gray-700 text-left'>
            <tr>
              <th className='px-4 py-2'>Order ID</th>
              <th className='px-4 py-2'>Customer</th>
              <th className='px-4 py-2'>Total Price</th>
              <th className='px-4 py-2'>Status</th>
              <th className='px-4 py-2'>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length >0 ? (
            orders.map((order) => (
              <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer text-left'>
                <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>#{order._id}</td>
                <td className='p-4'>{order.user.name}</td>
                <td className='p-4'>{order.totalPrise}</td>
                <td className='p-4'>
                  <select 
                    value={order.status} 
                    onChange={(e) => handlestatuschange(order._id, e.target.value)} 
                    className='p-1 border rounded-lg'>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className='p-4'>
                  <button 
                    onClick={() => handlestatuschange(order._id, 'Delivered')}
                    className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors'
                    >
                      Mark as Delivered
                  </button>
                </td> 
                </tr>
                  ))
            ):
            (
              <tr>
                <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                  No Orders found.
                </td>
              </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderManagement
