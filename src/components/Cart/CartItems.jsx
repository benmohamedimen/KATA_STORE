import React from 'react'
import { useSelector } from 'react-redux';
import RemoveFromCart from '../Products/RemoveFromCart';
const CartItems = () => {
    const { items } = useSelector((state) => state.cart);
    return (
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
    )
}
export default CartItems