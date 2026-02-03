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
    price: 1499,
    image: SerumImg,
    category: 'Skincare',
    description: 'Luxurious vitamin C serum for luminous, youthful skin',
  },
  {
    id: '2',
    name: 'Rose Velvet Lipstick',
    price: 1299,
    image: LipsticImg,
    category: 'Makeup',
    description: 'Creamy, long-lasting lipstick in a sophisticated rose shade',
  },
  {
    id: '3',
    name: 'Hydrating Night Cream',
    price: 1799,
    image: CreamImg,
    category: 'Skincare',
    description: 'Rich, nourishing night cream for deep hydration',
  },
  {
    id: '4',
    name: 'Golden Hour Highlighter',
    price: 1399,
    image: HighlighterImg,
    category: 'Makeup',
    description: 'Luminous highlighting powder for a radiant glow',
  },
  {
    id: '5',
    name: 'Gentle Cleansing Oil',
    price: 1299,
    image: CleanserImg,
    category: 'Skincare',
    description: 'Luxurious oil cleanser that melts away makeup',
  },
  {
    id: '6',
    name: 'Velvet Matte Foundation',
    price: 1899,
    image: FoundationImg,
    category: 'Makeup',
    description: 'Flawless, long-wearing foundation with a velvety finish',
  },
  {
    id: '7',
    name: 'Bloom Eau de Parfum',
    price: 2599,
    image: PerfumeImg,
    category: 'Fragrance',
    description: 'Elegant floral fragrance with notes of rose and jasmine',
  },
  {
    id: '8',
    name: 'Eye Revival Cream',
    price: 1399,
    image: EyeCreamImg,
    category: 'Skincare',
    description: 'Targeted treatment for bright, youthful-looking eyes',
  },

  {
    id: '9',
    name: 'Cocoa Velvet Body Polish',
    price: 1199,
    image: 'https://i.pinimg.com/736x/e4/79/06/e479068e814cf4f1db21073aab2dc980.jpg',
    category: 'Skincare',
    description: 'Gentle exfoliating polish with cocoa husk and shea butter.',
  },
  {
    id: '10',
    name: 'InkPoint Precision Liner',
    price: 999,
    image: 'https://images.pexels.com/photos/7256089/pexels-photo-7256089.jpeg',
    category: 'Makeup',
    description:
      'Ultra-fine felt eyeliner delivering sharp, smudge-proof strokes.',
  },
  {
    id: '11',
    name: 'CitrusRush Body Cologne',
    price: 2299,
    image: 'https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg',
    category: 'Fragrance',
    description:
      'Fresh citrus blend with notes of lime zest and sweet mandarin.',
  },
  {
    id: '12',
    name: 'GlowRoot Hair Elixir',
    price: 1599,
    image: 'https://i.pinimg.com/1200x/4b/16/7c/4b167c84d89165d85acc0c1eac87d636.jpg',
    category: 'Skincare',
    description: 'Nutrient-rich elixir that strengthens hair from root to tip.',
  },

  {
    id: '13',
    name: 'BlushPebble Cheek Tint',
    price: 1099,
    image: 'https://images.pexels.com/photos/7290210/pexels-photo-7290210.jpeg',
    category: 'Makeup',
    description: 'Natural cheek tint with a smooth, watercolor-like finish.',
  },
  {
    id: '14',
    name: 'FreshLavender Pulse Mist',
    price: 1999,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    category: 'Fragrance',
    description: 'A soft lavender mist designed for instant relaxation.',
  },
  {
    id: '15',
    name: 'NourishBerry Lip Mask',
    price: 799,
    image: 'https://i.pinimg.com/1200x/de/32/47/de32471577e869f6f22b1878eeccbf35.jpg',
    category: 'Skincare',
    description:
      'Deep-restoring lip treatment infused with berry antioxidants.',
  },
  {
    id: '16',
    name: 'AquaMatte Foundation Fluid',
    price: 1899,
    image:
      'https://images.pexels.com/photos/15327092/pexels-photo-15327092.jpeg',
    category: 'Makeup',
    description:
      'Breathable foundation offering matte coverage with hydration.',
  },


  {
    id: '23',
    name: 'VelvetBloom Eau Fresh',
    price: 2299,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    category: 'Fragrance',
    description: 'Soft floral scent with light airy undertones.',
  },
  {
    id: '24',
    name: 'PureShea Body Cream',
    price: 1199,
    image: 'https://i.pinimg.com/736x/d0/30/33/d030334f1b59d78555bc5ac0e1eb54e8.jpg',
    category: 'Skincare',
    description: 'Thick nourishing body cream enriched with pure shea.',
  },
  {
    id: '25',
    name: 'LashBloom Lengthening Gel',
    price: 1099,
    image: 'https://images.pexels.com/photos/5128262/pexels-photo-5128262.jpeg',
    category: 'Makeup',
    description: 'Gel-based mascara formulated for extended lash length.',
  },

  {
    id: '26',
    name: 'HerbalMist Balancing Toner',
    price: 899,
    image: 'https://images.pexels.com/photos/3737581/pexels-photo-3737581.jpeg',
    category: 'Skincare',
    description: 'Clarifying toner with herbal leaf extracts.',
  },
  {
    id: '27',
    name: 'SeaMist Cologne Splash',
    price: 2399,
    image: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg',
    category: 'Fragrance',
    description: 'Watery marine cologne with breezy freshness.',
  },
  {
    id: '28',
    name: 'CoralTouch Lip Gloss',
    price: 999,
    image:
      'https://images.pexels.com/photos/27462666/pexels-photo-27462666.jpeg',
    category: 'Makeup',
    description: 'Translucent gloss with a coral tint and mirror shine.',
  },

  {
    id: '30',
    name: 'FloralAmour Fine Spray',
    price: 2199,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    category: 'Fragrance',
    description: 'Romantic floral mist with a hint of peony sweetness.',
  },

  {
    id: '31',
    name: 'HydraSilk Face Gel',
    price: 1199,
    image: 'https://i.pinimg.com/736x/30/c7/40/30c740b2dd2dd4b51198747929060be1.jpg',
    category: 'Skincare',
    description: 'Cooling gel moisturizer delivering a silky dew-like finish.',
  },
  {
    id: '32',
    name: 'InkGlow Brow Pomade',
    price: 1099,
    image: 'https://images.pexels.com/photos/7256089/pexels-photo-7256089.jpeg',
    category: 'Makeup',
    description: 'High-hold brow pomade providing shape and tint.',
  },

  {
    id: '33',
    name: 'AmberWhisper Perfume Mist',
    price: 2599,
    image: 'https://images.pexels.com/photos/965993/pexels-photo-965993.jpeg',
    category: 'Fragrance',
    description: 'A blend of warm amber with soft vanilla undertones.',
  },
  // {
  //   id: '34',
  //   name: 'BotaniGlow Sleeping Mask',
  //   price: 1599,
  //   image: 'https://images.pexels.com/photos/3737583/pexels-photo-3737583.jpeg',
  //   category: 'Skincare',
  //   description: 'Overnight mask infused with botanical brightening extracts.',
  // },

  {
    id: '35',
    name: 'SilkWhip Makeup Base',
    price: 1299,
    image: 'https://images.pexels.com/photos/1340925/pexels-photo-1340925.jpeg',
    category: 'Makeup',
    description: 'Whipped texture base providing a smooth silk-like finish.',
  },
  {
    id: '36',
    name: 'CedarDust Parfum',
    price: 2999,
    image: 'https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg',
    category: 'Fragrance',
    description: 'Deep woody scent created from aged cedar and musk.',
  },

  {
    id: '37',
    name: 'LotusHydrate Gel Toner',
    price: 999,
    image: 'https://images.pexels.com/photos/6621463/pexels-photo-6621463.jpeg',
    category: 'Skincare',
    description: 'Weightless gel toner offering moisture balance.',
  },
  // {
  //   id: '38',
  //   name: 'VelvetSkin Concealer Wand',
  //   price: 1099,
  //   image: 'https://images.pexels.com/photos/4664525/pexels-photo-4664525.jpeg',
  //   category: 'Makeup',
  //   description: 'Smooth concealer wand providing seamless coverage.',
  // },

  {
    id: '39',
    name: 'FreshCitrus Body Dew',
    price: 1999,
    image: 'https://images.pexels.com/photos/965991/pexels-photo-965991.jpeg',
    category: 'Fragrance',
    description: 'Light body fragrance with zesty citrus notes.',
  },
  {
    id: '40',
    name: 'BerryCloud Cleansing Foam',
    price: 799,
    image: 'https://i.pinimg.com/1200x/39/ec/82/39ec822676c01d4532ada4bd57d2e74b.jpg',
    category: 'Skincare',
    description: 'Air-light foam cleanser infused with berry enzymes.',
  },

  {
    id: '41',
    name: 'ChromaTint Lip Stain',
    price: 1299,
    image:
      'https://images.pexels.com/photos/27462666/pexels-photo-27462666.jpeg',
    category: 'Makeup',
    description: 'Long-wear lip stain delivering rich chromatic color.',
  },
  {
    id: '42',
    name: 'GardenBreeze Scent Oil',
    price: 2599,
    image: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg',
    category: 'Fragrance',
    description: 'Fresh scent oil with garden herbs and soft floral notes.',
  },

  {
    id: '43',
    name: 'HydraBalance Serum Gel',
    price: 1299,
    image: 'https://i.pinimg.com/1200x/b2/eb/e3/b2ebe3b430e0eed20dde27bc73cf3bb7.jpg',
    category: 'Skincare',
    description: 'Cooling serum gel designed for hydration balance.',
  },
  {
    id: '44',
    name: 'Compact Face Powder',
    price: 1299,
    image: 'https://images.pexels.com/photos/7290089/pexels-photo-7290089.jpeg',
    category: 'Makeup',
    description: 'Compact pressed powder offering matte blurring effect.',
  },

  {
    id: '45',
    name: 'RoseHill Elegant Perfume',
    price: 2999,
    image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
    category: 'Fragrance',
    description: 'Elegant rose blend with soft warm accents.',
  },
  {
    id: '46',
    name: 'MoistureSilk Body Lotion',
    price: 999,
    image: 'https://i.pinimg.com/1200x/de/58/d1/de58d1b2aa7aaa981aa4554cb704da59.jpg',
    category: 'Skincare',
    description: 'Silkening body lotion delivering long-lasting hydration.',
  },

  {
    id: '47',
    name: 'InkMatte Liquid Eyeliner',
    price: 999,
    image: 'https://images.pexels.com/photos/7256089/pexels-photo-7256089.jpeg',
    category: 'Makeup',
    description: 'Deep matte liquid eyeliner with precision flow tip.',
  },
  {
    id: '48',
    name: 'VanillaTwist Body Essence',
    price: 2199,
    image: 'https://images.pexels.com/photos/965991/pexels-photo-965991.jpeg',
    category: 'Fragrance',
    description: 'Warm vanilla-infused body essence with a subtle twist.',
  },

  {
    id: '49',
    name: 'SnowMint Cooling Gel',
    price: 799,
    image: 'https://images.pexels.com/photos/6621470/pexels-photo-6621470.jpeg',
    category: 'Skincare',
    description: 'Cooling gel infused with mint for instant refreshment.',
  },
  {
    id: '50',
    name: 'SilkSweep Blending Brush',
    price: 799,
    image: 'https://images.pexels.com/photos/7290104/pexels-photo-7290104.jpeg',
    category: 'Makeup',
    description: 'Soft-bristle brush crafted for perfect complexion blending.',
  },
  {
    id: '51',
    name: 'LumiSkin Liquid Foundation',
    price: 1899,
    image: FoundationImg,
    category: 'Makeup',
    description:
      'Lightweight liquid foundation with buildable coverage that evens skin tone while maintaining a natural, skin-like finish.',
  },
  {
    id: '52',
    name: 'Vitamin C Brightening Serum',
    price: 2499,
    image: 'https://i.pinimg.com/736x/95/ea/00/95ea00e1ebc1ba2463588cc7e1aa8f16.jpg',
    category: 'Skincare',
    description:
      'High-potency vitamin C serum formulated to visibly brighten skin, reduce dark spots, and boost natural radiance.',
  },
  {
    id: '53',
    name: 'Makeup Setting Spray',
    price: 1599,
    image: 'https://i.pinimg.com/1200x/b5/9a/6e/b59a6e2fa8ffc61ba42a3254477df5cd.jpg',
    category: 'Makeup',
    description:
      'Long-wear setting spray that locks makeup in place, controls shine, and keeps skin fresh all day.',
  },
  {
    id: '54',
    name: 'Makeup Cleansing Solution',
    price: 899,
    image: 'https://i.pinimg.com/1200x/79/bd/87/79bd87b5cab6a5289d7db1d354e14a67.jpg',
    category: 'Skincare',
    description:
      'Gentle micellar cleansing solution that effectively removes makeup and impurities without stripping moisture.',
  },
  {
    id: '55',
    name: 'Compact Face Powder',
    price: 1299,
    image: 'https://i.pinimg.com/736x/c2/bc/99/c2bc99cd056ad7a20ae88e1362168aa6.jpg',
    category: 'Makeup',
    description:
      'Finely milled compact powder that delivers a smooth matte finish while blurring pores and imperfections.',
  },
  {
    id: '56',
    name: 'Nail Polish Set',
    price: 999,
    image: 'https://i.pinimg.com/736x/4c/41/e7/4c41e7b5e8dfb27ce92b2524e6d6e756.jpg',
    category: 'Makeup',
    description:
      'Vibrant nail polish set featuring chip-resistant colors with high-shine, salon-quality finish.',
  },
  {
    id: '57',
    name: 'Blush Palette',
    price: 1499,
    image: 'https://images.pexels.com/photos/7290210/pexels-photo-7290210.jpeg',
    category: 'Makeup',
    description:
      'Multi-shade blush palette offering blendable pigments for a healthy, natural-looking flush.',
  },
  {
    id: '58',
    name: 'Sunscreen Lotion',
    price: 1199,
    image: 'https://i.pinimg.com/736x/3b/65/af/3b65af4500921ec8077ce5aaa1cbe3d1.jpg',
    category: 'Skincare',
    description:
      'Broad-spectrum sunscreen lotion that protects against UVA & UVB rays while keeping skin hydrated and lightweight.',
  },
  {
    id: '59',
    name: 'StayLock Makeup Setting Spray – Mini',
    price: 1599,
    image: 'https://i.pinimg.com/736x/50/19/c8/5019c85b7a7135258c41dd1a13f7159a.jpg',
    category: 'Makeup',
    description:
      'Travel-friendly makeup setting spray designed for quick touch-ups and long-lasting wear on the go.',
  },
];

export const categories = ['All', 'Skincare', 'Makeup', 'Fragrance'];