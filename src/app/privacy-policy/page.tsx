import React from "react";
import { formatDistanceToNow } from "date-fns";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 pt-32 bg-black text-gray-100">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p>
        Last Updated:{" "}
        {formatDistanceToNow(new Date("2024-08-31"), {
          addSuffix: true,
        })}
      </p>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">We collect information in the following ways:</p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            <strong>Information You Provide to Us:</strong> When you sign up for
            an account, purchase a service, or contact us, you may provide
            personal information such as your name, email address, phone number,
            billing information, and other details.
          </li>
          <li>
            <strong>Information We Collect Automatically:</strong> When you use
            our Site, we may collect certain information automatically, such as
            your IP address, device type, browser type, and activity on the Site
            (e.g., pages visited).
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            and other tracking technologies to enhance your experience on our
            Site and to gather data about how you interact with our Services.
            You can adjust your cookie preferences in your browser settings.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="mb-4">
          We may use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>To provide, operate, and maintain our Services.</li>
          <li>To process transactions and manage your account.</li>
          <li>To personalize your experience on our Site.</li>
          <li>
            To communicate with you, including sending service-related messages,
            updates, and promotional content.
          </li>
          <li>To analyze usage patterns and improve our Services.</li>
          <li>To comply with legal obligations and enforce our terms.</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. How We Share Your Information
        </h2>
        <p className="mb-4">
          We may share your information with third parties in the following
          circumstances:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            <strong>Service Providers:</strong> We may share your information
            with trusted third-party vendors who perform services on our behalf,
            such as payment processing, email marketing, or website analytics.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose your information
            to comply with legal obligations, such as responding to subpoenas,
            court orders, or other legal processes.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of assets, your information may be transferred
            as part of that transaction.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Choices</h2>
        <p className="mb-4">
          You have certain rights and choices regarding your information:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>
            <strong>Access and Correction:</strong> You may access, update, or
            correct your personal information by logging into your account or
            contacting us directly.
          </li>
          <li>
            <strong>Opt-Out of Communications:</strong> You may opt out of
            receiving promotional communications from us by following the
            instructions in those messages or contacting us.
          </li>
          <li>
            <strong>Cookie Preferences:</strong> You can adjust your cookie
            settings in your browser to refuse cookies or alert you when cookies
            are being sent.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
        <p className="mb-4">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          7. International Transfers
        </h2>
        <p className="mb-4">
          If you are accessing our Site from outside the country where we are
          located, please be aware that your information may be transferred to,
          stored, and processed in a country where data protection laws may
          differ from those in your country.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          8. Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          Our Services are not directed at individuals under the age of 13, and
          we do not knowingly collect personal information from children under
          13. If we learn that we have collected such information, we will take
          steps to delete it as soon as possible.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. When we do, we
          will post the revised policy on this page and update the &quot;Last
          Updated&quot; date. We encourage you to review this Privacy Policy
          periodically to stay informed about how we are protecting your
          information.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data
          practices, please contact us at:
        </p>
        <ul className="list-none pl-0 mt-4">
          <li>
            <strong>Email:</strong> contact@relix.com
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

export default PrivacyPolicy;
