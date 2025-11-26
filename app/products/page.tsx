"use client";

import ProductsClient from '@/components/ProductsClient';
import { Suspense } from 'react';

export default function Products() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}