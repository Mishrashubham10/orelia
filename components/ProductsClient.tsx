'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { categories, products } from '@/data/product';
import Link from 'next/link';

const ProductsClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || 'All'
  );

  // Keep state in sync if query param changes (e.g. via back/forward navigation)
  useEffect(() => {
    if (categoryParam && categoryParam !== selectedCategory) {
      setSelectedCategory(categoryParam);
    }
    if (!categoryParam && selectedCategory !== 'All') {
      setSelectedCategory('All');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParam]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    const params = new URLSearchParams(searchParams.toString());
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-serif font-bold md:text-5xl">
            Shop Collection
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore our full range of luxury cosmetics and skincare products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsClient;