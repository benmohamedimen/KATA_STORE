import React from 'react';
import Sort from './Sort';
import MobileFilterButton from './MobileFilterButton';
const OperationBar = () => {
  return (
    <div className="flex items-center">
      <Sort />
      <MobileFilterButton />
    </div>
  );
};

export default OperationBar;
