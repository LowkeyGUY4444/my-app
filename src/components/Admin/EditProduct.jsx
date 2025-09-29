import React from 'react'
import { useState } from 'react'



const EditProduct = () => {

  const [productData, setProductData] = useState({
    name:'',
    discription:'',
    prise: 0,
    countInStock: 0,
    sku:'',
    category:'',
    brand:'',
    sizes:[],
    colors:[],
    collections:'',
    meterial:'',
    gender:'',
    images:[
      {
        url:'https://picsum.photos/200?random=1',
      },
      {
        url:'https://picsum.photos/200?random=2',
      },
    ]

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 const handleImageUpload = async (e) => {
    const files = e.target.files[0];
    console.log(files);

    // const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
    // setProductData((prevData) => ({
    //   ...prevData,
    //   images: [...prevData.images, ...newImages],
    // }));
  };

  const handleSumbit = (e) => {
      e.preventDefault();
      console.log(productData);

  }

  return (
    <div className=' max-w-5xl mx-auto p-6 shadow-md rounded-md'>
      <h2 className='text-3xl font-bold mb-6'>Edit Product</h2>
      <form onSubmit={handleSumbit}>
        {/* Name */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Product Name </label>
          <input
            type='text'
            name='name'
            value={productData.name}
            onChange={handleChange}
            className=' w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>
        {/* Discription */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Discription</label>
          <textarea
            name='discription'
            value={productData.discription}
            onChange={handleChange}
            className=' w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>
        {/* Price */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Price</label>
          <input
            type='number'
            name='prise'
            value={productData.prise}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>  
        {/* Count in Stock    */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Count in Stock</label>
          <input
            type='number'
            name='countInStock'
            value={productData.countInStock}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div> 
        {/* SKU */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>SKU</label>
          <input
            type='text'
            name='sku'
            value={productData.sku}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div> 
        {/* Sizes */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Sizes (comma-seperated)</label>
          <input
            type='text'
            name='sizes'
            value={productData.sizes.join(', ')}
            onChange={(e) => setProductData({ ...productData, sizes: e.target.value.split(',').map(size => size.trim())})}
            className='w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div> 
        {/* Color */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Colors (comma-seperated)</label>
          <input
            type='text'
            name='colors'
            value={productData.colors.join(', ')}
            onChange={(e) => setProductData({ ...productData, colors: e.target.value.split(',').map((color) => color.trim())})}
            className='w-full border border-gray-300 rounded-md p-2'
            required
          />
        </div>
        {/* Image Upload */}
        <div className='mb-6'>
          <label className='block font-semibold mb-2'>Image Upload</label>
          <input
            type='file'
            name='image'
            onChange={handleImageUpload}
          />
          <div className='flex gap-4 mt-4'>
            {productData.images.map((image, index) =>(
              <div key={index}>
                <img src={image.url} alt='Product image' className='w-20 h-20 object-cover rounded-md shadow-md' />
              </div>
            )
            )}

          </div>
        </div>
        <button
          type='submit'
          className='bg-green-500 text-white w-full px-4 py-2 rounded hover:bg-green-600 transition-colors'>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditProduct
