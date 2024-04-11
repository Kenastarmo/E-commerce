import React from 'react'
import Image from '../Image/Image'
import { Link } from 'react-router-dom'


type ImageProps = {
  width: number | string,
  height: number | string
}

type cardProps = {
  id: number,
  price: string,
  oldPrice: string,
  title: string,
  imageUrl: string,
  newSeason?: boolean,
  imageProps?: ImageProps
}

const Card = ({ id, price, oldPrice, title, imageUrl, newSeason, imageProps }: cardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <div className={'card-wrapper flex flex-col relative'}>
        <Image alt={title} src={imageUrl} {...imageProps} ></Image>
        <p className='title mt-[6px] text-[16px] text-black text-left font-medium'>{title}</p>
        <div className='flex flex-row gap-3 mt-[6px]'>
          <p className='old-price text-[14px] text-slate-300 line-through'>${oldPrice}</p>
          <p className='old-price text-[14px] text-black font-semibold'>${price}</p>
        </div>
        {newSeason ?
          <div className='newSeason-wrapper absolute top-[6px] left-[6px] z-10 bg-white  px-[8px] rounded-sm flex items-center'>
            <span className='text-yellow-500 text-[14px]'>New Season</span>
          </div>
          :
          null}
      </div>
    </Link>
  )
}

export default Card