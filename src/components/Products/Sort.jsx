import React from 'react'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import sortOptions from '../../Data/SortOptions';
import { sortProducts } from '../../features/productSlice';
import { useDispatch } from 'react-redux';
import classNames from '../../shared/ClassNames'
const Sort = () => {
    const dispatch = useDispatch();
    const handleSort = (selectedOption) => {
        dispatch(sortProducts(selectedOption));
    };
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    Sort
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                            <a
                                href={option.href}
                                className={classNames(
                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                    'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                                )}
                                onClick={() => handleSort(option)}
                            >
                                {option.name}
                            </a>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}

export default Sort