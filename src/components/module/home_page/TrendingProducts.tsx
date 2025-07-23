import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "../Product/product-card";

// https: //i.ibb.co/N6gsK2Zw/image-42.png
// https: //i.ibb.co/N2LQvDTR/image-67.png
// https: //i.ibb.co/fYGp4BBR/image-43.png
// https: //i.ibb.co/3ZFFmVP/image-69.png

const products = [
  {
    id: 1,
    name: 'Nike Dunk Low "Panda"',
    price: "40.00",
    image: "https://i.ibb.co/N6gsK2Zw/image-42.png",
    views: 32,
  },
  {
    id: 2,
    name: "Vintage Cargo Pants",
    price: "40.00",
    image: "https://i.ibb.co/N2LQvDTR/image-67.png",
    views: 32,
  },
  {
    id: 3,
    name: "Yeezy Boost 350",
    price: "44.00",
    image: "https://i.ibb.co/fYGp4BBR/image-43.png",
    views: 32,
  },
  {
    id: 4,
    name: "Yeezy Boost 350",
    price: "45.00",
    image: "https://i.ibb.co/3ZFFmVP/image-69.png",
    views: 32,
  },
  {
    id: 5,
    name: "Zara Puffer Jacket",
    price: "24.00",
    image: "https://i.ibb.co/N6gsK2Zw/image-42.png",
    views: 32,
  },
  {
    id: 6,
    name: 'Nike Dunk Low "Panda"',
    price: "56.00",
    image: "https://i.ibb.co/N2LQvDTR/image-67.png",
    views: 32,
  },
  {
    id: 7,
    name: "Blazer Dress",
    price: "70.00",
    image: "https://i.ibb.co/fYGp4BBR/image-43.png",
    views: 32,
  },
  {
    id: 8,
    name: "Blazer Dress",
    price: "50.00",
    image: "https://i.ibb.co/3ZFFmVP/image-69.png",
    views: 32,
  },
];

export default function TrendingProducts() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trending Products
        </h2>
        <p className="text-gray-600 text-lg">
          Fashion that speaks. Bid before it&apos;s gone.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Button
          variant="outline"
          className="px-8 py-2 border-gray-300 hover:bg-gray-50 font-medium bg-transparent"
        >
          View All
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
