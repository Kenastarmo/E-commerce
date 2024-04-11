import useFetch from "../../Hooks/useFetch"
import Card from '../Card/Card'
import { Link } from "react-router-dom"
import { ProductData } from "../../types"
import Loader from "../Loader/Loader"
import Error from "../Loader/Loader"

type typeProps = {
  type: string
}

const FeaturedProducts = ({ type }: typeProps) => {

  const { data, loading, error } = useFetch(`/products?populate=*&filters[type][$eq]=${type}`)
  const API_UPLOAD = process.env.API_UPLOAD;


  const imageProps = {
    height: 280,
    width: 225
  }

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <Error />
  }


  return (
    <div className='featured-wrapper w-[1280px] flex flex-col justify-center py-[80px] mx-auto'>
      <div className='top-wrapper flex flex-row justify-between pb-[60px]'>
        <div className='title-wrapper w-[35%] flex justify-start text-[40px] text-play'>{`${type} products`}</div>
        <div className='text-wrapper w-[65%] text-left text-play text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
          book.</div>
      </div>
      <div className='cards w-[1180px] mx-auto grid grid-cols-4 gap-[40px] '>

        {data?.data.map((item: ProductData) => {
          return (
            <Link to={`/product/${item?.id}`} key={item?.id}>
              <Card
                id={item.id}
                price={item?.attributes?.price}
                oldPrice={item?.attributes?.oldPrice}
                title={item?.attributes?.title}
                imageUrl={API_UPLOAD + item?.attributes?.image?.data?.attributes?.url}
                newSeason={item.attributes.isNew}
                key={item?.id}
                imageProps={imageProps} />
            </Link>
          )
        })}

      </div>
    </div>
  )
}

export default FeaturedProducts