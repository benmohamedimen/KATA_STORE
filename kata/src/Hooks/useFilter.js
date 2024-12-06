import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearFilters } from '../features/filterSlice';
export const useFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters.selectedFilters);

    const addFilter = (filter) => dispatch(setFilters([...filters, filter]));
    const clearFilters = () => dispatch(clearFilters());

    return { filters, addFilter, clearFilters };
};
