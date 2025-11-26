'use client';

import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Product } from '@/context/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <Card className="group overflow-hidden border-0 shadow-lg h-full flex flex-col">
        <div className="relative w-full h-72 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover Heart Button */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full shadow-lg"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* 2. Content Section: Keeps the padding for text only */}
        <CardContent className="p-4 space-y-3 flex-1">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.category}
            </p>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">
                ₹{product.price}
              </span>
            </div>
            <Button
              size="sm"
              className="bg-linear-to-r from-pink-500 to-rose-500 hover:shadow-lg transition-all"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
