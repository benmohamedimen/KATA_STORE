
import React, { useEffect } from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import sortOptions from '../../Data/SortOptions';
import { sortProducts } from '../../features/productSlice';
import { useDispatch } from 'react-redux';


import Sort from './Sort';
import MobileFilterButton from './MobileFilterButton';
const OperationBar = () => {
 
  return (
      <div className="flex items-center">
             <Sort />
             <MobileFilterButton />
            </div>
  )
}

export default OperationBar