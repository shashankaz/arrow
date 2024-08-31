"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between px-6 md:px-10 lg:px-20 h-20 backdrop-blur-2xl fixed w-full z-30 text-gray-100 bg-black/50">
      <div>
        <Link href="/">
          <h1 className="text-2xl md:text-3xl uppercase font-serif">Lfg</h1>
        </Link>
      </div>
      <div className="hidden sm:flex">
        <ul className="flex items-center gap-2 md:gap-4">
          <Link href="/">
            <li className="text-sm md:text-base hover:text-gray-300">Home</li>
          </Link>
          <Link href="/#services">
            <li className="text-sm md:text-base hover:text-gray-300">
              Services
            </li>
          </Link>
          <Link href="/#testimonials">
            <li className="text-sm md:text-base hover:text-gray-300">
              Testimonials
            </li>
          </Link>
          <Link href="/#pricing">
            <li className="text-sm md:text-base hover:text-gray-300">
              Pricing
            </li>
          </Link>
          <Link href="/contact">
            <li className="text-sm md:text-base hover:text-gray-300">
              Contact
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex sm:hidden" onClick={toggleMenu}>
        {isOpen ? <X /> : <Menu />}
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 text-white flex flex-col items-center sm:hidden">
          <ul className="flex flex-col items-center gap-8 p-8">
            <Link href="/" onClick={toggleMenu}>
              <li className="text-sm md:text-base hover:text-gray-300">Home</li>
            </Link>
            <Link href="/#services" onClick={toggleMenu}>
              <li className="text-sm md:text-base hover:text-gray-300">
                Services
              </li>
            </Link>
            <Link href="/#testimonials" onClick={toggleMenu}>
              <li className="text-sm md:text-base hover:text-gray-300">
                Testimonials
              </li>
            </Link>
            <Link href="/#pricing" onClick={toggleMenu}>
              <li className="text-sm md:text-base hover:text-gray-300">
                Pricing
              </li>
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <li className="text-sm md:text-base hover:text-gray-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
