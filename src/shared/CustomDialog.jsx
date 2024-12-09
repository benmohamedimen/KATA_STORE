import React, { useState, useEffect } from 'react'
import { toggleDialog } from '../features/dialogSlice'
import { useDispatch , useSelector} from 'react-redux';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
  } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import contentData from '../Data/DialogContentData.jsx'
const CustomDialog = () => {
    const dispatch = useDispatch();
    const { isOpen, dialogType } = useSelector((state) => state.dialog);
    const [dialogData, setDialogData] = useState({ title: '', content: <></>});
    console.log('dialogTypedialogTypedialogType', dialogType)
 // Update content based on dialogType
 useEffect(() => {
  if (dialogType) {
    const loadDialogData = () => {
      const component = contentData[dialogType]?.content?.();
      const title = contentData[dialogType]?.title;
      setDialogData({ title, content: component });
    };
    loadDialogData();
  }
}, [dialogType]);
  return (
    <Dialog open={isOpen} onClose={toggleDialog} className="relative z-40">
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
          <h2 className="text-lg font-medium text-gray-900 dark:text-white"> {dialogData.title || 'Default Title'}
</h2>
          <button
            type="button"
            onClick={() => dispatch(toggleDialog(0))}
            className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white dark:bg-gray-900 p-2 text-gray-400 dark:text-white"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-4">
        {dialogData.content}
                </div>
      </DialogPanel>
    </div>
  </Dialog>
  )
}

export default CustomDialog