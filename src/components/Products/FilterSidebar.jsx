import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'


const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category:'',
    gender: '',
    color:'',
    size:[],
    material:[],
    brand:'',
    minPrise: '100',
    maxPrise: '20000',
  })

const [priceRange, setPriceRange] = useState([100, 20000]);
const category=['Top Wear', 'Bottom Ware',];
const gender=['Men', 'Women',];
const color=['Black', 'Blue', 'White', 'Red', 'Pink',];
const size=['XS','S', 'M', 'L', 'XL','XXL',];
const material=['Cotton', 'Silk', 'Denim','leather',];
const brand=['Nike', 'Adidas', 'Puma', 'Reebok' ,];

useEffect(() => { 
 const params = Object.fromEntries(searchParams);
 setFilters({
  category: params.category || '',
  gender: params.gender || '',
  color: params.color || '',
  size: params.size ? params.size.split(',') : [],
  material: params.material ? params.material.split(',') : [],
  brand: params.brand ? params.brand.split(',') : [],
  minPrise: params.minPrise || '100',
  maxPrise: params.maxPrise || '20000',
 });
 setPriceRange([filters.minPrise, filters.maxPrise]);
 }, [searchParams]);


 
  return (
    <div className='p-4'>
      <h3 className='text-xl font-semibold mb-4 text-gray-700'>Filter</h3>

      {/* Category */}
      <div className='mb-6'>
        <label className='block text-gray-700  font-medium mb-2'>Category</label>
        {category.map((cat) => (
          <div key={cat} className='flex items-center mb-1'>
            <input 
              type='radio'
              name='category'
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'               
            />
            <span className='text-gray-700 cursor-pointer'>{cat}</span>
          </div>
          
            ))}       
      </div>
      {/* Gender */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-medium mb-2'>Gender</label>
        {gender.map((gen) => (
          <div key={gen} className='flex items-center mb-1'>
            <input 
              type='radio'
              name='gender'
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'               
            />
            <span className='text-gray-700 cursor-pointer'>{gen}</span>
          </div>
          
            ))}       
      </div>
      {/* Color */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-medium mb-2'>Color</label>
        <div className='flex flex-wrap gap-2'>
        {color.map((col) => (
          <button
            key={color}
            name='col'
            className='w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105'
            style={{backgroundColor: col.toLowerCase()}}
          ></button>
        ))}   
        </div>    
      </div>
      {/* size */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-medium mb-2'>Size</label>
            {size.map((size) => (
              <div key={size} className='flex items-center mb-1'>
            <input 
              type='checkbox'
              name='size'
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'               
            />
            <span className='text-gray-700 cursor-pointer'>{size}</span>
          </div>
            ))}
      </div>
      {/* material */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-medium mb-2'>Material</label>
            {material.map((material) => (
              <div key={material} className='flex items-center mb-1'>
            <input 
              type='checkbox'
              name='size'
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'               
            />
            <span className='text-gray-700 cursor-pointer'>{material}</span>
          </div>
            ))}
      </div>
      {/* brand */}
      <div className='mb-6'>
        <label className='block text-gray-700 font-medium mb-2'>Brand</label>
            {brand.map((brand) => (
              <div key={brand} className='flex items-center mb-1'>
            <input 
              type='checkbox'
              name='size'
              className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300'               
            />
            <span className='text-gray-700 cursor-pointer'>{brand}</span>
          </div>
            ))}
      </div>
      {/* Prise range */}

      {/* <div className='mb-8'>
        <label className='block text-gray-700 font-medium mb-2'>Price Range</label>
            <input
             type='range'
             name='priseRange' 
             min={100} max={20000} 
             value={priceRange}
             className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
             />
             <div className='flex justify-between text-gray-600 mt-2'>
              <span>RS.{priceRange[0]}</span>
              <span>RS.{priceRange[1]}</span>
             </div>
      </div> */}

      <div className="mb-8">
        <label className="block text-gray-700 font-medium mb-2">Price Range</label>
        <input
          type="range"
          min={100}
          max={20000}
          step={100}
          value={priceRange[0]}   // only using min
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>RS.{priceRange[0]}</span>
          <span>RS.{priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
