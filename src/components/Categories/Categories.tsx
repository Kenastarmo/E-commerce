import React from 'react'
import { Link } from 'react-router-dom'


const Categories = () => {

    return (

        <div className='w-[1280px] flex flex-col mx-auto' >
            <h2 className='title-wrapper flex justify-start mb-[50px] text-[40px] text-play'>Shop by category</h2>
            <div className='flex  mx-auto grid grid-cols-2 gap-[40px]'>
                <Link to="/products/1">
                    <div className='man-cat-container flex justify-center items-center max-w-[500px] relative overflow-hidden'>
                        <img src='https://s7.landsend.com/is/image/LandsEnd/060393_LEPP_LS_GRH?$med$'></img>
                        <div className='man-cat-text absolute bottom-0 translate-y-[70px] w-[100%] bg-[#0000005c] 
                    text-slate-100 py-[12px] text-montserrat text-[24px] transition-transform'>Man</div>
                    </div>
                </Link>
                <Link to="/products/2">
                    <div className='man-cat-container flex justify-center items-center max-w-[500px] relative overflow-hidden'>
                        <img src='https://www.ackermans.co.za/imagekit/prod-ack-wordpress/prod/media/30b5bc3c-clothing_500x500-copy.jpg?tr=w-auto,bg-FFFFFF,f-webp,dpr-2'></img>
                        <div className='man-cat-text absolute bottom-0 translate-y-[70px] w-[100%] bg-[#0000005c] 
                    text-slate-100 py-[12px] text-montserrat text-[24px] transition-transform'>Woman</div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Categories