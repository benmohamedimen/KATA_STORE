import { configureStore, combineReducers } from '@reduxjs/toolkit';
import filterReducer from '../features/filterSlice';
import productReducer from '../features/productSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from '../features/cartSlice';
import themeReducer from '../features/themeSlice'; 
import dialogReducer from '../features/dialogSlice';
const persistConfig = {
    key: 'root',
    storage,
  };
// Combine Reducers
const rootReducer = combineReducers({
    theme: persistReducer(persistConfig, themeReducer),
    products: productReducer,
    filters: filterReducer,
    dialog: dialogReducer,
    cart: persistReducer(persistConfig, cartReducer), 
  });
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore actions and paths from redux-persist
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                ignoredPaths: ['_persist'],
            },
        }),
});

const persistor = persistStore(store);
export  {store, persistor};
