import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 bg-black text-gray-100">
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
          &copy; {new Date().getFullYear()} Relix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
