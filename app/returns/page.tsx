import { RotateCcw, Clock, Shield, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Returns = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-muted-foreground">
            We want you to love your purchase. If you&apos;re not completely
            satisfied, we&apos;re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                30-Day Returns
              </h3>
              <p className="text-muted-foreground">
                You have 30 days from delivery to return your purchase
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <RotateCcw className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">Easy Process</h3>
              <p className="text-muted-foreground">
                Simple online returns with prepaid shipping labels
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Quality Guarantee
              </h3>
              <p className="text-muted-foreground">
                All products are backed by our satisfaction guarantee
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold">
                Quick Refunds
              </h3>
              <p className="text-muted-foreground">
                Refunds processed within 5-7 business days
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Return Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We accept returns within 30 days of delivery for most items. To be
              eligible for a return:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Items must be unused and in their original packaging</li>
              <li>
                Products must include all original accessories and documentation
              </li>
              <li>
                Proof of purchase is required (order confirmation or receipt)
              </li>
              <li>Items must not show signs of wear or use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Non-Returnable Items
            </h2>
            <p className="text-muted-foreground mb-4">
              For hygiene and safety reasons, the following items cannot be
              returned:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Opened skincare products</li>
              <li>Used makeup items</li>
              <li>Opened fragrances (unless defective)</li>
              <li>Items marked as final sale</li>
              <li>Gift cards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              How to Return
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Step 1: Request a Return</h3>
                <p className="text-muted-foreground">
                  Log into your account and navigate to your order history.
                  Select the items you wish to return and submit a return
                  request.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Step 2: Print Your Label</h3>
                <p className="text-muted-foreground">
                  Once approved, you&apos;ll receive a prepaid return shipping label
                  via email. Print the label and attach it to your package.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Step 3: Ship Your Return</h3>
                <p className="text-muted-foreground">
                  Drop off your package at any authorized shipping location. We
                  recommend obtaining a receipt as proof of return.
                </p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-6">
                <h3 className="font-semibold mb-2">
                  Step 4: Receive Your Refund
                </h3>
                <p className="text-muted-foreground">
                  Once we receive and inspect your return, we&apos;ll process your
                  refund within 5-7 business days to your original payment
                  method.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Exchanges
            </h2>
            <p className="text-muted-foreground">
              We&apos;re happy to exchange items for a different size, color, or
              product. To request an exchange, follow the return process and
              place a new order for your desired item. This ensures you receive
              your new item as quickly as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Damaged or Defective Items
            </h2>
            <p className="text-muted-foreground mb-4">
              If you receive a damaged or defective item:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Contact us immediately at returns@orelia.com</li>
              <li>Include photos of the damaged item and packaging</li>
              <li>
                We&apos;ll send a replacement or issue a full refund, including
                return shipping costs
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              Need Help?
            </h2>
            <p className="text-muted-foreground">
              Our customer service team is here to assist you with returns and
              exchanges. Contact us at returns@orelia.com or call +1 (555)
              123-4567.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Returns;