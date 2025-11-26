const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Introduction
          </h2>
          <p className="text-muted-foreground">
            At Orelia, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you use our website and
            services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Name and contact information</li>
            <li>Billing and shipping addresses</li>
            <li>Payment information</li>
            <li>Order history and preferences</li>
            <li>Communications with our customer service team</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders</li>
            <li>Send you promotional materials (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Protect against fraud and unauthorized transactions</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Data Security
          </h2>
          <p className="text-muted-foreground">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Your Rights
          </h2>
          <p className="text-muted-foreground mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@orelia.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;