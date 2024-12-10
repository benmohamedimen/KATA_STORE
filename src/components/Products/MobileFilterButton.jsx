import React from 'react';
import { toggleDialog } from '../../features/dialogSlice';
import CustomDialog from '../../shared/CustomDialog';
import { FunnelIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
const MobileFilterButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(toggleDialog(2))}
        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
      >
        <span className="sr-only">Filters</span>

        <FunnelIcon aria-hidden="true" className="size-5" />
      </button>
      <CustomDialog />
    </div>
  );
};

export default MobileFilterButton;
