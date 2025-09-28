import { Link } from "react-router-dom"

const AdminHomePage = () => {
    const orders = [
    {
        _id: 123123,
        user: { name: "Akshya" },
        totalPrice: 1200,
        status: "pending",
    },
    {
        _id: 456456,
        user: { name: "John" },
        totalPrice: 2200,
        status: "completed",
    },
    ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: Total Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">RS. 3400</p>
          <p className="text-sm text-gray-500">Last 30 days</p>
        </div>

        {/* Card 2: Total Orders */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">120</p>
          <p className="text-sm text-gray-500">Last 30 days</p>
          <Link to="/admin/orders" className="text-indigo-500 hover:text-indigo-600 text-sm font-medium">View all orders</Link>
        </div> 

        {/* Card 3: Total Products */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
          <p className="text-3xl font-bold text-indigo-600 mt-2">RS. 3400</p>
          <p className="text-sm text-gray-500">Last 30 days</p>
          <Link to="/admin/products" className="text-indigo-500 hover:text-indigo-600 text-sm font-medium">View all products</Link>
        </div>  
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full w-full text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>  
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Order  */}
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <tr key={order._id} className="border-b hover:bg-gray-50 cursor-pointer text-center">
                            <td className="p-4">#{order._id}</td>
                            <td className="p-4">{order.user.name}</td>
                            <td className="p-4">RS. {order.totalPrice}</td>
                            <td className="p-4">{order.status}</td>
                        </tr>
                ))
            ):(
                <tr>
                    <td colSpan={4} className="text-center py-4 text-gray-500">
                        No orders found.
                    </td> 
                </tr>  
            )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminHomePage
