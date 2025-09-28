import { useState } from 'react'



const UserManagement = () => {
    const users =[
        {
            _id: "1",
            name: "Akshya",
            email: "akshya@example.com",
            role: "admin",

        },
        {
            _id: "2",
            name: "Bipin",
            email: "bipin@example.com",
            role: "customer",

        },
    ];
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "customer",  //Default
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //reset form after sumbitting
        setFormData({
            name: "",
            email: "",
            password: "",
            role: "customer",
        });
        // TODO: Add logic to actually add the user to the list or send to backend
        console.log("New user added:", formData);
    };

    const handleRoleChange = (userId, newRole) => {
        console.log(`Changing role for user ${userId} to ${newRole}`);
    }

    const handleDeleteUser = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            // TODO: Add logic to actually delete the user from the list or send to backend
            console.log(`Deleting user ${userId}`);
        }  
    }
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-4'>User Management</h2>
      <div className='mb-6 p-6 rounded-lg shadow-md'>
        <h3 className='text-lg font-bold mb-4'>Add New User</h3>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='block text-gray-700 '>Name</label>
                <input 
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 rounded'
                    required
                />

            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 '>Email</label>
                <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 rounded'
                    required
                />

            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 '>Password</label>
                <input 
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 rounded'
                    required
                />
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700 '>Role</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className='w-full p-2 border border-gray-300 rounded'
                >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button type="submit" className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                Add User
            </button>
        </form>
      </div>

      {/* User List Management */}
      <div className='mt-6 p-6 rounded-lg shadow-md'>
        <h3 className='text-lg font-bold mb-4'>User List</h3>
        <table className='w-full'>
            <thead className='bg-gray-200 text-xs uppercase text-gray-700'>
                <tr>
                    <th className='px-4 py-2'>Name</th>
                    <th className='px-4 py-2'>Email</th>
                    <th className='px-4 py-2'>Role</th>
                    <th className='px-4 py-2'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user._id} className='border-b hover:bg-gray-50 text-center'>
                        <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>{user.name}</td>
                        <td className='p-4'>{user.email}</td>
                        <td className='p-4'>
                            <select 
                                value={user.role}
                                onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                className=' p-2 border rounded'
                            >
                                <option value="admin">Admin</option>
                                <option value="customer">Customer</option>

                            </select>
                        </td>
                        <td className='p-4'>
                            <button 
                                onClick={() => handleDeleteUser(user._id)}
                                className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'>
                                    Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserManagement
