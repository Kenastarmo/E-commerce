import React, { ChangeEvent, useEffect, useState } from 'react'
import List from '../../components/List/List';
import { useParams } from 'react-router';
import useFetch from '../../Hooks/useFetch'
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import Loader from '../../components/Loader/Loader';
import Sort from "../../components/Sort/Sort";
import Error from '../../components/Error/Error';

interface Item {
  id: number | string,
  attributes: {
    title: string
  }
}


const ProductList = () => {

  const { id } = useParams();
  const catId = Number(id);


  const { data, loading, error } = useFetch(`/subcategories?[filters][categories][id][$eq]=${catId}`)


  console.log(data?.data)


  const [maxPrice, setMaxPrice] = useState<number>(1000);

  const [sort, setSort] = useState("asc");
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [hasChange, sethasChange] = useState<boolean>(false)

  useEffect(() => {
    if (!loading && data) {
      const defaultSubCategories = data.data.map((item: Item) => String(item.id));
      setSelectedSubCategories(defaultSubCategories);
    }
  }, [loading, data]);

  const handleChangeSubcat = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategories(isChecked ? [...selectedSubCategories, value] : selectedSubCategories.filter(item => item !== value))
  };

  useEffect(() => {
    sethasChange((prev) => !prev);
  }, [sort, selectedSubCategories]);

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error />
  }

  return (
    <div className='products flex flex-row justify-between px-4 py-[50px] h-[100%] w-[1280px] mx-auto'>
      <div className='left w-[25%] flex justify-start p-4'>
        <div className='filter flex flex-col justify-start'>
          <h3 className='title-product-categories text-[20px] text-left mb-[16px] text-montserrat'>Product Categories</h3>

          {data?.data?.map((item: Item) => {
            const itemId: string = String(item.id)
            return (
              <div className="flex items-center mb-4">
                <input
                  id={itemId}
                  type="checkbox"
                  value={itemId}
                  onChange={handleChangeSubcat}
                  checked={selectedSubCategories.includes(itemId)}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:focus:ring-blue-600 
                  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={itemId}
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {item.attributes.title}
                </label>
              </div>
            )
          })}


          <h3 className='title-range-slider text-[20px] text-left mb-[16px] text-montserrat mt-[40px]'>Filter by price</h3>
          <RangeSlider maxPrice={maxPrice} setMaxPrice={setMaxPrice} />

          <h3 className='title-range-slider text-[20px] text-left mb-[16px] text-montserrat mt-[40px]'>Sort by</h3>
          <Sort sort={sort} setSort={setSort} />

        </div>
      </div>
      <div className='right w-[70%]'>
        <List catId={catId} maxPrice={maxPrice} sort={sort} selectedSubCat={selectedSubCategories} />
      </div>
    </div>
  )
}

export default ProductList