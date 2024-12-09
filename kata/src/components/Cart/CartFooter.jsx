import React from 'react'
import { useSelector } from 'react-redux';
const CartFooter = () => {
    const {  totalPrice} = useSelector((state) => state.cart);
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
            <p>Subtotal</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500 dark:text-white">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <a
              href="#"
              className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500 dark:text-white">
            <p>
              or{' '}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-medium text-red-600 hover:text-red-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
   
  )
}

export default CartFooter