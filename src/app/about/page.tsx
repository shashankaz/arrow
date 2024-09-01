import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 pt-32">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-400 leading-relaxed">
          At Relix, our mission is to empower creators, influencers, and
          businesses with the tools and insights they need to succeed in the
          digital space. Whether it&apos;s growing a YouTube channel, optimizing
          social media strategies, or understanding analytics, we strive to
          provide the best services to help you achieve your goals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-400 leading-relaxed">
          Founded in 2024, Relix started with a simple idea: to make digital
          marketing and growth easier for content creators and businesses. What
          began as a small team of passionate individuals has now grown into a
          dedicated group of professionals who are committed to providing
          cutting-edge solutions that drive success.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc pl-5 space-y-3 text-gray-400">
          <li>
            <strong>Innovation:</strong> We are always looking for new and
            better ways to help our clients succeed.
          </li>
          <li>
            <strong>Customer Success:</strong> Our clients&apos; success is our
            success. We are committed to helping them achieve their goals.
          </li>
          <li>
            <strong>Integrity:</strong> We believe in transparency, honesty, and
            always doing the right thing.
          </li>
          <li>
            <strong>Collaboration:</strong> We work together with our clients,
            listening to their needs and building solutions that work for them.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-gray-400 leading-relaxed">
          Our team is made up of skilled professionals with backgrounds in
          content creation, digital marketing, analytics, and technology. Each
          member brings unique expertise to the table, allowing us to provide
          comprehensive solutions to our clients.
        </p>
        {/* You can add team member profiles here if needed */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-400 leading-relaxed">
          We understand the challenges of growing a digital presence.
          That&apos;s why we&apos;ve developed a suite of services designed to
          simplify the process and deliver real results. With a focus on
          quality, innovation, and customer success, Relix is your partner in
          achieving digital growth.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-400 leading-relaxed">
          Have questions or want to learn more about how we can help you? Reach
          out to us via our{" "}
          <a href="/contact" className="text-purple-500 hover:underline">
            Contact Us
          </a>{" "}
          page. We&apos;re here to assist you on your journey to success.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
