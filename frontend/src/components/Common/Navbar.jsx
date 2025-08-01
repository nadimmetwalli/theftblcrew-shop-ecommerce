import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag} from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io';




const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    };

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            {/*Left-logo */}
            <div>
                <Link to="/" className='text-2xl font-medium'>
                    Rabbit
                </Link>
            </div>

            {/* Center - Navigation links */}
            <div className='hidden md:flex space-x-6'>
                <Link to="/collections/all" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Services
                </Link>


                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Products
                </Link>


                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Shirts
                </Link>


                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Merch
                </Link>
            </div>

            {/* Right - Icons*/}
            <div className='flex items-center space-x-4'>
                <Link to="/profile" className='hover:text-black'>
                    <HiOutlineUser className='h-6 w-6 text-gray-700'/>
                </Link>

                <button onClick={toggleCartDrawer} 
                className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>4
                    </span>
                </button>

                {/*Search Icon (Search feature)*/}
                <div className='overflow-hidden'>
                    <Searchbar />
                </div>
                

                <button onClick={toggleNavDrawer} className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />

                </button>   
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md: w-1/3 h-full bg-white shadow-lg tranform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        >
            <div className='flex justify-end p-4'>
                <button onClick={toggleNavDrawer}>
                    <IoMdClose className='h-6 w-6 text-gray-600'/>
                </button>
            </div>

            <div className='p-4'>
                <h2 className='font-semibold mb-4'>Menu</h2>
                <nav className='space-y-4'>
                   <Link 
                   to="#" 
                   onClick={toggleNavDrawer} 
                   className='block text-gray-600 hover:text-black'
                   >
                   Services
                   </Link>


                   <Link 
                   to="#" 
                   onClick={toggleNavDrawer} 
                   className='block text-gray-600 hover:text-black'
                   >
                   Products
                   </Link>


                   <Link 
                   to="#" 
                   onClick={toggleNavDrawer} 
                   className='block text-gray-600 hover:text-black'
                   >
                   Shirts
                   </Link>

                   <Link 
                   to="#" 
                   onClick={toggleNavDrawer} 
                   className='block text-gray-600 hover:text-black'
                   >
                   Merch
                   </Link>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar
