import React, { useEffect } from 'react'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react'



const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const NewArrivals = [
    {
        _id: "1",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=1",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "2",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=2",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "3",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=3",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "4",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=4",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "5",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=5",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "6",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=6",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "7",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=8",
                altText: "Germany shirt"
            }
        ]
    },

    {
        _id: "8",
        name: "Germany 1990 Jersey",
        price: 39.99,
        images: [
            {
                url: "https://picsum.photos/500/500?random=1",
                altText: "Germany shirt"
            }
        ]
    },

];

//update scroll buttons
const updateScrollButtons = () => {
    const container = scrollRef.current;
    console.log({
        scrollLeft: container.scrollLeft,
        clientWidth: container.clientWidth,
        containerScrollWidth: container.scrollWidth,
    })

}
useEffect(() => {
    const container = scrollRef.current;
    if(container) {
        container.addEventListener("scroll", updateScrollButtons);
        updateScrollButtons();
    }
});


  return (
    <section>
      <div className='container mx-auto text-center mb-10 relative'>
        <h2 className='text-3xl font-bold mb-4'>
            Explore New Arrivals
        </h2>
        <p className='text-lg text-gray-600 mb-8'>
            Discover the latest styles straight off the runway, freshly added to keep your wardrobe on the cutting edge of football fashion.
        </p>

        {/* Scroll Buttons */}
        <div className='absolute right-0 bottom-[-30px] flex space-x-2'>
            <button className='p-2 rounded border bg-white text-black'>
                <FiChevronLeft className='text-2xl'/>
            </button>

            <button className='p-2 rounded border bg-white text-black'>
                <FiChevronRight className='text-2xl'/>
            </button>
        </div>
      </div>

      {/* Scrollable content*/}
      <div ref={scrollRef} className='container mx-auto overflow-x-scroll flex space-x-6 relative'>
        {NewArrivals.map((product) => (
            <div key={product._id} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative">
                <img 
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className='w-full h-[500px] object-cover rounded-lg' />

                <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                    <Link to={`/product/${product._id}`} className="block">
                        <h4 className='font-medium'>{product.name}</h4>
                        <p className='mt-1'>${product.price}</p>
                    </Link>
                </div>
            </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
