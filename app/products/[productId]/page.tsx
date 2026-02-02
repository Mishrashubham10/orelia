'use client';

import { ArrowLeft, ShoppingBag, Heart } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/product';
import Image from 'next/image';
import { ReviewCard } from '@/components/Review';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="mb-4 text-2xl font-serif font-semibold">
          Product not found
        </h1>
        <Button onClick={() => router.push('/shop')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" onClick={() => router.back()} className="mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Button>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-2xl bg-secondary/30">
          <Image
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
            fill
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm uppercase tracking-wide text-muted-foreground">
              {product.category}
            </p>
            <h1 className="mb-4 text-4xl font-serif font-bold md:text-5xl">
              {product.name}
            </h1>
            <p className="text-3xl font-semibold text-primary">
              ₹{product.price}
            </p>
          </div>

          <div className="prose prose-lg">
            <p className="text-muted-foreground">
              {product.description ||
                'Experience luxury with this premium product from Orelia. Crafted with the finest ingredients to deliver exceptional results.'}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Benefits:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Premium quality ingredients</li>
              <li>• Dermatologist tested and approved</li>
              <li>• Cruelty-free and vegan</li>
              <li>• Long-lasting results</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          <div className="space-y-3 border-t border-border pt-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">SKU:</span>
              <span className="font-medium">{product.id.toUpperCase()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Category:</span>
              <span className="font-medium">{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Availability:</span>
              <span className="font-medium text-primary">In Stock</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ReviewCard
          title="Amazing Quality!"
          description="The texture and finish are absolutely luxurious. Feels like a high-end brand."
          image={product.image}
        />

        <ReviewCard
          title="Worth Every Rupee"
          description="Packaging, fragrance, and results — everything exceeded my expectations."
          image={product.image}
        />

        <ReviewCard
          title="Perfect for Daily Use"
          description="Lightweight, non-greasy, and works beautifully even on sensitive skin."
          image={product.image}
        />
      </div>
    </div>
  );
};

export default ProductDetail;