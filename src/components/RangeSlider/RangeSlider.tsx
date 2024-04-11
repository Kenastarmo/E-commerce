import React, { ChangeEvent } from 'react'
import { useState } from 'react';

type RangeSliderProps = {
  maxPrice: number,
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>

}

const RangeSlider = ({ maxPrice, setMaxPrice }: RangeSliderProps) => {

  const [submittedMaxPrice, setSubmittedMaxPrice] = useState<number>(0)

  const handleMaxPriceRange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmittedMaxPrice(Number(e.target.value));
  }

  const handleSubmitRange = () => {
    // setMaxPrice(submittedMaxPrice !== null ? submittedMaxPrice : maxPrice);
    setMaxPrice(() => submittedMaxPrice);
  }

  return (

    <div className='range-wrapper flex flex-col justify-start items-center gap-4 '>

      <div className='flex flex-row justify-between items-center gap-4'>
        <span className=''>0</span>
        <input id="default-range" type="range" min={0} max={1000} onChange={handleMaxPriceRange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        <span className=''>{submittedMaxPrice}</span>
      </div>
      <button className='block text-[14px] w-fit py-[4px] px-[10px] mr-auto bg-[#1471ED] hover:bg-[#005CD7] rounded-sm 
      text-white text-montserrat focus:outline-none transition' onClick={handleSubmitRange}>Submit</button>

    </div>
  )
}

export default RangeSlider