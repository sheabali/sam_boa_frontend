"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();

  const handleRegisterBtn = () => {
    router.push("/register");
  };

  const handleSignInBtn = () => {
    router.push("/login");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 py-4">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image width={150} height={100} src={logo} alt="logo" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5 font-medium">
            <span className="flex items-center gap-1">
              <RiGlobalLine size={20} />
              <p>English</p>
            </span>
            <Link href="/">List your property</Link>
            <Link href="/">Support</Link>
            <div className="space-x-5">
              <Button variant="outline" onClick={handleSignInBtn}>
                Sign In
              </Button>
              <Button variant="secondary" onClick={handleRegisterBtn}>
                Register
              </Button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setSidebarOpen(true)}>
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 z-50 w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <Image width={150} height={100} src={logo} alt="logo" />
          <button onClick={() => setSidebarOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 font-medium">
          <div className="flex-center gap-4 py-4">
            <span className="flex items-center gap-1">
              <RiGlobalLine size={20} />
              <p>English</p>
            </span>
            <Link href="/">List your property</Link>
            <Link href="/">Support</Link>
          </div>
          <Button variant="outline" onClick={handleSignInBtn}>
            Sign In
          </Button>
          <Button variant="secondary" onClick={handleRegisterBtn}>
            Register
          </Button>
        </div>
      </div>
    </>
  );
}
