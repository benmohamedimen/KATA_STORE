import React from 'react'
import { useSelector } from 'react-redux';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import RemoveFromCart from '../Products/RemoveFromCart';
const Cart = ({ openCart, setOpenCart }) => {

  const { items , totalPrice} = useSelector((state) => state.cart);

  return (
    <div>
      {/* Mobile filter dialog */}
      <Dialog open={openCart} onClose={setOpenCart} className="relative z-40 ">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-gray-900 dark:text:white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">Cart</h2>
              <button
                type="button"
                onClick={() => setOpenCart(false)}
                className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white dark:bg-gray-900 p-2 text-gray-400 dark:text-white"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            
            <div className="mt-8">
  <div className="flow-root">
    <ul role="list" className="-my-6 divide-y divide-gray-200">
      {items.map((product) => (
        <li key={product.id} className="flex py-6">
          {/* Image */}
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              alt={product.title}
              src={product.image}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Contenu principal */}
          <div className="ml-4 flex flex-1 flex-col">
            <div className="flex justify-between items-center text-base font-medium text-gray-900 dark:text-white">
              <h3>
                <a href="#">{product.title}</a>
              </h3>
              <p className="ml-4">{product.price.toFixed(2)}$</p>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">{product.color}</p>
          </div>

          {/* Bouton Supprimer */}
          <div className="flex items-center mt-10">
            <RemoveFromCart product={product} />
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

   

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
   



            </DialogPanel >
          </div >
        </Dialog >
    </div >
  )
}

export default Cart