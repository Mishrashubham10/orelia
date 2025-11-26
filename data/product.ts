import { Product } from '@/context/CartContext';

// IMAGES
import SerumImg from '@/assets/products/serum-1.jpeg';
import LipsticImg from '@/assets/products/lipstick-1.jpeg';
import CreamImg from '@/assets/products/cream-1.jpeg';
import HighlighterImg from '@/assets/products/highlighter-1.jpeg';
import CleanserImg from '@/assets/products/cleanser-1.jpeg';
import FoundationImg from '@/assets/products/foundation-1.jpeg';
import PerfumeImg from '@/assets/products/perfume-1.jpeg';
import EyeCreamImg from '@/assets/products/eye-cream.jpeg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Radiant Glow Serum',
    price: 699,
    image: SerumImg,
    category: 'Skincare',
    description: 'Luxurious vitamin C serum for luminous, youthful skin',
  },
  {
    id: '2',
    name: 'Rose Velvet Lipstick',
    price: 399,
    image: LipsticImg,
    category: 'Makeup',
    description: 'Creamy, long-lasting lipstick in a sophisticated rose shade',
  },
  {
    id: '3',
    name: 'Hydrating Night Cream',
    price: 899,
    image: CreamImg,
    category: 'Skincare',
    description: 'Rich, nourishing night cream for deep hydration',
  },
  {
    id: '4',
    name: 'Golden Hour Highlighter',
    price: 459,
    image: HighlighterImg,
    category: 'Makeup',
    description: 'Luminous highlighting powder for a radiant glow',
  },
  {
    id: '5',
    name: 'Gentle Cleansing Oil',
    price: 380,
    image: CleanserImg,
    category: 'Skincare',
    description: 'Luxurious oil cleanser that melts away makeup',
  },
  {
    id: '6',
    name: 'Velvet Matte Foundation',
    price: 529,
    image: FoundationImg,
    category: 'Makeup',
    description: 'Flawless, long-wearing foundation with a velvety finish',
  },
  {
    id: '7',
    name: 'Bloom Eau de Parfum',
    price: 1120,
    image: PerfumeImg,
    category: 'Fragrance',
    description: 'Elegant floral fragrance with notes of rose and jasmine',
  },
  {
    id: '8',
    name: 'Eye Revival Cream',
    price: 720,
    image: EyeCreamImg,
    category: 'Skincare',
    description: 'Targeted treatment for bright, youthful-looking eyes',
  },
];

export const categories = ['All', 'Skincare', 'Makeup', 'Fragrance'];