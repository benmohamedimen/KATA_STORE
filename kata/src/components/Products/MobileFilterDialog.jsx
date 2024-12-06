import React from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
  } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import FilterForm from './FilterForm';
const MobileFilterDialog = ({mobileFiltersOpen, setMobileFiltersOpen, handleFilterChange}) => {
  return (
    <div>
          {/* Mobile filter dialog */}
          <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
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
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white dark:bg-gray-900 p-2 text-gray-400 dark:text-white"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <FilterForm isDialog={true} handleFilterChange={handleFilterChange}/>
            </DialogPanel>
          </div>
        </Dialog>
    </div>
  )
}

export default MobileFilterDialog