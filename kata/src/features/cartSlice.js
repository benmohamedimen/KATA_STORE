// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalPrice: 0 // Contiendra les produits ajoutés au panier
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      // Vérifier si le produit est déjà dans le panier
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
    // incrementQuantity: (state, action) => {
    //   const productId = action.payload;
    //   const product = state.items.find(item => item.id === productId);
    //   if (product) {
    //     product.quantity += 1;
    //   }
    // },
    // decrementQuantity: (state, action) => {
    //   const productId = action.payload;
    //   const product = state.items.find(item => item.id === productId);
    //   if (product && product.quantity > 1) {
    //     product.quantity -= 1;
    //   }
    // },
    removeFromCart: (state, action) => {
      const product = action.payload;
      state.items = state.items.filter(item => item.id !== product.id);
      state.totalPrice -= product.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
