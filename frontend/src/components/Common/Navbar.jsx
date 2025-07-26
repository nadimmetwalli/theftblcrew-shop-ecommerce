import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag} from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from './Searchbar';



const Navbar = () => {
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
                <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
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

                <button className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>4
                    </span>
                </button>

                {/*Search Icon (Search feature)*/}
                <div className='overflow-hidden'>
                    <Searchbar />
                </div>
                

                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />

                </button>


                
                
                
            </div>

        </nav>
    </>
  )
}

export default Navbar
