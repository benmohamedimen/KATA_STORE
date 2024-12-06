import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import DarkMode from './DarkMode';
import Cart from '../Cart/Cart';
const MenuLinks = [
    { id: 1, title: 'Home', link: '/#' },
    { id: 2, title: 'About', link: '/#about' },
    { id: 3, title: 'Products', link: '/#products' }

];

const Navbar = () => {
    const [openCart, setOpenCart] = React.useState(false);
    const { items } = useSelector((state) => state.cart);

    return (
        <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between gap-4'>
                    {/* Logo and links section */}
                    <div className='flex items-center gap-4'>
                        <a href='#'
                            className="text-primary 
               font-semibold tracking-widest 
               text-2xl uppercase sm:text-3xl"

                        >
                            KATA
                        </a>
                        {/* menu items */}
                        <div className='hidden sm:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index}>
                                            <a href={data.link}
                                                className="inline-block px-4
                                     font-semibold text-gray-500
                                     hover:text-black
                                     dark:hover:text-white duration-200">
                                                {" "}
                                                {data.title}
                                            </a>

                                        </li>
                                    )
                                    )
                                }
                                {/* dropDown  */}
                                {/* <li className='relative cursor-pointer group'>
                                    <a href='#' className='flex items-center gap-[2px] 
                                    font-semibold text-gray-500 
                                    dark:hover:text-white
                                    '>Quick Links</a>
                                    <span> 
                                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                                    </span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar section */}
                        <div className='relative group hidden sm:block'>
                            <input
                                type='text'
                                placeholder='Search'
                                className='search-bar'
                            />
                            <IoMdSearch
                                className='text-xl 
                text-gray-600 
                group-hover:text-primary
                dark:text-gray-400
                absolute top-1/2 -translate-y-1/2 right-3
                duration-200
                '/>

                        </div>
                        {/* cart button section */}
                        <button className='relative p-3' onClick={() => setOpenCart(true)}>
                            <FaCartShopping className='text-xl text-gray-600' />
                            <div className='w-4-h-4 
                            bg-red-500 text-white 
                            rounded-full absolute 
                            top-0 right-0 flex items-center
                             justify-center text-xs'>
                                {items.length || 0}
                            </div>
                        </button>
                        <Cart openCart={openCart} setOpenCart={setOpenCart} />
                        {/* Dark Mode section */}
                        <div className="relative">
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar