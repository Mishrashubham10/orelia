import { Package, Truck, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Shipping = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Shipping Information
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our shipping policies and delivery
            times
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Free Shipping
              </h3>
              <p className="text-muted-foreground">
                On all orders over $75 within the continental US
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Fast Processing
              </h3>
              <p className="text-muted-foreground">
                Orders processed within 1-2 business days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Tracked Delivery
              </h3>
              <p className="text-muted-foreground">
                All shipments include tracking information
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Global Shipping
              </h3>
              <p className="text-muted-foreground">
                We ship to over 50 countries worldwide
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Delivery Times
            </h2>
            <div className="bg-secondary/30 rounded-lg p-6 space-y-3">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-medium">Standard Shipping (US)</span>
                <span className="text-muted-foreground">3-5 business days</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-medium">Express Shipping (US)</span>
                <span className="text-muted-foreground">1-2 business days</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="font-medium">International Shipping</span>
                <span className="text-muted-foreground">
                  7-14 business days
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Express International</span>
                <span className="text-muted-foreground">3-7 business days</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Shipping Rates
            </h2>
            <p className="text-muted-foreground mb-4">
              Shipping costs are calculated at checkout based on your location
              and the shipping method selected. We offer the following options:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Free standard shipping on orders over $75 (US only)</li>
              <li>Standard shipping: $6.95 (orders under $75)</li>
              <li>Express shipping: $14.95</li>
              <li>International shipping rates vary by destination</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Order Tracking
            </h2>
            <p className="text-muted-foreground">
              Once your order ships, you&apos;ll receive a confirmation email with a
              tracking number. You can track your package using the link
              provided in the email or by logging into your account on our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              International Orders
            </h2>
            <p className="text-muted-foreground mb-4">
              We&apos;re pleased to ship internationally to select countries. Please
              note:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                International customers are responsible for any customs, duties,
                or taxes
              </li>
              <li>Delivery times may vary depending on customs clearance</li>
              <li>
                Some products may not be available for international shipping
                due to regulations
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Questions?
            </h2>
            <p className="text-muted-foreground">
              If you have questions about shipping or need assistance with your
              order, please contact our customer service team at
              shipping@orelia.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shipping;