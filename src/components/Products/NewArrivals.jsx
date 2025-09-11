import React, { use } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';



const NewArrivals = () => {

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const NewArrivals = [
        {
            _id: 1,
            name: 'Jacket',
            price: 'RS.5999',
            image: [
                {
                    url:'https://picsum.photos/500?random=3',
                    altText:'Jacket'
                }],
            
        },
        {
            _id: 2,
            name: 'Sneakers',
            price: 'RS.2599',
            image: [
                {
                    url:'https://picsum.photos/500?random=4',
                    altText:'Sneakers'
                }
            ],

        },
        {
            _id: 3,
            name: 'Backpack',
            price: 'RS.1200',
            image: [
                {
                    url:'https://picsum.photos/500?random=5',
                    altText:'Backpack'
                }
            ],

        },
        {
            _id: 4,
            name: 'Watch',
            price: 'RS.3999',
            image: [
                {
                    url:'https://picsum.photos/500?random=6',
                    altText:'Watch'
                }
            ],
        },
        {
            _id: 5,
            name: 'Sunglasses',
            price: 'RS.1999',
            image: [
                {
                    url:'https://picsum.photos/500?random=7',
                    altText:'Sunglasses'
                }
            ],
        },
        {
            _id: 6,
            name: 'Hat',
            price: 'RS.999',
            image: [
                {
                    url:'https://picsum.photos/500?random=8',
                    altText:'Hat'
                }
            ],
        },
        {
            _id: 7,
            name: 'T-Shirt',
            price: 'RS.799',
            image: [
                {
                    url:'https://picsum.photos/500?random=9',
                    altText:'T-Shirt'
                }
            ],
        },
        {
            _id: 8,
            name: 'Jeans',
            price: 'RS.1499',
            image: [
                {
                    url:'https://picsum.photos/500?random=10',
                    altText:'Jeans'
                }
            ],
        },
    ];

    // Mouse Events for Dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseUporLeave = () => {
        setIsDragging(false);
    };
    const handleMouseMove = (e) => {
        if(!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 1; //scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    }



    // scroll Function For Button
    const scroll = (direction) => {
        const scrollAmount = direction === 'left' ? -360 : 360;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };


    // update scroll buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if(container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > container.clientWidth + leftScroll;

            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(rightScrollable);
        }
        console.log({
            scrollLeft: container.scrollLeft,
            clientWidth: container.clientWidth,
            containerScrollWidth: container.scrollWidth,
        });
    };


    useEffect(() => { 
            const container = scrollRef.current;
            if(container) {
                container.addEventListener('scroll', updateScrollButtons);
                updateScrollButtons();
                return () => {
                    container.removeEventListener('scroll', updateScrollButtons);
                };
            }
        },[]);



  return (
    <div>
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto text-center mb-10 relative'>
                <h2 className='text-3xl font-bold mb-8 text-center'>New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>
                    Check out the latest additions to our collection! Discover the latest styles from the runway.
                </p>


                {/* scroll Button */}
                <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
                    <button 
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-2 rounded border ${!canScrollLeft ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}>

                        <FiChevronLeft className='text-2xl h-6 w-6' />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-2 rounded border ${!canScrollRight ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-black'}`}>
                        <FiChevronRight className='text-2xl h-6 w-6' />
                    </button>
                </div>
            </div>


            {/* Scrollable Content */}
            <div 
                ref={scrollRef}
                className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUporLeave}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUporLeave}
                >
                {NewArrivals.map((item) => (
                    <div 
                        key={item._id} 
                        className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative '>
                            <img 
                                src={item.image[0]?.url} 
                                alt={item.image[0]?.altText}
                                className='w-full h-[500px] object-cover rounded-lg'
                                draggable={false}
                            />
                            <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md  text-white p-4 rounded-b-lg'>
                                <Link to={`/product/${item._id}`} className='block'>
                                    <h3 className='font-medium '>{item.name}</h3>
                                    <p className='mt-1'>{item.price}</p>
                                </Link>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
};

export default NewArrivals
