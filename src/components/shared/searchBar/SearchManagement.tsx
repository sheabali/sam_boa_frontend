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

  const [category, setCategory] = useState<ServiceOption[]>([]);
  const [size, setSize] = useState<ServiceOption[]>([]);
  const [brand, setBrand] = useState<ServiceOption[]>([]);
  const [color, setColor] = useState<ServiceOption[]>([]);
  const [condition, setCondition] = useState<ServiceOption[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: "",
    size: "",
    brand: "",
    color: "",
    condition: "",
  });

  const [priceRange, setPriceRange] = useState<number[]>([100, 250]);

  useEffect(() => {
    setCategory([
      { name: "Mens", value: "mens" },
      { name: "Womens", value: "womens" },
      { name: "Both", value: "both" },
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
      { name: "Maroon", value: "#800000" },
      { name: "Red", value: "#FF0000" },
      { name: "Pink", value: "#FF69B4" },
      { name: "Dark Blue", value: "#00008B" },
      { name: "Blue", value: "#0000FF" },
      { name: "Cyan", value: "#00FFFF" },
      { name: "Green", value: "#008000" },
      { name: "Yellow", value: "#FFFF00" },
      { name: "Light Blue", value: "#ADD8E6" },
      { name: "Light Green", value: "#90EE90" },
    ]);

    setCondition([
      { name: "Brand New", value: "brand-new" },
      { name: "Used Like New", value: "used-like-new" },
      { name: "Used Like Excellent", value: "used-like-excellent" },
      { name: "Used Like Good", value: "used like good" },
      { name: "Medium", value: "medium" },
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
        className="appearance-none  bg-white px-3 py-2 pr-8 rounded-md text-sm w-[80%] focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <option value="">Color</option>
        {color.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            style={{ backgroundColor: opt.value, color: "transparent" }}
          >
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

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 py-4">
      {/* Mobile: Drawer */}
      <div className="flex justify-center items-center mt-8 lg:hidden">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
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
              {renderDropdown("category", "Category", category)}
              <PriceRangePopover value={priceRange} onChange={setPriceRange} />
              {renderColorDropdown()}
              {renderDropdown("size", "Size", size)}
              {renderDropdown("brand", "Brand", brand)}
              {renderDropdown("condition", "Condition", condition)}
            </div>
            <div className="px-4 pb-6">
              <Button
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
          {renderDropdown("category", "Category", category)}
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
