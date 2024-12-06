
import React from 'react'
import {
    Disclosure,
} from '@headlessui/react'
import filters from '../../Data/Filters';
import Panel from './Panel';
import ButtonFilter from './ButtonFilter';
const FilterForm = ({ isDialog, handleFilterChange }) => {
    return (
        <div >
            <form className={!isDialog ? "hidden lg:block" : ""}>
                {filters.map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6 ">
                        <ButtonFilter section={section} />
                     <Panel section={section} handleFilterChange={handleFilterChange}/>
                    </Disclosure>
                ))}
            </form>
        </div>
    )
}

export default FilterForm