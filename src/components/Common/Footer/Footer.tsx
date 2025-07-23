"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-white w-full">
      <div className="px-4 py-10">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-5 text-center md:text-left">
          {/* Social Icons */}
          <div className="flex justify-start space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaXTwitter size={24} />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Special Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Special Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Become a seller
                </a>
              </li>
            </ul>
          </div>

          {/* Need Help? */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/FAQ" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Policy</h3>
            <ul className="space-y-2">
              <li>
                <a href="/policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>6391 Elgin St. Celina, Delaware 10299</p>
            <p className="mt-2">
              <a href="tel:+1308555-0121" className="hover:underline">
                (308) 555-0121
              </a>
            </p>
          </div>
        </div>

        {/* Centered VINE Text */}

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            Copyright © 2010-{currentYear} All rights reserved.
          </p>
        </div>
        <div className="text-center mt-4">
          <Image
            src="/VINE_FOOTER.svg"
            alt="VINE Logo"
            width={100}
            height={50}
            className="cursor-pointer w-[800px] mx-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
