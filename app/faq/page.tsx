import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'Standard shipping within the US takes 3-5 business days. Express shipping is available for 1-2 day delivery. International shipping times vary by location, typically 7-14 business days.',
    },
    {
      question: 'Do you offer free shipping?',
      answer:
        'Yes! We offer free standard shipping on all orders over $75 within the continental United States. Express and international shipping rates apply.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We accept returns within 30 days of delivery. Items must be unused and in original packaging. Some items like opened skincare products cannot be returned for hygiene reasons. See our Returns page for full details.',
    },
    {
      question: 'Are your products cruelty-free?',
      answer:
        'Yes! All Orelia products are 100% cruelty-free. We never test on animals and only work with suppliers who share our ethical standards.',
    },
    {
      question: 'How do I track my order?',
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order by logging into your account and viewing your order history.",
    },
    {
      question: 'Can I change or cancel my order?',
      answer:
        'Orders can be modified or cancelled within 1 hour of placement. After that, our system begins processing your order. Please contact us immediately if you need to make changes.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. Customers are responsible for any customs duties or taxes.',
    },
    {
      question: 'What if I receive a damaged item?',
      answer:
        "We're sorry if your item arrived damaged! Please contact us immediately at returns@orelia.com with photos of the item and packaging. We'll send a replacement or issue a full refund.",
    },
    {
      question: 'Are your products suitable for sensitive skin?',
      answer:
        'Many of our products are formulated for sensitive skin. All products are dermatologist-tested. Check individual product descriptions for specific ingredient information and recommendations.',
    },
    {
      question: 'Do you offer gift wrapping?',
      answer:
        "Yes! Gift wrapping is available at checkout for $5. We'll beautifully package your items with a gift message card if you provide one.",
    },
    {
      question: 'How can I contact customer service?',
      answer:
        "You can reach us via email at hello@orelia.com, by phone at +1 (555) 123-4567, or through our contact form. We're available Monday-Friday 9am-6pm EST, Saturday 10am-4pm EST.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our products, shipping, and
            policies
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-serif font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center bg-secondary/30 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-semibold mb-3">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? Our customer service team is
            here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              Contact Us
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a
              href="mailto:hello@orelia.com"
              className="text-primary font-medium hover:underline"
            >
              hello@orelia.com
            </a>
            <span className="hidden sm:inline text-muted-foreground">•</span>
            <a
              href="tel:+15551234567"
              className="text-primary font-medium hover:underline"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;