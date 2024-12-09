import React from 'react'
import useFilterHandler from '../../Hooks/useFilterHandler';
import BarringFunnelIcon from '../../assets/icons/BarringFunnelIcon';
const ButtonResetFilter = ( )=> {
    const { resetFiltersHandler } = useFilterHandler();
  return (
    <>
    {/* Reset Button */}
        <button
    type="button"
    onClick={resetFiltersHandler}
    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-10"
  >
    
    <BarringFunnelIcon  aria-hidden="true" className="size-8" />
    
  </button>
  </>
  )
}

export default ButtonResetFilter