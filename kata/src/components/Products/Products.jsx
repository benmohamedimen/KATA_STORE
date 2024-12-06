import React, { useEffect } from 'react'
import Heading from '../../shared/Heading'
import { useState } from 'react'
import sortOptions from '../../Data/SortOptions';
import productList from '../../Data/ProductList';
import sortBy from '../../utils/sortBy';
import MobileFilterDialog from './MobileFilterDialog';
import MainList from './MainList';
import { useDispatch , useSelector} from 'react-redux';
import { setSelectedColors, setSelectedGenders } from '../../features/filterSlice';
import { setProductList, setFilteredProducts, sortProducts } from '../../features/productSlice';
const Products = () => {
    const dispatch = useDispatch();
    // Accéder aux données depuis Redux
    const { filteredProducts } = useSelector((state) => state.products);
    
    const { selectedColors, selectedGenders } = useSelector((state) => state.filters);
    
  
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [sortedProductList, setSortedProductList] = useState([]);
     // Initialiser la liste des produits
     useEffect(() => {
        dispatch(setProductList(productList));
    }, [dispatch]);
    // Handle checkbox change
    const handleFilterChange = (e, filterType) => {
        const { value, checked } = e.target;
        console.log('handleFilterChange', value, checked);
    
        if (filterType === 'color') {
            // Récupérez une copie actuelle de selectedColors à jour
            const updatedColors = checked
                ? [...selectedColors, value]
                : selectedColors.filter((color) => color !== value);
            dispatch(setSelectedColors(updatedColors));
        } else if (filterType === 'gender') {
            // Récupérez une copie actuelle de selectedGenders à jour
            const updatedGenders = checked
                ? [...selectedGenders, value]
                : selectedGenders.filter((gender) => gender !== value);
            dispatch(setSelectedGenders(updatedGenders));
        }
    };


    
     // Appliquer les filtres
    useEffect(() => {
        let filtered = [...productList];
        if (selectedColors.length > 0) {
            filtered = filtered.filter((product) =>
                selectedColors.some((color) => color === product.color)
            );
        }
        if (selectedGenders.length > 0) {
            filtered = filtered.filter((product) =>
                selectedGenders.some((gender) => gender === product.gender)
            );
        }
        dispatch(setFilteredProducts(filtered));
    }, [productList, selectedColors, selectedGenders]);

     // Trier les produits
     const handleSort = (selectedOption) => {
        dispatch(sortProducts(selectedOption)); // Appel de l'action de tri
        sortOptions.forEach((option) => (option.current = false)); // Gestion de l'état local des options de tri
        selectedOption.current = true;
    };
    return (
        <div id='products' className="mt-8 bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="container">
                {/* Header section */}
                <Heading title={'Our Products'} subtitle={'Explore Our Products'} />
                 {/* Mobile Filter Dialog section */}
                <div>
                    <MobileFilterDialog

                        mobileFiltersOpen={mobileFiltersOpen}
                        setMobileFiltersOpen={setMobileFiltersOpen}
                        selectedColors={selectedColors}
                        selectedGenders={selectedGenders}
                        handleFilterChange={handleFilterChange}
                    />
                {/* main products list section */}
                    <MainList setMobileFiltersOpen={setMobileFiltersOpen} filteredProducts={filteredProducts} handleSort={handleSort}/>
                </div>
            </div>
        </div>
    )
}


export default Products