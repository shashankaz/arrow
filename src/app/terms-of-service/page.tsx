import React from "react";
import { formatDistanceToNow } from "date-fns";

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 pt-32">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p>
        Last Updated:{" "}
        {formatDistanceToNow(new Date("2024-08-31"), {
          addSuffix: true,
        })}
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website, services, or products
          (collectively, the "Services"), you agree to be bound by these Terms
          of Service and our Privacy Policy. If you do not agree with these
          terms, please do not use our Services.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <p className="mb-4">
          You agree to use our Services only for lawful purposes and in a way
          that does not infringe upon the rights of others or restrict or
          inhibit their use of the Services. You may not use the Services to
          engage in any activity that is unlawful, harmful, or otherwise
          objectionable.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
        <p className="mb-4">
          To access certain features of our Services, you may be required to
          create an account. You agree to provide accurate and complete
          information when creating your account and to keep this information
          up-to-date. You are responsible for maintaining the confidentiality of
          your account and password and for all activities that occur under your
          account.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">4. Payment and Fees</h2>
        <p className="mb-4">
          If you purchase any services or products through our platform, you
          agree to pay all applicable fees and charges. All payments are due at
          the time of purchase, unless otherwise specified. We reserve the right
          to change our pricing and fees at any time, with notice provided
          through our website or Services.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, materials, and features available on our website and
          through our Services, including but not limited to text, graphics,
          logos, and software, are the property of [Your Company Name] or its
          licensors and are protected by copyright, trademark, and other
          intellectual property laws. You may not use, reproduce, or distribute
          any content from our Services without our express written permission.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
        <p className="mb-4">
          We reserve the right to terminate or suspend your access to our
          Services, with or without notice, for any reason, including but not
          limited to your breach of these Terms of Service. Upon termination,
          your right to use our Services will immediately cease, and we may
          delete any information you have provided.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. Disclaimers and Limitation of Liability
        </h2>
        <p className="mb-4">
          Our Services are provided "as is" and without warranties of any kind,
          either express or implied. We do not warrant that the Services will be
          uninterrupted or error-free. To the fullest extent permitted by law,
          we disclaim all liability for any damages, losses, or injuries arising
          from your use of our Services.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
        <p className="mb-4">
          These Terms of Service and any disputes arising out of or relating to
          them will be governed by and construed in accordance with the laws of
          [Your Jurisdiction], without regard to its conflict of law principles.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
        <p className="mb-4">
          We reserve the right to modify or update these Terms of Service at any
          time. When we do, we will post the revised terms on this page and
          update the "Last Updated" date. Your continued use of our Services
          after such changes constitutes your acceptance of the new terms.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
        </p>
        <ul className="list-none pl-0 mt-4">
          <li>
            <strong>Email:</strong> contact@lfg.com
          </li>
          <li>
            <strong>Phone:</strong> +91 98765 43210
          </li>
          <li>
            <strong>Address:</strong> 123 Main Street, City, Country
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
