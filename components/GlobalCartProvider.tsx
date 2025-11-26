'use client';

import { CartProvider } from '@/context/CartContext';

export const GlobalCartProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <CartProvider>{children}</CartProvider>;
};