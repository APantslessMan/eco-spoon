// products.ts
import { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Eco-Friendly Bamboo Toothbrush',
    description: 'A sustainable toothbrush made from bamboo.',
    price: 3.99,
    imageUrl: '/assets/img/bamboo_toothbrush.webp',
  },
  {
    id: 2,
    name: 'Reusable Shopping Bag',
    description: 'Durable and reusable shopping bag made from recycled materials.',
    price: 5.99,
    imageUrl: '/assets/img/reusable_bag.webp',
  },
  {
    id: 3,
    name: 'Solar-Powered Charger',
    description: 'Charge your devices with renewable solar energy.',
    price: 19.99,
    imageUrl: '/assets/img/solar_charger.webp',
  },
  {
    id: 4,
    name: 'Stainless Steel Water Bottle',
    description: 'Keep your drinks hot or cold in this eco-friendly bottle.',
    price: 15.99,
    imageUrl: '/assets/img/steel_bottle.webp',
  },
];
