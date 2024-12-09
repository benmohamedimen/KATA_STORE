import { useDispatch, useSelector } from 'react-redux';
import { setSelectedColors, setSelectedGenders , resetFilters} from '../features/filterSlice'

const useFilterHandler = () => {
    const dispatch = useDispatch();
    const { selectedColors, selectedGenders } = useSelector((state) => state.filters);
    console.log('useFilterHandler',)
    const handleFilterChange = (e, filterType) => {
        const { value, checked } = e.target;
        console.log('value, checked ', value, checked)
        if (filterType === 'color') {
            const updatedColors = checked
                ? [...selectedColors, value]
                : selectedColors.filter((color) => color !== value);
            dispatch(setSelectedColors(updatedColors));
        } else if (filterType === 'gender') {
            const updatedGenders = checked
                ? [...selectedGenders, value]
                : selectedGenders.filter((gender) => gender !== value);
            dispatch(setSelectedGenders(updatedGenders));
        }
    };
    // Reset all filters to initial state
    const resetFiltersHandler = () => {
        dispatch(resetFilters());
    };
    return { handleFilterChange, resetFiltersHandler };
};

export default useFilterHandler;

