import React from 'react'
import {
  DisclosureButton,
} from '@headlessui/react'
import {  MinusIcon, PlusIcon} from '@heroicons/react/20/solid'
const ButtonFilter = ({section}) => {
  return (
    <h3 className="-my-3 flow-root">
    <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-gray-900 py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900 dark:text-white">{section.name}</span>
        <span className="ml-6 flex items-center">
            <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
            <MinusIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
        </span>
    </DisclosureButton>
</h3>
  )
}

export default ButtonFilter