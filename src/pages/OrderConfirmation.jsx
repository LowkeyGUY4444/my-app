import React from 'react'




const checkout = {
    _id:123456,
    createdAt: new Date(),
    checkoutItems: [
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
    shippingAddress: {
        address: 'Belauri-06 Premnagar',
        city: 'Belauri',
        state: 'shudhurpachim',
        zipCode: '140004',
        phone: '9829831787',
    },


}

const OrderConfirmation = () => {

    const calculateAssecptedDelivery = (createdAt) => {
        const orderDate = new Date(createdAt);
        orderDate.setDate(orderDate.getDate() + 7);
        return orderDate;
    };


  return (
    <div className='max-w-4xl mx-auto py-6 bg-white'>
      <h1 className='text-4xl font-bold text-center mb-8 text-emerald-700'>Thank You for Your Order!</h1>

      {checkout && (
        <div className='p-6 rounded-lg shadow border'>
            <div className='flex justify-between mb-20'>
                {/* Order Id and Date */}
                <div className=''>
                    <h2 className='text-xl font-semibold'>Order Id: #{checkout._id}</h2>
                    <p className='text-gray-500'>Order date: {checkout.createdAt.toLocaleDateString()}</p>
                </div>
                <div>
                    <p className='text-emerald-700 text-sm'>
                        Expected Delivery:{" "}
                        {calculateAssecptedDelivery(checkout.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
            {/* Ordered item */}
            <div className='mb-20 '>
            {checkout.checkoutItems.map((item) =>(
                <div key={item.productId} className='flex items-center mb-4'>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4 rounser-mb"
                     />
                     <div>
                        <h4 className='text-md font-semibold '>{item.name}</h4>
                        <p className='text-gray-500 text-sm'>{item.color} | {item.size}</p>
                        <p className='text-gray-500 text-sm'>Quantity: {item.quantity}</p> 
                     </div>
                     <div className='ml-auto text-right'>
                        <p className='text-md'>RS.{item.price?.toLocaleString()}</p>
                        
                     </div>
                </div>
            ))}

            </div>

            {/* Payment and Delivery INFO */}
            <div className='grid grid-cols-2 gap-20'>
                <div>
                    <h4 className='text-lg font-semibold mb-2'>Payment</h4>
                    <p className='text-gray-600'>Cash on Delivery</p>
                </div>
                <div>
                    <h4 className='text-lg font-semibold mb-2'>Delivery</h4>
                    <p className='text-gray-600'>
                        {checkout.shippingAddress.address}

                    </p>
                    <p className='text-gray-600'>
                        {checkout.shippingAddress.city},{" "}
                        {checkout.shippingAddress.state}
                        
                    </p>
                </div>
            </div>
        </div>
      )}
    </div>
  )
}

export default OrderConfirmation
