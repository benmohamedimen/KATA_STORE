import React from 'react'
import ProductsCard from './ProductsCard';
import OperationBar from './OperationBar';
import FilterForm from './FilterForm';
const MainList = ({filteredProducts, setMobileFiltersOpen}) => {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900"></h1>
        <OperationBar setMobileFiltersOpen={setMobileFiltersOpen} />
    </div>

    <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <FilterForm isDialog={false}/>
            {/* Product grid */}
            <div className="lg:col-span-3"> 
               <ProductsCard data={filteredProducts} />
            </div>
        </div>
    </section>
</main>
  )
}

export default MainList