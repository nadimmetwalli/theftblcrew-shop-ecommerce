import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";




const Topbar = () => {
  return (
    <div className='bg-gradient-to-b from-sky-300 via-sky-400 to-blue-500   h-10'>
      <div className='container mx-auto flex justify-between items-center py-3'>
        <div className='hidden md:flex items-center space-x-4'>
          <a href='#' className='hover:text-gray-300'>
            <IoLogoYoutube className='h-5 w-5'/>
          </a>

          <a href='#' className='hover:text-gray-300'>
            <IoLogoInstagram className='h-5 w-5'/>
          </a>

          <a href='#' className='hover:text-gray-300'>
            <BsTwitterX className='h-5 w-5'/>
          </a>
        </div>

        <div className='text-sm text-center flex-grow'>
            <span>We ship worldwide - Fast and reliable shipping.</span>
        </div>

        <div className='text-sm hidden md:block'>
            <a href='tel:+37256983182' className='hover:text-gray-300'>+372 56983182</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
