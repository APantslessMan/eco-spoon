import React from 'react';
import { Product } from '../types';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg text-center">
      <div className="flex justify-center items-center mb-4">
        <Image 
          src={product.imageUrl} 
          alt={product.name} 
          width={400} 
          height={500} 
          className="w-96 h-72 object-cover rounded-3xl" 
        />
      </div>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
