import React, { useState, useEffect, useRef } from 'react'
import { PiPhoneThin, PiShoppingCartLight } from 'react-icons/pi';
import { CgMenuRightAlt } from 'react-icons/cg';
import { CiUser } from 'react-icons/ci';
import Image from '../Image/Image';
import Logo from "../../assets/Group1.svg";
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "../../index.css"
import Cart from '../Cart/Cart';
import { useTypedSelector } from '../../Redux/Store';


const Header = () => {

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (cartOpen) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }

  }, [cartOpen]);

  const style = {
    opacity: cartVisible ? 1 : 0,
    transition: 'opacity 250ms ease-in, transform 250ms ease-in',
  }


  const store = useTypedSelector((state) => state.cart.items)
  //console.log(store);

  const handleSidebarOpen = () => {
    setSidebarOpen(() => true);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(() => false);
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  };
  const handleCartClose = () => {
    setCartOpen(() => false);
  };

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {

        setCartOpen(() => false);
      }
    }

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    }
  })

  const finalQuantityItem = () => store.reduce((finalQuantity, currentItem) => {
    return finalQuantity + currentItem.quantity
  }, 0)

  const stylePhone = { fontSize: "36px", color: "#FED83C" }
  const styleOtherIcons = { fontSize: "30px", color: "#2b2d42" }


  return (
    <div className='header py-2  max-w-[1280px] mx-auto'>
      <div className='top-wrapper py-3 flex justify-between flex-row'>
        <div className='left flex items-center'>
          <div className='phone-wrapper flex items-center'>
            <div className='mr-[6px]'>
              <PiPhoneThin className='phone-icon' style={stylePhone} />
            </div>
            <div className='flex flex-col justify-start'>
              <p className='flex text-[14px] text-play font-medium text-[#FED83C] leading-none'>call us</p>
              <span className='text-[16px] text-play font-semibold text-[#2b2d42]'>(123) 456 789</span>
            </div>
          </div>
        </div>
        <div className='center'>
          <div className='flex flex-col justify-center items-center'>
            <Image alt={"asd"} src={Logo} width={50} height={50} />
            <p className='text-[16px] font-semibold text-rajdhani italic mt-[8px]'>Store</p>
          </div>
        </div>

        <div className='right flex flex-row items-center  relative'>
          <Link to='/' className=' hidden md:flex md:p-2 lg:p-3 text-play text-[16px] font-medium text-[#2b2d42] hover:text-[#FED83C] transition-all duration-300 ease-in-out'>Homepage</Link>
          <Link to='#' className='hidden md:flex md:p-2 lg:p-3 text-play text-[16px] font-medium text-[#2b2d42] hover:text-[#FED83C] transition-all duration-300 ease-in-out'>Shop</Link>
          <Link to='#' className='hidden md:flex md:p-2 lg:p-3 text-play text-[16px] font-medium text-[#2b2d42] hover:text-[#FED83C] transition-all duration-300 ease-in-out'>Contact</Link>
          <div className='cart-wrapper relative flex sm:p-2 lg:p-3' ref={cartRef} onClick={handleCartOpen}>
            <Link to="#" className=' relative' >

              <PiShoppingCartLight style={styleOtherIcons} />
              {finalQuantityItem() ?
                <div className='flex justify-center items-center absolute top-[-5px] right-[-5px] w-[20px] h-[20px] p-1 rounded-full bg-blue-400'>
                  <p className='text-[10px] text-slate-100'>{finalQuantityItem()}</p>
                </div> :
                null}

            </Link>
            <div className='cart absolute top-[100%] right-0 z-10 transition-all duration-300 ease-in-out' >
              <Cart style={style} />
            </div>
          </div>
          <Link to="#" className='hidden md:flex md:p-2 lg:p-3' >
            <CiUser style={styleOtherIcons} />
          </Link>
          <div className='cart-wrapper flex items-center sm:p-2 md:hidden'>
            <div className='cart flex cursor-pointer'>
              <CgMenuRightAlt style={styleOtherIcons} onClick={handleSidebarOpen} />
            </div>
          </div>

        </div>

      </div>

      <Sidebar sidebarOpen={sidebarOpen} handleSidebarClose={handleSidebarClose} />

      <div className='bottom-wrapper '></div>
    </div>
  )
}

export default Header