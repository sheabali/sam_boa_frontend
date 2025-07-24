import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Button from "@/components/ui/button";
import { MessageCircle, MessageSquare, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../Product/product-card";

export default function SallerProfilePage() {
  const products = [
    {
      id: 1,
      image:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      name: 'Nike Dunk Low "Panda"',
      price: "€70.00",
      views: 32,
    },
    {
      id: 2,
      image:
        "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
      name: "Vintage Cargo Pants",
      price: "€70.00",
      views: 32,
    },
    {
      id: 3,
      image:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      name: "Yeezy Boost 350",
      price: "€70.00",
      views: 32,
    },
    {
      id: 4,
      image:
        "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
      name: "Yeezy Boost 350",
      price: "€70.00",
      views: 32,
    },
    {
      id: 5,
      image:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      name: 'Nike Dunk Low "Panda"',
      price: "€70.00",
      views: 32,
    },
    {
      id: 6,
      image:
        "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
      name: "Vintage Cargo Pants",
      price: "€70.00",
      views: 32,
    },
    {
      id: 7,
      image:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      name: "Yeezy Boost 350",
      price: "€70.00",
      views: 32,
    },
    {
      id: 8,
      image:
        "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
      name: "Yeezy Boost 350",
      price: "€70.00",
      views: 32,
    },
    {
      id: 9,
      image:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      name: 'Nike Dunk Low "Panda"',
      price: "€70.00",
      views: 32,
    },
    {
      id: 10,
      image:
        "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
      name: "Vintage Cargo Pants",
      price: "€70.00",
      views: 32,
    },
    {
      id: 11,
      image:
        "https://i.ibb.co/tprWjmtN/5bcf0032b459e28bfa6d164a846c119d68094d8f.png",
      name: "Yeezy Boost 350",
      price: "€70.00",
      views: 32,
    },
    {
      id: 12,
      image:
        "https://i.ibb.co/jP0rSwpK/46c040f672d3a7f44ddc91a1cecc4797e92bfac6.png",
      name: "Yeezy Boost 350",
      price: "€70.00",
      views: 32,
    },
  ];

  return (
    <div className="min-h-screen  mt-18 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto shadow bg-white rounded-lg p-6 sm:p-8 lg:p-10 relative">
        {/* Floating Chat Bubble */}
        <div className="fixed bottom-6 right-6 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer z-50">
          <MessageCircle className="w-7 h-7" />
          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Header Section */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Saller Profile</h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mr-4">
              <AvatarImage
                src="https://i.ibb.co/mVjzdhHW/Rectangle-23852.png"
                alt="Andre Sophia"
              />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Andre Sophia
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                @sophia_fashion
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-primary text-primary-foreground rounded-full hover:bg-primary/90 px-4 py-2  flex items-center">
              <UserPlus className="w-4 h-4 mr-2" />
              Follow
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:text-white hover:text-primary-foreground rounded-full bg-transparent"
            >
              <MessageSquare />
            </Button>
            <Link href={`/report/${1}`}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:text-white hover:text-primary-foreground rounded-full bg-transparent"
              >
                Report
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-lg sm:text-xl font-bold">212</p>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-bold">2000</p>
            <p className="text-gray-500 text-sm">Followings</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-bold">820</p>
            <p className="text-gray-500 text-sm">Items Sold</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Allow 2 days for shipping. No return policy. Message me with any
          enquiries. Allow 2 days for shipping. No return policy. Message me
          with any enquiries. Allow 2 days for shipping. No return policy.
          Message me with any enquiries.
        </p>

        <div className="flex space-x-4 mb-10">
          <Link href="https://www.facebook.com/">
            <Image
              src="/fi_5968764.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src="/fi_15707749.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src="/fi_15707784.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src="/fi_5969020.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <Image
              src="/fi_3116491.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
