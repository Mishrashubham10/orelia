import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    Shop: [
      { name: 'All Products', path: '/shop' },
      { name: 'Skincare', path: '/shop?category=Skincare' },
      { name: 'Makeup', path: '/shop?category=Makeup' },
      { name: 'Fragrance', path: '/shop?category=Fragrance' },
    ],
    Support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Shipping', path: '/shipping' },
      { name: 'Returns', path: '/returns' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-semibold">Orelia</h3>
            <p className="text-sm text-muted-foreground">
              Luxury cosmetics for the modern woman. Elevate your beauty routine with our curated collection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Orelia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;