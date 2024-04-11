import React, { useState } from 'react'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const urlImages = [
    "https://www.rist.gr/media/catalog/category/2.category_banner_smartwatches.png",
    "https://www.shirtworks.co.uk/frontend/images/categories-list-banner.png",
    "https://basel-cec2.kxcdn.com/basel/wp-content/uploads/2015/08/baner-for-cat-boots-5.jpg",
    "https://images.pexels.com/photos/691120/pexels-photo-691120.jpeg",
    "https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  }

  return (

    <div className='slider h-[80vh] w-[100%] max-w-[100%] relative'>
      <div className='container-image w-[300vw] h-[100%] flex' style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <img src={urlImages[0]} className='w-[100vw] h-[100%] object-cover' alt=""></img>
        <img src={urlImages[1]} className='w-[100vw] h-[100%] object-cover' alt=""></img>
        <img src={urlImages[2]} className='w-[100vw] h-[100%] object-cover' alt=""></img>
      </div>
      <div className='slider-buttons absolute bottom-[30px] left-[50%] flex flex-row gap-4'>
        <div className='left-button cursor-pointer p-3 border border solid border-slate-500' onClick={prevSlide}>
          <GoArrowLeft />
        </div>
        <div className='right-button cursor-pointer p-3 border border solid border-slate-500' onClick={nextSlide} >
          <GoArrowRight />
        </div>
      </div>

    </div>
  )
}

export default Slider