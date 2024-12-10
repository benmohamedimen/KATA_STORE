import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  productList: [], // Liste complète des produits
  filteredProducts: [], // Produits après application des filtres
  sortOption: null, // Option de tri sélectionnée
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
      state.filteredProducts = action.payload; // Initialiser aussi les produits filtrés
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    sortProducts: (state, action) => {
      const { criterion, order } = action.payload; // Critère et ordre de tri
      state.filteredProducts = [...state.filteredProducts].sort((a, b) => {
        if (order === 'asc') return a[criterion] > b[criterion] ? 1 : -1;
        return a[criterion] < b[criterion] ? 1 : -1;
      });
      state.sortOption = action.payload; // Mettre à jour l'option de tri sélectionnée
    },
  },
});

export const { setProductList, setFilteredProducts, sortProducts } =
  productSlice.actions;
export default productSlice.reducer;
