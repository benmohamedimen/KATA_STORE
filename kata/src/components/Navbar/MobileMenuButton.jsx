import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useDispatch } from'react-redux';
import { toggleDialog } from '../../features/dialogSlice';
import CustomDialog from '../../shared/CustomDialog';
const MobileMenuButton = () => {
    const dispatch = useDispatch()
  return (
    <div className='relative group lg:hidden sm:hidden'>
  <span className="absolute -inset-0.5 right-0" 
  onClick={()=>dispatch(toggleDialog(3))}/>
   
     <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" /> 
     <CustomDialog />
      
  </div>
  )
}

export default MobileMenuButton 