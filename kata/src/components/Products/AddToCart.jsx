// src/components/AddToCart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
const AddToCart = ({ product }) => {
    const dispatch = useDispatch();
    const {items } = useSelector((state) => state.cart);
    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };
   console.log('add to cart', items);
    return (
        <button
        onClick={handleAddToCart}
        className="absolute bottom-2 right-2 p-2 bg-gray-500 text-white rounded-full hover:bg-gray-700"
        aria-label="Add to Cart"
      >
        <ShoppingCartIcon className="w-5 h-5" />
      </button>
    );
  };
export default AddToCart;
