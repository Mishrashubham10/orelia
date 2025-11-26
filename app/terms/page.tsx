const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-serif font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Agreement to Terms
          </h2>
          <p className="text-muted-foreground">
            By accessing and using Orelia&apos;s website and services, you agree to
            be bound by these Terms of Service and all applicable laws and
            regulations. If you do not agree with any of these terms, you are
            prohibited from using our services.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Use License
          </h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily access the materials on
            Orelia&apos;s website for personal, non-commercial use only. This is the
            grant of a license, not a transfer of title, and under this license
            you may not:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Product Information
          </h2>
          <p className="text-muted-foreground">
            We strive to provide accurate product descriptions and pricing.
            However, we do not warrant that product descriptions, pricing, or
            other content is accurate, complete, reliable, current, or
            error-free. We reserve the right to correct any errors and to change
            or update information at any time.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Orders and Payment
          </h2>
          <p className="text-muted-foreground">
            All orders are subject to acceptance and availability. We reserve
            the right to refuse any order. Payment must be received in full
            before orders are processed. We accept major credit cards and other
            payment methods as indicated on our website.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground">
            Orelia shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of or
            inability to use our services, even if we have been advised of the
            possibility of such damages.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Modifications
          </h2>
          <p className="text-muted-foreground">
            We reserve the right to revise these Terms of Service at any time
            without prior notice. By continuing to use our services after
            changes are posted, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Contact Information
          </h2>
          <p className="text-muted-foreground">
            For questions about these Terms of Service, please contact us at
            legal@orelia.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
