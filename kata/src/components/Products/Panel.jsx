import React from 'react'
import {
    DisclosurePanel,
} from '@headlessui/react'
import useFilterHandler from '../../Hooks/useFilterHandler';
import { useSelector } from 'react-redux';
const Panel = ({section}) => {

    const { handleFilterChange } = useFilterHandler();
    const { selectedColors, selectedGenders } = useSelector((state) => state.filters);

    const isOptionChecked = (option) => {
        if (section.id === 'color') {
          return selectedColors.includes(option.value);
        }
        if (section.id === 'gender') {
          return selectedGenders.includes(option.value);
        }
        return false;
      };
console.log('section',section)
  return (
    <DisclosurePanel className="pt-6">

    <div className="space-y-4">
        {section.options.map((option, optionIdx) => (
            <div key={option.value} className="flex gap-3">
                <div className="flex h-5 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                        <input
                            defaultValue={option.value}
                            checked={isOptionChecked(option)}
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            onChange={(e) => handleFilterChange(e, section.id)}
                            className="dark:bg-gray-600 col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-red-600 checked:bg-red-600 dark:checked:bg-red-600 indeterminate:border-red-600 indeterminate:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                        />
                        <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-red-600 group-has-[:disabled]:stroke-gray-950/25"
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

  )
}

export default Panel