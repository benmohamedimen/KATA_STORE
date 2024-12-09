import React from 'react'
import MenuLinks from '../Data/Menu';
import { Link } from 'react-router-dom';
const MenuBar = ({ variant }) => {
  // Determine styles and layout based on the variant
  const isHorizontal = variant === "horizontal";
  const containerClasses = isHorizontal
    ? "hidden sm:block"
    : "flex flex-1 items-left mt-20 justify-left sm:items-stretch sm:justify-start";
  const listClasses = isHorizontal
    ? "flex items-center gap-4"
    : "flex flex-col gap-4";

  return (
    <div className={containerClasses}>
      <ul className={listClasses}>
        {MenuLinks.map((data, index) => (
          <li key={index}>
            <Link
              to={data.link}
              className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar