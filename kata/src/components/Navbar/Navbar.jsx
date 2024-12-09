import React from 'react'
import DarkMode from './DarkMode';
import MobileMenuButton from './MobileMenuButton';
import SearchBar from './SearchBar';
import MenuBar from '../../shared/MenuBar';
import CartButton from '../Cart/CartButton';
const Navbar = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container flex justify-between gap-4'>
                    <div className='flex items-center gap-4'>
                        <a href='#' className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                            KATA
                        </a>
                        <MenuBar variant="horizontal" />
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <SearchBar />
                        <MobileMenuButton />
                        <CartButton />
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