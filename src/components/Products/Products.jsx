import React, { useEffect } from 'react';
import Heading from '../../shared/Heading';
import productList from '../../Data/ProductList';
import MainList from './MainList';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductList,
  setFilteredProducts,
} from '../../features/productSlice';
const Products = () => {
  const dispatch = useDispatch();
  const { selectedColors, selectedGenders } = useSelector(
    (state) => state.filters,
  );
  useEffect(() => {
    dispatch(setProductList(productList));
  }, []);
  // Appliquer les filtres
  useEffect(() => {
    let filtered = [...productList];
    if (selectedColors.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColors.some((color) => color === product.color),
      );
    }
    if (selectedGenders.length > 0) {
      filtered = filtered.filter((product) =>
        selectedGenders.some((gender) => gender === product.gender),
      );
    }
    dispatch(setFilteredProducts(filtered));
  }, [productList, selectedColors, selectedGenders]);

  return (
    <div
      id="products"
      className="mt-8 bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"
    >
      <div className="container">
        {/* Header section */}
        <Heading title={'Our Products'} subtitle={'Explore Our Products'} />
        <div>
          {/* main products list section */}
          <MainList />
        </div>
      </div>
    </div>
  );
};

export default Products;
