import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import useFetch from "../../Hooks/useFetch"
import { ProductData } from '../../types';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

type listProps = {
  catId: number,
  sort: string,
  maxPrice: number,
  selectedSubCat: string[]

}

const imageProps = {
  width: 225,
  height: 225
}

const List = ({ catId, sort, maxPrice, selectedSubCat }: listProps) => {
  //const [apiData, setApiData] = useState<[]>([])

  const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedSubCat.map((item) => `&[filters][subcategories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`)

  const API_UPLOAD = process.env.API_UPLOAD;

  if (loading) {
    <Loader />
  }

  if (error) {
    <Error />
  }

  return (

    <div className='list-wrapper w-[100%] grid grid-cols-3 gap-[40px]'>
      {data?.data?.map(({ id, attributes: { price, oldPrice, title, image, isNew } }: ProductData, index: number) => {
        return (
          <Card
            id={id}
            price={price}
            oldPrice={oldPrice}
            title={title}
            imageUrl={API_UPLOAD + (image?.data?.attributes?.url ?? '')}
            newSeason={isNew}
            key={index}
            imageProps={imageProps}
          />
        )
      })}
    </div>

  )
}

export default List