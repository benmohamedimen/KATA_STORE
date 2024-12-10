import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundary';
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const Products = React.lazy(() => import('./components/Products/Products'));
const About = React.lazy(() => import('./components/About/About'));
const App = () => {
  return (
    <div
      className="bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40"
    >
      <Router>
      <ErrorBoundary> 
        <Navbar />
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
};
export default App;
