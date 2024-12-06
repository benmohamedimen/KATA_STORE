import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedColors: [],
    selectedGenders: [],
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSelectedColors: (state, action) => {
            state.selectedColors = action.payload;

        },
        setSelectedGenders: (state, action) => {
            state.selectedGenders = action.payload;
        },
        clearFilters: (state) => {
            state.selectedColors = [];
            state.selectedGenders = [];
        },
    },
});

// Exporter les actions
export const { setSelectedColors, setSelectedGenders, clearFilters } = filterSlice.actions;

// Exporter le reducer
export default filterSlice.reducer;
