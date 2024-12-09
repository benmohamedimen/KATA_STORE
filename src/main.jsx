import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import { Provider } from 'react-redux';
import {store, persistor} from './store/Store'
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <PersistGate loading={<div>Loading...</div>} persistor={persistor}> 
  <StrictMode>
    <App />
  </StrictMode>
  </PersistGate>
  </Provider>,
)
