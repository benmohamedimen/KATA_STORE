import React from 'react';
import { Disclosure } from '@headlessui/react';
import filters from '../../Data/Filters';
import Panel from './Panel';
import ButtonFilter from './ButtonFilter';
import ButtonResetFilter from './ButtonResetFilter';
import { useSelector } from 'react-redux';
const FilterForm = ({ isDialog }) => {
  const { selectedColors, selectedGenders } = useSelector(
    (state) => state.filters,
  );

  // Check if there are any active filters
  const hasActiveFilters =
    selectedColors.length > 0 || selectedGenders.length > 0;

  return (
    <div>
      {hasActiveFilters && ( // Conditionally render the reset button
        <div className="fixed bottom-4 right-4 z-50">
          <ButtonResetFilter />
        </div>
      )}

      <form className={!isDialog ? 'hidden lg:block' : ''}>
        {filters.map((section) => (
          <Disclosure
            key={section.id}
            as="div"
            className="border-b border-gray-200 py-6 "
          >
            <ButtonFilter section={section} />

            <Panel section={section} />
          </Disclosure>
        ))}
      </form>
    </div>
  );
};

export default FilterForm;
