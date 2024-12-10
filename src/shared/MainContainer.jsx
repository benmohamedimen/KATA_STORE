import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40"
    >
      <div className="container">
        <div
          className="overflow-hidden rounded-3xl min-h-[550px] 
    sm:min-h-[650px] hero-bg-color  flex justify-center items-center"
        >
          <div className="container pb-8 sm:pb-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
