import React from 'react'
import CustomDialog from '../../shared/CustomDialog';
import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDialog } from '../../features/dialogSlice';
import { FaCartShopping } from "react-icons/fa6";

const CartButton = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  return (
    <div className='relative group '>
      <button className='relative p-3' onClick={() => dispatch(toggleDialog(1))}>
                            <FaCartShopping className='text-xl text-gray-600' />
                            <div className='w-4-h-4 
                            bg-red-500 text-white 
                            rounded-full absolute 
                            top-0 right-0 flex items-center
                             justify-center text-xs'>
                                {items.length || 0}
                            </div>
                        </button>
      {/* Cart dialog */}
      <CustomDialog  />
    </div >
  )
}

export default CartButton