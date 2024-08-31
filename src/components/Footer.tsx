"use client";

import Link from "next/link";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const placeholders = [
  "Stay in the loop with us!",
  "Get the latest updates delivered!",
  "Join our community of insiders.",
  "Be the first to know!",
  "Unlock exclusive content!",
  "Your inbox deserves this.",
  "Subscribe for fresh insights!",
  "Don’t miss out on news and tips.",
  "Get inspired—sign up today!",
  "Stay informed, stay ahead!",
];

const Footer = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-black text-gray-100">
      <div className="flex items-center justify-center flex-col pb-28">
        <h4 className="text-2xl mb-4 text-gray-400">
          Subscribe to Our Newsletter
        </h4>
        {/* <form className="flex w-full max-w-sm border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-black placeholder-gray-400 border-none outline-none w-full px-3 py-2"
          />
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-500 transition-all px-4 py-2"
          >
            Subscribe
          </button>
        </form> */}
        <div className="w-full max-w-sm">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        <div>
          <h4 className="text-lg mb-4 font-bold">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-400 hover:text-gray-200"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-400 hover:text-gray-200">
                FAQ
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-gray-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg mb-4 font-bold">Follow Us</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="https://www.facebook.com/lfg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.twitter.com/lfg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/lfg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/lfg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg mb-4 font-bold">Legal</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-gray-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-gray-200"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg mb-4 font-bold">Contact Us</h4>
          <p className="text-gray-400">Email: contact@lfg.com</p>
          <p className="text-gray-400 mt-2">Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} LFG. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
