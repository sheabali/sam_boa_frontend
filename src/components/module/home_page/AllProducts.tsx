"use client";

import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "../Product/product-card";

const categories = [
  { id: "all", label: "All" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "streetwear", label: "Streetwear" },
  { id: "vintage", label: "Vintage" },
];

const subCategories = [
  { id: "jackets", label: "Jackets" },
  { id: "formal", label: "Formal" },
  { id: "footwear", label: "Footwear" },
];

const products = [
  {
    id: 1,
    name: 'Nike Dunk Low "Panda"',
    price: "40.00",
    image: "https://i.ibb.co/N6gsK2Zw/image-42.png",
    views: 32,
    category: "men",
  },
  {
    id: 2,
    name: "Vintage Cargo Pants",
    price: "44.00",
    image: "https://i.ibb.co/N2LQvDTR/image-67.png",
    views: 32,
    category: "vintage",
  },
  {
    id: 3,
    name: "Yeezy Boost 350",
    price: "24.00",
    image: "https://i.ibb.co/fYGp4BBR/image-43.png",
    views: 32,
    category: "streetwear",
  },
  {
    id: 4,
    name: "Yeezy Boost 350",
    price: "40.00",
    image: "https://i.ibb.co/3ZFFmVP/image-69.png",
    views: 32,
    category: "streetwear",
  },
  {
    id: 5,
    name: "Zara Puffer Jacket",
    price: "70.00",
    image: "https://i.ibb.co/N6gsK2Zw/image-42.png",
    views: 32,
    category: "jackets",
  },
  {
    id: 6,
    name: 'Nike Dunk Low "Panda"',
    price: "70.00",
    image: "https://i.ibb.co/N2LQvDTR/image-67.png",
    views: 32,
    category: "footwear",
  },
  {
    id: 7,
    name: "Blazer Dress",
    price: "50.00",
    image: "https://i.ibb.co/fYGp4BBR/image-43.png",
    views: 32,
    category: "formal",
  },
  {
    id: 8,
    name: "Blazer Dress",
    price: "24.00",
    image: "https://i.ibb.co/3ZFFmVP/image-69.png",
    views: 32,
    category: "formal",
  },
];

export default function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Products
          </h1>
          <p className="text-gray-600 text-lg">
            Fashion that speaks. Bid before it&apos;s gone.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Main Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Sub Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {subCategories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-red-500 hover:bg-red-600 text-white border-red-500"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-700 border-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="px-8 py-2 border-red-500 text-red-500 hover:bg-red-50 font-medium bg-transparent rounded-full"
          >
            View All
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
