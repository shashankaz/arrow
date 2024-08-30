import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-10 lg:px-20 h-20 bg-black fixed w-full z-30">
      <div>
        <h1 className="text-2xl md:text-3xl uppercase font-serif">Lfg</h1>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex items-center gap-2 md:gap-4">
          <Link href="/">
            <li className="text-sm md:text-base hover:text-gray-300">Home</li>
          </Link>
          <Link href="/">
            <li className="text-sm md:text-base hover:text-gray-300">
              Services
            </li>
          </Link>
          <Link href="/">
            <li className="text-sm md:text-base hover:text-gray-300">
              Pricing
            </li>
          </Link>
          <Link href="/">
            <li className="text-sm md:text-base hover:text-gray-300">
              Testimonials
            </li>
          </Link>
          <Link href="/">
            <li className="text-sm md:text-base hover:text-gray-300">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex sm:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
