import React from 'react'
import { Link } from 'react-router-dom';

import footballCollection from "../../assets/footballShirtsCollection.png";
import productCollection from "../../assets/productCollection.png";

const GenderCollection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
      <div className='container mx-auto flex flex-col md:flex-row gap-8'>
        {/* Product Collection*/}
        <div className='relative flex-1'>
            <img
            src={productCollection}
            alt='Product Collection'
            className='w-full h-[700px] object-cover' 
            />

            <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                    Products Collection
                </h2>
                <Link to="/collections/all?type=Product"
                className='text-gray-900 underline'>
                    Shop Now
                </Link>
            </div>
        </div>

        {/* Football Shirts Collection */}
        <div className='relative flex-1'>
            <img
            src={footballCollection}
            alt='Product Collection'
            className='w-full h-[700px] object-cover' 
            />

            <div className='absolute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                    Shirts Collection
                </h2>
                <Link to="/collections/all?type=Shirts"
                className='text-gray-900 underline'>
                    Shop Now
                </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default GenderCollection
