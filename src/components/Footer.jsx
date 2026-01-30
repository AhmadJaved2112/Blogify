import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-4'>
        <div className='mb-5'>
          <div className='grid grid-col-2 gap-5 lg:col-span-4 md:grid-cols-4'>

            <div>
              <p className='font-medium tracking-wide text-gray-300'>Category</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>News</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>World</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Games</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>References</a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium tracking-wide text-gray-300'>Apples</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Web</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>E-commerce</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Business</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Entertainment</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Portfolio</a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Media</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Brochure</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Non Profit</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Education</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-medium tracking-wide text-gray-300'>Business</p>
              <ul className='mt-2 space-y-2'>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Enterpreneur</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Personal</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Wiki</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Forum</a>
                </li>
                <li>
                  <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Projects</a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div className='flex flex-col justify-between pt-5 pc-10 border-t border-gray-800 sm:flex-row'>
          <p className='text-gray-500'>© Copywrite 2026 || All right reserved</p>
          <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaTwitter className='w-6 h-6'/></a>
            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaInstagram className='w-6 h-6'/></a>
            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500'><FaFacebook className='w-6 h-6'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer