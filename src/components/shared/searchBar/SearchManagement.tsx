"use client";

import { ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ServiceOption = { name: string; value: string };

const SearchManagement = () => {
  const router = useRouter();

  // Filter option states
  const [category, setCategory] = useState<ServiceOption[]>([]);
  const [size, setSize] = useState<ServiceOption[]>([]);
  const [brand, setBrand] = useState<ServiceOption[]>([]);
  const [price, setPrice] = useState<ServiceOption[]>([]);
  const [color, setColor] = useState<ServiceOption[]>([]);
  const [condition, setCondition] = useState<ServiceOption[]>([]);
  const [area, setArea] = useState<ServiceOption[]>([]);

  // Selected values
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    brand: "",
    price: "",
    color: "",
    condition: "",
    area: "",
  });

  useEffect(() => {
    setCategory([
      { name: "All", value: "All" },
      { name: "pent", value: "Pent" },
    ]);
    setSize([
      { name: "Small", value: "small" },
      { name: "Medium", value: "medium" },
      { name: "Large", value: "large" },
    ]);
    setBrand([
      { name: "Nice", value: "nice" },
      { name: "Cool", value: "cool" },
    ]);
    setPrice([
      { name: "Under $10k", value: "under-10k" },
      { name: "$10k - $50k", value: "10k-50k" },
    ]);
    setColor([
      { name: "Red", value: "red" },
      { name: "Black", value: "black" },
    ]);
    setCondition([
      { name: "New", value: "new" },
      { name: "Used", value: "used" },
    ]);
    setArea([
      { name: "Dhaka", value: "dhaka" },
      { name: "Chittagong", value: "chittagong" },
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
    router.push(`/explore?${query.toString()}`);
  };

  const renderDropdown = (
    name: keyof typeof filters,
    placeholder: string,
    options: ServiceOption[]
  ) => (
    <div className="relative">
      <select
        value={filters[name]}
        onChange={(e) => handleChange(name, e.target.value)}
        className="appearance-none bg-transparent px-3 py-2 pr-8 border-none focus:outline-none focus:ring-0 text-sm text-gray-700"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.name}
          </option>
        ))}
      </select>

      {/* Chevron icon */}
      <ChevronDown
        size={16}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );

  return (
    <div className="bg-white mt-4 rounded-xl shadow-md px-4 py-3 md:px-6 md:py-4 w-full max-w-screen-xl mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-2 md:gap-4">
        {renderDropdown("category", "Category", category)}
        <span className="hidden md:inline-block h-5 w-px bg-gray-200" />

        {renderDropdown("size", "Size", size)}
        <span className="hidden md:inline-block h-5 w-px bg-gray-200" />

        {renderDropdown("brand", "Brand", brand)}
        <span className="hidden md:inline-block h-5 w-px bg-gray-200" />

        {renderDropdown("price", "Price range", price)}
        <span className="hidden md:inline-block h-5 w-px bg-gray-200" />

        {renderDropdown("color", "Color", color)}
        <span className="hidden md:inline-block h-5 w-px bg-gray-200" />

        {renderDropdown("condition", "Condition", condition)}
        <span className="hidden md:inline-block h-5 w-px bg-gray-200" />

        {renderDropdown("area", "Area", area)}

        <div className="ml-auto">
          <button
            onClick={handleSearch}
            className="bg-[#800020] text-white flex items-center gap-1 px-5 py-2 rounded-full text-sm hover:bg-[#660018] transition"
          >
            <Search size={16} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchManagement;
