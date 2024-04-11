import React from 'react'
import { BiError } from "react-icons/bi";


const Error = () => {
    return (
        <div className='h-[75vh] w-[100%] flex items-center justify-center'>

            <div className='flex flex-col items-center justify-center gap-[12px]'>
                <BiError className='text-[80px]' />
                <h3 className='text-[30px] text-play'>Ooops SORRY...</h3>
            </div>

        </div>
    )
}

export default Error