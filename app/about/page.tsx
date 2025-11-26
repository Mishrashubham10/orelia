import { Heart, Sparkles, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            About Orelia
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Where luxury meets nature. We believe beauty should be effortless,
            sustainable, and accessible to everyone.
          </p>
        </div>

        {/* Story Section */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-semibold mb-4">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2020, Orelia was born from a simple belief: that everyone
            deserves access to luxury cosmetics that are both effective and
            ethical. Our journey began with a commitment to creating products
            that enhance natural beauty while respecting both people and the
            planet.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we&apos;re proud to offer a curated collection of premium
            skincare, makeup, and fragrance products. Each item is carefully
            selected or formulated to meet our high standards of quality,
            efficacy, and sustainability.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold">Cruelty Free</h3>
            <p className="text-muted-foreground">
              We never test on animals and work only with suppliers who share
              our values.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold">
              Premium Quality
            </h3>
            <p className="text-muted-foreground">
              Only the finest ingredients make it into our products, ensuring
              exceptional results.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold">Sustainable</h3>
            <p className="text-muted-foreground">
              Eco-friendly packaging and sustainable sourcing are at the heart
              of everything we do.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-serif font-semibold mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            To empower individuals to feel confident and beautiful in their own
            skin, while championing ethical practices and environmental
            responsibility in the beauty industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;