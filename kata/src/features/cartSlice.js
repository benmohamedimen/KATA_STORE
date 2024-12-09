// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalPrice: 0 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.items.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Incrémenter la quantité du produit si déjà présent
        existingProduct.quantity += 1;
      } else {
        // Ajouter un nouveau produit au panier
        state.items.push({ ...product, quantity: 1 });
      }
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.items = state.items.filter(item => item.id !== product.id);
      state.totalPrice -= product.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
