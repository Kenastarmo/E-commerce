import React from 'react'
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';

type sidebarProps = {
  sidebarOpen: boolean,
  handleSidebarClose: () => void;
}

const Sidebar = ({ sidebarOpen, handleSidebarClose }: sidebarProps) => {

  const styleLogIn = { fontSize: "30px", color: "#2b2d42" }
  const styleCloseSidebar = { cursor: "pointer", color: "#FFFFFF" }

  return (
    <div className={`${sidebarOpen ? 'active' : ''} sidebar fixed top-0 right-0 p-[20px] z-10 bg-black min-h-[100vh] 
    translate-x-[400px]`}>

      <div className='flex flex-col justify-start items-start mt-[20%] gap-[12px]'>
        <div onClick={handleSidebarClose} style={styleCloseSidebar}>X</div>
        <Link to='#' className='md:p-2 lg:p-4 text-play text-[16px] font-medium text-[#2b2d42] hover:text-[#FED83C] transition-all duration-300 ease-in-out'>Homepage</Link>
        <Link to='#' className='md:p-2 lg:p-4 text-play text-[16px] font-medium text-[#2b2d42] hover:text-[#FED83C] transition-all duration-300 ease-in-out'>Shop</Link>
        <Link to='#' className='md:p-2 lg:p-4 text-play text-[16px] font-medium text-[#2b2d42] hover:text-[#FED83C] transition-all duration-300 ease-in-out'>Contact</Link>

        <Link to="#" className='md:p-2 lg:p-4 mx-auto' >
          <CiUser style={styleLogIn} />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar