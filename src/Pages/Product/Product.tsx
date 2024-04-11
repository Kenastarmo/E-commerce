import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router'
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useAppDispatch } from '../../Redux/Store';
import { addToCart } from '../../Redux/features/CartSlice';
import useFetch from "../../Hooks/useFetch"
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

type Image = {
  id: number,
  attributes: {
    url: string,
  }
}

const Product = () => {
  const { id } = useParams();

  const [productImage, setProductImage] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(1)


  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const dispatch = useAppDispatch();
  const intId = Number(id);

  useEffect(() => {
    if (data?.data) {
      setProductImage(process.env.API_UPLOAD + data.data.attributes.image.data.attributes.url)
    }
  }, [data])

  const handleClick = (item: string) => {
    setProductImage(item)
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className='w-[1280px] h-[75vh] flex flex-row justify-between mx-auto py-[50px]'>

      <div className='images-wrapper w-[45%] min-w-[45%] flex flex-row gap-4'>
        <div className="all-images flex flex-col gap-4">
          {data?.data.attributes.Galerija.data.map((item: Image) => {
            return (
              <div key={item.id} onClick={() => handleClick(process.env.API_UPLOAD + item.attributes.url)}
                className=' p-2 h-[100px] w-[150px] flex items-center jusify-center border border-solid border-inherit  '>
                <img src={`${process.env.API_UPLOAD}${item.attributes.url}`} alt="" className='mx-auto my-auto max-h-full max-w-full' />

              </div>
            )
          })}

        </div>
        <div className="cover flex justify-center items-center p-3 w-full border border-solid border-inherit ">
          <img src={productImage} alt="" className='max-h-full max-w-full' />

        </div>
      </div>
      <div className='productInfo w-[45%] min-w-[45%] flex flex-col'>
        <h1 className='product-title text-play text-[34px] text-left font-medium'>{data?.data?.attributes?.title}</h1>
        <p className='price text-[26px] text-left text-blue-400 mt-[20px]'>${data?.data?.attributes.price}</p>
        <p className='product-desc max-w-[70%] text-[16px] text-left text-black mt-[20px] '>{data?.data?.attributes.description}</p>

        <div className='flex flex-row items-center rounded-md mt-[20px] border border-solid border-slate-300 gap-4' style={{ width: "fit-content" }}>
          <div className='plus py-[8px] w-[40px] cursor-pointer text-[20px] border border-0 border-r rounded-l border-slate-300
        hover:bg-blue-400 hover:text-white transition ease-in-out duration-500' onClick={() => { setQuantity(prev => prev + 1) }}>+</div>
          <div className='py-[8px] text-[18px]'>{quantity}</div>
          <div className='minus py-[8px] w-[40px] cursor-pointer text-[20px] border border-0 border-l border-slate-300 rounded-r 
        hover:bg-blue-400 hover:text-white transition ease-in-out duration-500'
            onClick={() => { setQuantity(prev => prev > 1 ? prev - 1 : 1) }}>-</div>
        </div>

        <div className='add-to-cart flex flex-row items-center mt-[30px] px-[50px] py-[8px] gap-2 bg-blue-300 rounded cursor-pointer
      hover:bg-blue-400 transition ease-in-out duration-500 '
          style={{ width: "fit-content" }}
          onClick={() => dispatch(addToCart({ quantity: quantity, id: intId, title: data.data.attributes.title, price: data.data.attributes.price, image: data?.data?.attributes?.image?.data?.attributes.url }))}>

          <MdOutlineAddShoppingCart style={{ color: "white" }} />
          <p className=' text-left text-white'>ADD TO CART</p>
        </div>
      </div>
    </div>
  )
}

export default Product