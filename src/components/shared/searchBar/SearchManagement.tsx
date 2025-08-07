"use client";

import Button from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronDown, Filter, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PriceRangePopover from "./PriceRangePopover";

type ServiceOption = { name: string; value: string };

const SearchManagement = () => {
  const router = useRouter();

  const [gender, setGender] = useState<ServiceOption[]>([]);
  const [size, setSize] = useState<ServiceOption[]>([]);
  const [brand, setBrand] = useState<ServiceOption[]>([]);
  const [color, setColor] = useState<ServiceOption[]>([]);
  const [condition, setCondition] = useState<ServiceOption[]>([]);
  const [style, setStyle] = useState<ServiceOption[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  console.log("size", size.length);

  const [filters, setFilters] = useState({
    gender: "",
    size: "",
    brand: "",
    color: "",
    condition: "",
    style: "",
  });

  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);

  useEffect(() => {
    setGender([
      { name: "Mens", value: "mens" },
      { name: "Womens", value: "womens" },
      { name: "Unisex", value: "unisex" },
    ]);
    setSize([
      { name: "Mens / UK 2", value: "Mens / UK 2" },
      { name: "Mens / UK 3", value: "Mens / UK 3" },
      { name: "Mens / UK 4", value: "Mens / UK 4" },
      { name: "Mens / UK 5", value: "Mens / UK 5" },
      { name: "Mens / UK 5.5", value: "Mens / UK 5.5" },
      { name: "Mens / UK 6", value: "Mens / UK 6" },
      { name: "Mens / UK 6.5", value: "Mens / UK 6.5" },
      { name: "Mens / UK 7", value: "Mens / UK 7" },
      { name: "Mens / UK 7.5", value: "Mens / UK 7.5" },
      { name: "Mens / UK 8", value: "Mens / UK 8" },
      { name: "Mens / UK 8.5", value: "Mens / UK 8.5" },
      { name: "Mens / UK 9", value: "Mens / UK 9" },
      { name: "Mens / UK 9.5", value: "Mens / UK 9.5" },
      { name: "Mens / UK 10", value: "Mens / UK 10" },
      { name: "Mens / UK 10.5", value: "Mens / UK 10.5" },
      { name: "Mens / UK 11", value: "Mens / UK 11" },
      { name: "Mens / UK 11.5", value: "Mens / UK 11.5" },
      { name: "Mens / UK 12", value: "Mens / UK 12" },
      { name: "Mens / UK 12.5", value: "Mens / UK 12.5" },
      { name: "Mens / UK 13", value: "Mens / UK 13" },
      { name: "Mens / UK 13.5", value: "Mens / UK 13.5" },
      { name: "Mens / UK 14", value: "Mens / UK 14" },
      { name: "Mens / UK 14.5", value: "Mens / UK 14.5" },
      { name: "Mens / UK 15", value: "Mens / UK 15" },
      { name: "Womens / UK 2", value: "Womens / UK 2" },
      { name: "Womens / UK 3", value: "Womens / UK 3" },
      { name: "Womens / UK 4", value: "Womens / UK 4" },
      { name: "Womens / UK 5", value: "Womens / UK 5" },
      { name: "Womens / UK 5.5", value: "Womens / UK 5.5" },
      { name: "Womens / UK 6", value: "Womens / UK 6" },
      { name: "Womens / UK 6.5", value: "Womens / UK 6.5" },
      { name: "Womens / UK 7", value: "Womens / UK 7" },
      { name: "Womens / UK 7.5", value: "Womens / UK 7.5" },
      { name: "Womens / UK 8", value: "Womens / UK 8" },
      { name: "Womens / UK 8.5", value: "Womens / UK 8.5" },
      { name: "Womens / UK 9", value: "Womens / UK 9" },
      { name: "Womens / UK 9.5", value: "Womens / UK 9.5" },
      { name: "Womens / UK 10", value: "Womens / UK 10" },
      { name: "Womens / UK 11", value: "Womens / UK 11" },
      { name: "Womens / UK 11.5", value: "Womens / UK 11.5" },
      { name: "Womens / UK 12", value: "Womens / UK 12" },
      { name: "Womens / UK 12.5", value: "Womens / UK 12.5" },
      { name: "Womens / UK 13", value: "Womens / UK 13" },
      { name: "Womens / UK 13.5", value: "Womens / UK 13.5" },
      { name: "Womens / UK 14", value: "Womens / UK 14" },
      { name: "Womens / UK 14.5", value: "Womens / UK 14.5" },
      { name: "Womens / UK 15", value: "Womens / UK 15" },
      { name: "Mens / UK 3XS", value: "Mens / UK 3XS" },
      { name: "Mens / UK XXS", value: "Mens / UK XXS" },
      { name: "Mens / UK XS", value: "Mens / UK XS" },
      { name: "Mens / UK S", value: "Mens / UK S" },
      { name: "Mens / UK M", value: "Mens / UK M" },
      { name: "Mens / UK L", value: "Mens / UK L" },
      { name: "Mens / UK XL", value: "Mens / UK XL" },
      { name: "Mens / UK XXL", value: "Mens / UK XXL" },
      { name: 'Mens / UK 25"', value: 'Mens / UK 25"' },
      { name: 'Mens / UK 26"', value: 'Mens / UK 26"' },
      { name: 'Mens / UK 27"', value: 'Mens / UK 27"' },
      { name: 'Mens / UK 28"', value: 'Mens / UK 28"' },
      { name: "Mens / UK 4", value: "Mens / UK 4" },
      { name: "Mens / UK 6", value: "Mens / UK 6" },
      { name: "Mens / UK 8", value: "Mens / UK 8" },
      { name: "Mens / UK 10", value: "Mens / UK 10" },
      { name: "Mens / UK 12", value: "Mens / UK 12" },
      { name: "Mens / UK 14", value: "Mens / UK 14" },
      { name: "Mens / UK 16", value: "Mens / UK 16" },
      { name: "Mens / UK 18", value: "Mens / UK 18" },
      { name: "Womens / UK 3XS", value: "Womens / UK 3XS" },
      { name: "Womens / UK XXS", value: "Womens / UK XXS" },
      { name: "Womens / UK XS", value: "Womens / UK XS" },
      { name: "Womens / UK S", value: "Womens / UK S" },
      { name: "Womens / UK M", value: "Womens / UK M" },
      { name: "Womens / UK L", value: "Womens / UK L" },
      { name: "Womens / UK XL", value: "Womens / UK XL" },
      { name: "Womens / UK XXL", value: "Womens / UK XXL" },
      { name: "Womens / UK 20", value: "Womens / UK 20" },
      { name: "Womens / UK 22", value: "Womens / UK 22" },
      { name: "Womens / UK 24", value: "Womens / UK 24" },
    ]);

    setBrand([
      { name: "Gucci", value: "gucci" },
      { name: "Louis Vuitton", value: "louis-vuitton" },
      { name: "Balenciaga", value: "balenciaga" },
      { name: "Prada", value: "prada" },
      { name: "Chanel", value: "chanel" },
      { name: "Supreme", value: "supreme" },
      { name: "Off-White", value: "off-white" },
      { name: "Fear of God", value: "fear-of-god" },
      { name: "Puma", value: "puma" },
      { name: "A Bathing Ape", value: "a-bathing-ape" },
      { name: "Zara", value: "zara" },
      { name: "H&M", value: "h-and-m" },
      { name: "Uniqlo", value: "uniqlo" },
      { name: "Levi’s", value: "levis" },
      { name: "Nike", value: "nike" },
      { name: "Adidas", value: "adidas" },
    ]);

    setColor([
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Blue", value: "#1E90FF" },
      { name: "Red", value: "#FF0000" },
      { name: "Green", value: "#008000" },
      { name: "Yellow", value: "#FFFF00" },
      { name: "Brown", value: "#A52A2A" },
      { name: "Pink", value: "#FFC1CC" },
      { name: "Grey", value: "#808080" },
      { name: "Orange", value: "#FFA500" },
      { name: "Beige", value: "#F5F5DC" },
      { name: "Navy", value: "#000080" },
      { name: "Purple", value: "#800080" },
      { name: "Maroon", value: "#800000" },
      { name: "Olive", value: "#808000" },
      { name: "Cream", value: "#FFFDD0" },
      { name: "Teal", value: "#008080" },
      { name: "Mustard", value: "#FFDB58" },
      { name: "Coral", value: "#FF7F50" },
      { name: "Khaki", value: "#C3B091" },
      { name: "Multicolored", value: "#FFFFFF" },
      { name: "Other", value: "#D3D3D3" },
    ]);
    setCondition([
      { name: "Brand New", value: "brand-new" },
      { name: "Used Like New", value: "used-like-new" },
      { name: "Used Like Excellent", value: "used-like-excellent" },
      { name: "Used Like Good", value: "used like good" },
      { name: "Medium", value: "medium" },
    ]);
    setStyle([
      { name: "Streetwear", value: "streetwear" },
      { name: "Vintage", value: "vintage" },
      { name: "Sportswear", value: "sportswear" },
      { name: "Luxury", value: "luxury" },
      { name: "Independent brands", value: "independent-brands" },
      { name: "Old fashion", value: "old-fashion" },
    ]);
  }, []);

  const handleChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = () => {
    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });
    query.append("minPrice", priceRange[0].toString());
    query.append("maxPrice", priceRange[1].toString());
    router.push(`/explore?${query.toString()}`);
    setIsDrawerOpen(false);
  };

  const renderDropdown = (
    name: keyof typeof filters,
    placeholder: string,
    options: ServiceOption[]
  ) => (
    <div className="relative w-full">
      <select
        value={filters[name]}
        onChange={(e) => handleChange(name, e.target.value)}
        className="appearance-none border-none bg-white px-3 py-2 pr-8 rounded-md text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );

  const renderColorDropdown = () => (
    <div className="relative w-full">
      <select
        value={filters.color}
        onChange={(e) => handleChange("color", e.target.value)}
        className="appearance-none bg-white px-3 py-2 pr-8 rounded-md text-sm w-full focus:outline-none focus:ring-1 focus:ring-primary"
        style={{
          backgroundImage:
            filters.color !== ""
              ? `linear-gradient(to right, ${filters.color} 0%, ${filters.color} 100%)`
              : undefined,
          backgroundSize: filters.color !== "" ? "24px 24px" : "0 0",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "92% center",
          color: filters.color !== "" ? "#000" : "#555",
        }}
      >
        <option className="py-2" value="">
          Select Color
        </option>
        {color.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            style={{
              backgroundColor: "#fff",
              color: "#000",
              padding: "8px",
            }}
          >
            ● {opt.name}
          </option>
        ))}
      </select>

      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-4">
      {/* Mobile: Drawer */}
      <div className="flex justify-start items-start mt-8 lg:hidden">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
            >
              <Filter size={14} />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filter Options</DrawerTitle>
              <DrawerDescription>
                Select filters to refine your search.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-cols-1 gap-4 px-4 pb-6">
              {renderDropdown("gender", "Gender", gender)}
              <PriceRangePopover value={priceRange} onChange={setPriceRange} />
              {renderColorDropdown()}
              {renderDropdown("size", "Size", size)}
              {renderDropdown("brand", "Brand", brand)}
              {renderDropdown("condition", "Condition", condition)}
              {renderDropdown("style", "Style", style)}
            </div>
            <div className="px-4 pb-6">
              <Button
                size="sm"
                onClick={handleSearch}
                className="w-full bg-[#800020] hover:bg-[#660018] text-white"
              >
                <Search size={18} className="mr-2" />
                Search
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop: Inline Filters */}
      <div className="bg-white mt-4 rounded-xl shadow-md px-4 py-3 lg:px-6 lg:py-4 w-full max-w-screen-xl mx-auto hidden lg:flex">
        <div className="flex items-center justify-between gap-2 lg:gap-4 w-full">
          {renderDropdown("gender", "Gender", gender)}
          <span className="hidden md:inline-block h-5 w-px bg-gray-200" />
          {renderDropdown("size", "Size", size)}
          <span className="hidden md:inline-block h-5 w-px bg-gray-200" />
          {renderDropdown("brand", "Brand", brand)}
          <span className="hidden md:inline-block h-5 w-px bg-gray-200" />
          <PriceRangePopover value={priceRange} onChange={setPriceRange} />
          <span className="hidden md:inline-block h-5 w-px bg-gray-200" />
          {renderColorDropdown()}
          <span className="hidden md:inline-block h-5 w-px bg-gray-200" />
          {renderDropdown("condition", "Condition", condition)}
          {renderDropdown("style", "Style", style)}
          <div className="ml-auto">
            <button
              onClick={handleSearch}
              className="bg-[#800020] text-white flex items-center gap-1 px-5 py-2 h-6 lg:h-8 rounded-full text-sm hover:bg-[#660018] transition"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchManagement;
