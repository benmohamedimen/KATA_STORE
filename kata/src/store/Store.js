import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import productReducer from '../features/productSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '../features/cartSlice';
import themeReducer from '../features/themeSlice'; 
const persistConfig = {
    key: 'root',
    storage,
  };
// Combine Reducers
const rootReducer = combineReducers({
    theme: persistReducer(persistConfig, themeReducer),
    products: productReducer,
    filters: filterReducer,
    cart: persistReducer(persistConfig, cartReducer), // Ajout de `persistedReducer` pour le slice `cart`
  });
const store = configureStore({
    reducer: rootReducer
});

const persistor = persistStore(store);
export  {store, persistor};
