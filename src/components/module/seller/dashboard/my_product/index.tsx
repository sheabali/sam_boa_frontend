// Updated ProductsPage.tsx with responsive design using Tailwind CSS
// - Adjusted container padding and margins for smaller screens
// - Made TabsList stack vertically on mobile for better usability
// - Optimized font sizes and button sizes for touch interactions
// - Ensured ProductCard components (assumed to be responsive) are spaced appropriately
// - Used Tailwind's responsive utilities (sm:, md:, lg:) for adaptive layouts

"use client";

import Button from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockProducts } from "@/constants/productData";
import { TProduct } from "@/types/product.type";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsPage() {
  const router = useRouter();

  const [products, setProducts] = useState<TProduct[]>(mockProducts);
  const [activeTab, setActiveTab] = useState("all");

  const handleMarkAsSold = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, status: "sold" } : product
      )
    );
  };

  const handleEdit = (id: string) => {
    console.log("Edit product:", id);
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handlePost = (id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, status: "unsold" } : product
      )
    );
  };

  const handleCreateNew = () => {
    router.push("/seller/dashboard/my_products/create_new");
  };

  const getFilteredProducts = (tab: string) => {
    switch (tab) {
      case "unsold":
        return products.filter((p) => p.status === "unsold");
      case "sold":
        return products.filter((p) => p.status === "sold");
      case "draft":
        return products.filter((p) => p.status === "draft");
      default:
        return products;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
        My products
      </h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-transparent border-b border-gray-200 rounded-none h-auto p-0 mb-4 sm:mb-6">
          <TabsTrigger
            value="all"
            className="text-sm sm:text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent rounded-none py-2 sm:pb-3"
          >
            All Products
          </TabsTrigger>
          <TabsTrigger
            value="unsold"
            className="text-sm sm:text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent rounded-none py-2 sm:pb-3"
          >
            Unsold Products
          </TabsTrigger>
          <TabsTrigger
            value="sold"
            className="text-sm sm:text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent rounded-none py-2 sm:pb-3"
          >
            Sold Products
          </TabsTrigger>
          <TabsTrigger
            value="draft"
            className="text-sm sm:text-base data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent rounded-none py-2 sm:pb-3"
          >
            Draft Items
          </TabsTrigger>
        </TabsList>

        <div className="mt-4 sm:mt-6">
          {activeTab === "all" && (
            <div className="mb-4 sm:mb-6">
              <Button
                variant="outline"
                onClick={handleCreateNew}
                className="flex items-center gap-2 bg-transparent text-sm sm:text-base py-2 sm:py-2.5 px-4 sm:px-6"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Create New
              </Button>
            </div>
          )}

          <TabsContent value="all" className="mt-0">
            <div className="space-y-3 sm:space-y-4">
              {getFilteredProducts("all").map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  activeTab={activeTab}
                  onMarkAsSold={handleMarkAsSold}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onPost={handlePost}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unsold" className="mt-0">
            <div className="space-y-3 sm:space-y-4">
              {getFilteredProducts("unsold").map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  activeTab={activeTab}
                  onMarkAsSold={handleMarkAsSold}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onPost={handlePost}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sold" className="mt-0">
            <div className="space-y-3 sm:space-y-4">
              {getFilteredProducts("sold").map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  activeTab={activeTab}
                  onMarkAsSold={handleMarkAsSold}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onPost={handlePost}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="draft" className="mt-0">
            <div className="space-y-3 sm:space-y-4">
              {getFilteredProducts("draft").map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  activeTab={activeTab}
                  onMarkAsSold={handleMarkAsSold}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onPost={handlePost}
                />
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
