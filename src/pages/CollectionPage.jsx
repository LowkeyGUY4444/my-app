import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaFilter } from "react-icons/fa";
import { useRef } from 'react';
import FilterSidebar from '../components/Products/FilterSidebar';
import ShortOption from '../components/Products/ShortOption';





const CollectionPage = () => {

    const [products, setProducts] = useState([]);
    const sidebarRef = useRef(null);
    const[isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleClickOutside = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
            }
        };


    useEffect(() => {
        //event listner for clicks
        document.addEventListener('mousedown',handleClickOutside);
        //clean event listner
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        };

    });


    useEffect(() => {
        setTimeout(() => {
            const fetchedProducts = [
                   {
                    _id: 1,
                    name: 'Jacket',
                    price: 'RS.5999',
                    images: [{ url:'https://picsum.photos/500?random=16'}],
                    },
                        {
                    _id: 2,
                    name: 't-shirt',
                    price: 'RS.999',
                    images: [{ url:'https://picsum.photos/500?random=17'}],
                    },    {
                    _id: 3,
                    name: 'Cap',
                    price: 'RS.899',
                    images: [{ url:'https://picsum.photos/500?random=18'}],
                    },    {
                    _id: 4,
                    name: 'hodiee',
                    price: 'RS.3999',
                    images: [{ url:'https://picsum.photos/500?random=19'}],
                    },
                    {
                    _id: 5,
                    name: 'coat',
                    price: 'RS.14999',
                    images: [{ url:'https://picsum.photos/500?random=20'}],
                    },
                        {
                    _id: 6,
                    name: 'innerware',
                    price: 'RS.399',
                    images: [{ url:'https://picsum.photos/500?random=21'}],
                    },    {
                    _id: 7,
                    name: 'sweatre',
                    price: 'RS.6599',
                    images: [{ url:'https://picsum.photos/500?random=22'}],
                    },    {
                    _id: 8,
                    name: 'jeans',
                    price: 'RS.999',
                    images: [{ url:'https://picsum.photos/500?random=23'}],
                    },
                ]; setProducts(fetchedProducts);
        }, 1000);
    },
    []);



  return (
    <div className='flex flex-col lg:flex-row'>
      <button
        onClick={toggleSidebar}
        className='lg:hidden border p-2 flex justify-center items-center'>
        <FaFilter className='mr-2' />
      </button>

      {/* filter sidebar */}
      <div 
        ref={sidebarRef} 
        className={`fixed inset-y-0 z-50 left-0  w-64 bg-white overflow-auto transition-transform duration-300 lg:static lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>

            <FilterSidebar />
      </div>
      <div className='flex-grow p-4'>
        <h2 className='text-2xl mb-4 uppercase'>All collection</h2>

        {/* Short option */}
            <ShortOption    />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            <div 
            key={product._id} 
            className="rounded-xl shadow-md overflow-hidden bg-white cursor-pointer hover:shadow-lg transition"
            >
            <img 
                src={product.images[0].url} 
                alt={product.name} 
                className="w-full h-72 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500">{product.price}</p>
            </div>
            </div>
        ))}
        </div> 

      </div>
    </div>
  )
}

export default CollectionPage
