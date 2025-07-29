"use client";

import Logo from "@/components/shared/logo/Logo";
import UserAvatarDropdown from "@/components/shared/user-avatar-dropdown";
import Button from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  // const handleRegisterBtn = () => router.push("/register");
  const handleSignInBtn = () => router.push("/login");

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/about">About Us</Link>
            <Link href="/seller">Become a Seller</Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Search */}
            <div className="relative w-[246px]">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search"
                className="w-full h-[48px] rounded-3xl pl-10"
              />
            </div>
            <div className="flex items-center gap-4">
              <div>
                <UserAvatarDropdown />
              </div>
              <Link href="/login">
                <Button
                  type="submit"
                  className=" bg-primary hover:bg-primary/90 rounded-3xl font-medium transition-colors"
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)}>
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar - Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <Logo />
          <button onClick={() => setSidebarOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col gap-5 p-4 font-medium">
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link href="/explore" onClick={() => setSidebarOpen(false)}>
            Explore
          </Link>
          <Link href="/about" onClick={() => setSidebarOpen(false)}>
            About Us
          </Link>
          <Link href="/seller" onClick={() => setSidebarOpen(false)}>
            Become a Seller
          </Link>

          {/* Mobile Search & Buttons */}
          <div className="pt-4 border-t mt-4">
            <div className="relative w-full mb-4">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search"
                className="w-full h-[44px] rounded-3xl pl-10"
              />
            </div>

            <div className="flex justify-end items-center gap-4 my-5">
              <UserAvatarDropdown />
            </div>
            <Button
              variant="outline"
              onClick={handleSignInBtn}
              className="w-full mb-2"
            >
              Sign In
            </Button>
            {/* <Button
              variant="secondary"
              onClick={handleRegisterBtn}
              className="w-full"
            >
              Register
            </Button> */}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Add space below nav to avoid overlap */}
      <div className="h-[72px] lg:h-[80px]" />
    </>
  );
}
