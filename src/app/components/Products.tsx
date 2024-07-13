// pages/Products.tsx
import React from 'react';
import ProductCard from '../components/Parts/ProductCard';
import { products } from './Tempproduct';

const Products = () => {
  return (
    <div className="container mx-auto px-4 mt-24">
      <h1 className="text-2xl font-bold mb-4 text-center"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
