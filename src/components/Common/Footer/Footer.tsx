"use client";

import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYelp } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const socialLinks = [
  { icon: <FaFacebookF />, label: "Facebook", href: "#" },
  { icon: <FaInstagram size={16} />, label: "Instagram", href: "#" },
  { icon: <FaXTwitter size={16} />, label: "Twitter", href: "#" },
  { icon: <FaYelp size={16} />, label: "Yelp", href: "#" },
];

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Services", href: "/services" },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "News & Events", href: "/news-and-events" }],
  },
  {
    title: "Terms & Policy",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5faf7] w-full">
      <div className="px-4 py-10">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Social Icons */}
          <div className="flex flex-col space-y-6">
            <Link href="/">
              <Image width={150} height={100} src={logo} alt="logo" />
            </Link>
            <div className="flex space-x-2">
              {socialLinks.map(({ icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded bg-[#2c6e49] text-white hover:bg-primary"
                  aria-label={label}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright & Scroll-to-top */}
        <div className="container mt-10 border-t border-gray-300 pt-6 flex">
          <div className="md:w-[45%]"></div>
          <div className="w-full md:w-[55%] flex justify-between items-center">
            <p className="text-sm text-gray-500">© {currentYear} senjaro</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-white hover:bg-yellow-500 cursor-pointer"
              aria-label="Back to top"
            >
              <IoIosArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
