import React from 'react'
import logo from '../../assets/Group1.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='footer flex justify-between py-2 px-4 max-w-[1280px] mx-auto py-[60px]'>
      <div className='left-wrapper lg:w-[40%] flex flex-col justify-start'>
        <img src={logo} style={{ width: '100px', height: '100px' }} />
        <span className='text-[14px] text-left text-play mt-[20px] max-w-[60%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</span>
      </div>
      <div className='center-wrapper lg:w-[25%]'>
        <h2 className='text-[24px] text-play'>Links</h2>
        <div className='link flex flex-col mt-[20px] gap-2'>
          <span className='text-[16px] text-play hover:text-[#FED83C] cursor-pointer transition-all duration-300 ease-in-out'>Homepage</span>
          <span className='text-[16px] text-play hover:text-[#FED83C] cursor-pointer transition-all duration-300 ease-in-out'>About Us</span>
          <span className='text-[16px] text-play hover:text-[#FED83C] cursor-pointer transition-all duration-300 ease-in-out'>Shop</span>
          <span className='text-[16px] text-play hover:text-[#FED83C] cursor-pointer transition-all duration-300 ease-in-out'>Contact</span>
        </div>
      </div>
      <div className='right-wrapper lg:w-[25%] '>

        <h2 className='text-[24px] text-play'>Newsletter</h2>
        <div className="relative h-11 w-full min-w-[120px] max-w-[220px] mx-auto">
          <input placeholder="Your email"
            className="text-play peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
          <label
            className="text-play after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          </label>
        </div>
        <div className='icons flex flex-row justify-center gap-4 mt-[40px] mx-auto '>

          <div className='min-h-[35px] min-w-[35px] flex justify-center items-center rounded-full bg-white 
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer '>
            <FaFacebookF />
          </div>
          <div className='min-h-[35px] min-w-[35px] flex justify-center items-center rounded-full bg-white 
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer '>
            <FaInstagram />
          </div>
          <div className='min-h-[35px] min-w-[35px] flex justify-center items-center rounded-full bg-white 
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer '>
            <FaTwitter />
          </div>
          <div className='min-h-[35px] min-w-[35px] flex justify-center items-center rounded-full bg-white 
          shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer '>
            <FaWhatsapp />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer