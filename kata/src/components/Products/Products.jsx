import React, { useEffect } from 'react'
import Heading from '../../shared/Heading'
import ProductsCard from './ProductsCard';

import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import sortOptions from '../../Data/SortOptions';
import filters from '../../Data/Filters';
import productList from '../../Data/ProductList';
import sortBy from '../../utils/sortBy';
import MobileFilterDialog from './MobileFilterDialog';
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }



const Products = () => {
    const [products, setProducts] = useState(productList);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [sortedProductList, setSortedProductList] = useState([]);
console.log('filteredProducts', filteredProducts)
  
  // Handle checkbox change
  const handleFilterChange = (e, filterType) => {
    const { value, checked } = e.target;
    console.log('vdsgsgsdgsdgsg',value, checked)
    if (filterType === 'color') {
      setSelectedColors((prev) =>
        checked ? [...prev, value] : prev.filter((color) => color !== value)
      );
    } else if (filterType === 'gender') {
      setSelectedGenders((prev) =>
        checked ? [...prev, value] : prev.filter((gender) => gender !== value)
      );
    }
  };
    // Gérer le tri lors du clic
    const handleSort = (selectedOption) => {
        const sorted = sortBy([...filteredProducts], selectedOption.criterion, selectedOption.order);
        setSortedProductList(sorted);
      
        // Update the current option in the state or manage the UI
        sortOptions.forEach(option => option.current = false);
        selectedOption.current = true;
      };

  // Apply filters
  useEffect(() => {
    let filtered = [...products];
    console.log('selected colors ', selectedColors)
    console.log('selectedGenders', selectedGenders)
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
      selectedColors.some((color) => color === product.color)
      );
    }

    if (selectedGenders.length > 0) {
      filtered = filtered.filter((product) =>
      selectedGenders.some((gender) => gender === product.gender)
      );
    }
    console.log('filtered', filtered)
    setFilteredProducts(filtered);
  }, [selectedColors, selectedGenders]);
useEffect(() => {
    setProducts(sortedProductList)
}, [sortedProductList])
  return (
    <div id='products' className="mt-8 bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40">
    <div className="container">
        {/* Header section */}
        <Heading title={'Our Products'} subtitle={'Explore Our Products'} />
      <div>
      <MobileFilterDialog 

      mobileFiltersOpen={mobileFiltersOpen} 
      setMobileFiltersOpen={setMobileFiltersOpen} 
      selectedColors={selectedColors}
      selectedGenders={selectedGenders}
      handleFilterChange={handleFilterChange}
      />
 
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900"></h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
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

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
               
            
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6 ">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-900 py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
  <div className="space-y-4">
    {section.options.map((option, optionIdx) => (
      <div key={option.value} className="flex gap-3">
        <div className="flex h-5 shrink-0 items-center">
          <div className="group grid size-4 grid-cols-1">
            <input
              defaultValue={option.value}
              defaultChecked={option.checked}
              id={`filter-${section.id}-${optionIdx}`}
              name={`${section.id}[]`}
              type="checkbox"
              className="
                dark:bg-gray-600
                col-start-1 row-start-1
                appearance-none rounded border 
                border-gray-300 bg-white
                checked:border-red-600
                checked:bg-red-600
                dark:checked:bg-red-600
                indeterminate:border-red-600
                indeterminate:bg-red-600
                focus-visible:outline 
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-red-600 disabled:border-gray-300 
                disabled:bg-gray-100 disabled:checked:bg-gray-100 
                forced-colors:appearance-auto
              "
            />
            <svg
              fill="none"
              viewBox="0 0 14 14"
              className="pointer-events-none
                col-start-1 row-start-1
                size-3.5 self-center justify-self-center
                stroke-red-600 group-has-[:disabled]:stroke-gray-950/25"
            >
              <path
                d="M3 8L6 11L11 3.5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-has-[:checked]:opacity-100"
              />
              <path
                d="M3 7H11"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-0 group-has-[:indeterminate]:opacity-100"
              />
            </svg>
          </div>
        </div>
        <label
          htmlFor={`filter-${section.id}-${optionIdx}`}
          className="text-sm text-gray-600 dark:text-white"
        >
          {option.label}
        </label>
      </div>
    ))}
  </div>
</DisclosurePanel>

                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">    <ProductsCard data={filteredProducts}/></div>
            </div>
          </section>
        </main>
      </div>
    </div>
    </div>
  )
}
    

export default Products