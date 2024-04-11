import React, { CSSProperties } from 'react'
import { useTypedSelector } from '../../Redux/Store'
import { decreaseQuantity, deleteItemFromCart, increaseQuantity, removeFromCart } from '../../Redux/features/CartSlice';
import { useAppDispatch } from '../../Redux/Store';
import EmptyCart from "../../assets/empty-cart.png"

type animationType = {
  style: CSSProperties
}

const Card = ({ style }: animationType) => {


  const store = useTypedSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  /** Underline offset */
  const underlineOffsetValue = (value: number) => {
    return {
      textUnderlineOffset: `${value}px`
    }
  }

  /** Subtotal  */
  const initalValue = 0;
  const total = store.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, initalValue);

  return (
    <div style={style} className='flex flex-col min-w-[450px] px-6 py-4 sm:w-[200px] rounded border shadow-[0_3px_10px_rgb(0,0,0,0.05)] z-100 bg-white'>
      <div className="shopping-cart flex justify-between mb-[30px]">
        <h6 className=''>Shopping cart</h6>
        {store.length > 0 &&
          <h6 className='text-montserrat text-red-300 underline cursor-pointer ' onClick={() => { dispatch(removeFromCart()) }}
            style={underlineOffsetValue(5)}>Remove all</h6>}
      </div>
      {store.map((item) => {
        return (
          <div key={item.id} className='cart-item-wrapper flex items-center gap-[20px] border-b py-[16px] '>
            <div className='left'>
              <img src={`${process.env.API_UPLOAD}${item.image}`} className='w-[30px]' alt={item.title}></img>
            </div>
            <div className='right flex flex-row items-start justify-between flex-1'>
              <div className='text-[16px] text-left w-[180px]'>{item.title}</div>
              <div className='flex flex-row items-center gap-2 my-auto'>
                <button type="button" className="flex items-center justify-center h-[30px] w-[30px]  text-[12px] font-medium text-gray-900 focus:outline-none bg-white 
                rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                dark:hover:bg-gray-700"
                  onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <div>{item.quantity}</div>
                <button type="button" className="flex items-center justify-center h-[30px] w-[30px] text-[12px] font-medium text-gray-900 focus:outline-none bg-white 
                rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white 
                dark:hover:bg-gray-700 "
                  onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              </div>

              <div className='flex flex-col'>
                <h3 className=''>${item.price}</h3>
                <div className='cursor-pointer text-[10px] text-red-300 underline cursor-pointer'
                  style={underlineOffsetValue(3)}
                  onClick={() => (dispatch(deleteItemFromCart(item.id)))}>remove</div>
              </div>
            </div>
          </div>
        )

      })}
      {store.length > 0 &&
        <h2 className='subtotal ml-auto mt-[12px] texxt-montserrat'>Subtotal: ${total}</h2>}

      {store.length < 1 &&
        <div className=''>
          <img src={EmptyCart}
            className='max-w-[100px] mx-auto mt-[20px]'
          />
          <h3 className='text-[20px] text-montserrat mt-[20px]'>No items in cart!</h3>
        </div>}
    </div>
  )
}

export default Card