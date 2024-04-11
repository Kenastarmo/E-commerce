import React from 'react'
import '../../index.css'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className=' w-[100%] max-w-[100%]'>
      <Slider />
      <FeaturedProducts type={"featured"} />
      <Categories />
      <FeaturedProducts type={"trending"} />
    </div>
  )
}

export default Home