import { ArrowRight, Sparkles, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import heroBg from '@/assets/hero-bg.jpeg';
import { products } from '@/data/product';
import Link from 'next/link';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center gradient-hero overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
              Discover Your Natural Radiance
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Luxury cosmetics crafted with care. Embrace your beauty with our
              curated collection of premium products.
            </p>
            <div className="flex gap-4">
              <Link href="/products">
                <Button size="lg" className="group">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved products, carefully selected for their
            exceptional quality and results
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                Only the finest ingredients for exceptional results you can see
                and feel
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Cruelty Free</h3>
              <p className="text-muted-foreground">
                Beauty without compromise. All our products are never tested on
                animals
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Dermatologist Tested
              </h3>
              <p className="text-muted-foreground">
                Safe and effective formulas approved by leading skincare experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="rounded-2xl gradient-primary p-12 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Join Our Beauty Community
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Subscribe to receive exclusive offers, beauty tips, and be the first
            to know about new product launches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/95 text-foreground"
            />
            <Button size="lg" variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;