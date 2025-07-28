"use client";

import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ghanaCities } from "@/constants/cityData";
import { regions } from "@/constants/regions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { z } from "zod";

// Define form data schema with Zod
const formSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .min(1, "Password is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  mobileNumber: z.string().min(1, "Mobile number is required"),
  mobileMoneyName: z.string().min(1, "Mobile money name is required"),
  city: z.string().min(1, "City is required"),
  region: z.string().min(1, "Region is required"),
  area: z.string().min(1, "Area is required"),
  shoeSize: z.string().min(1, "Shoe size is required"),
  topSize: z.string().min(1, "Top size is required"),
  trouserSize: z.string().min(1, "Trouser size is required"),
  category: z.string().min(1, "Category is required"),
  selectedBrands: z.array(z.string()).min(1, "Select at least one brand"),
  interests: z.array(z.string()).min(1, "Select at least one interest"),
});

// Infer TypeScript type from Zod schema
type FormData = z.infer<typeof formSchema>;

// Define steps
const steps = [
  "category",
  "interests",
  "brands",
  "sizes",
  "register",
  "address",
  "make_account",
];

// Define categories
const categories = [
  {
    id: "mensware",
    label: "Shop Mensware",
    image: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
  {
    id: "womensware",
    label: "Shop Womensware",
    image: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: "both",
    label: "Shop Both",
    image: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
  },
];

// Define interests
const interests = [
  {
    id: "streetwear",
    label: "Streetwear",
    image: "https://i.ibb.co/WNy9Tk2k/Rectangle-23854-2.png",
  },
  {
    id: "vintage",
    label: "Vintage",
    image: "https://i.ibb.co/0VD0pJW2/Rectangle-23853-2.png",
  },
  {
    id: "sportswear",
    label: "Sportswear",
    image: "https://i.ibb.co/8JtGCmW/Rectangle-23852-2.png",
  },
  {
    id: "luxury",
    label: "Luxury",
    image: "https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png",
  },
  {
    id: "independent",
    label: "Independent brands",
    image: "https://i.ibb.co/v43nVf4b/Rectangle-23853-1.png",
  },
  {
    id: "old-fashion",
    label: "Old fashion",
    image: "https://i.ibb.co/RVf6mfx/Rectangle-23852-1.png",
  },
];

// Define suggested brands
const suggestedBrands = [
  "Vans",
  "Tommy Hilfiger",
  "Stone",
  "Fila",
  "Yezzy",
  "Golf Wang",
  "Kenzo",
  "Kappa",
  "Lee",
];

export default function VibeOnboarding() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      mobileMoneyName: "",
      city: "",
      region: "",
      area: "",
      shoeSize: "",
      topSize: "",
      trouserSize: "",
      category: "",
      selectedBrands: [],
      interests: [],
    },
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  // Watch form values for debugging
  const formData = watch();
  console.log("Current Form Data:", JSON.stringify(formData, null, 2));

  const toggleBrand = (brand: string) => {
    const currentBrands = formData.selectedBrands;
    setValue(
      "selectedBrands",
      currentBrands.includes(brand)
        ? currentBrands.filter((b) => b !== brand)
        : [...currentBrands, brand],
      { shouldValidate: true }
    );
  };

  const toggleInterest = (interest: string) => {
    const currentInterests = formData.interests;
    setValue(
      "interests",
      currentInterests.includes(interest)
        ? currentInterests.filter((i) => i !== interest)
        : [...currentInterests, interest],
      { shouldValidate: true }
    );
  };

  const handleNext = () => {
    console.log("Current Step:", currentStep, "Total Steps:", steps.length);
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Triggering form submission");
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: FormData) => {
    console.log(
      "onSubmit triggered with data:",
      data,
      JSON.stringify(data, null, 2)
    );
    router.push("/");
    try {
      // Validate data structure
      if (!data || Object.keys(data).length === 0) {
        console.error("Form data is empty or undefined");
        alert("Form data is empty. Please fill out all required fields.");
        return;
      }

      console.log("Submitting to API:", JSON.stringify(data, null, 2));
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", JSON.stringify(result, null, 2));
      console.log("Complete Form Data:", JSON.stringify(data, null, 2));
      alert("Onboarding completed! Check console for data.");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("Form Data (Error case):", JSON.stringify(data, null, 2));
      alert("An error occurred during submission. Check console for details.");
    }
  };

  const renderStep = () => {
    const stepName = steps[currentStep];

    switch (stepName) {
      case "category":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Select Category
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`cursor-pointer transition-all ${
                    formData.category === category.id
                      ? "ring-2 ring-red-800"
                      : ""
                  }`}
                  onClick={() =>
                    setValue("category", category.id, { shouldValidate: true })
                  }
                >
                  <CardContent className="p-4 text-center">
                    <div>
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.label}
                        width={700}
                        height={500}
                        className="rounded-lg mb-2"
                      />
                    </div>
                    <p className="text-[18px] font-medium">{category.label}</p>
                  </CardContent>
                </div>
              ))}
            </div>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              Next {">>"}
            </Button>
          </div>
        );

      case "interests":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Select Interests
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className={`cursor-pointer transition-all ${
                    formData.interests.includes(interest.id)
                      ? "ring-2 ring-red-800"
                      : ""
                  }`}
                  onClick={() => toggleInterest(interest.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center">
                      <Image
                        src={interest.image || "/placeholder.svg"}
                        alt={interest.label}
                        width={700}
                        height={700}
                        className=""
                      />
                    </div>
                    <p className="text-[18px] font-medium">{interest.label}</p>
                  </CardContent>
                </div>
              ))}
            </div>
            {errors.interests && (
              <p className="text-red-500 text-sm">{errors.interests.message}</p>
            )}
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              Next {">>"}
            </Button>
          </div>
        );

      case "brands":
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                  i
                </div>
                <span className="text-sm text-blue-600">
                  You have picked {formData.selectedBrands.length} brand(s)
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.selectedBrands.map((brand) => (
                  <Badge
                    key={brand}
                    variant="secondary"
                    className="bg-red-800 text-white"
                  >
                    {brand}
                    <X
                      className="w-3 h-3 ml-1 cursor-pointer"
                      onClick={() => toggleBrand(brand)}
                    />
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Suggested</h2>
              <div className="grid grid-cols-3 gap-2">
                {suggestedBrands.map((brand) => (
                  <Button
                    key={brand}
                    variant="outline"
                    size="sm"
                    onClick={() => toggleBrand(brand)}
                    className={`justify-between ${
                      formData.selectedBrands.includes(brand)
                        ? "bg-red-50 border-red-800"
                        : ""
                    }`}
                  >
                    {brand}
                    <span className="text-lg">+</span>
                  </Button>
                ))}
              </div>
            </div>
            {errors.selectedBrands && (
              <p className="text-red-500 text-sm">
                {errors.selectedBrands.message}
              </p>
            )}
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              Next {">>"}
            </Button>
          </div>
        );

      case "sizes":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Your Sizes</h1>
            </div>
            <div className="space-y-4">
              <div>
                <Label>What is your shoe size?</Label>
                <Controller
                  name="shoeSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-6 mt-2">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {["6", "7", "8", "9", "10", "11", "12"].map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.shoeSize && (
                  <p className="text-red-500 text-sm">
                    {errors.shoeSize.message}
                  </p>
                )}
              </div>
              <div>
                <Label>What is your top size?</Label>
                <Controller
                  name="topSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-6 mt-2">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.topSize && (
                  <p className="text-red-500 text-sm">
                    {errors.topSize.message}
                  </p>
                )}
              </div>
              <div>
                <Label>What is your trouser or skirt size?</Label>
                <Controller
                  name="trouserSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-6 mt-2">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {["28", "30", "32", "34", "36", "38"].map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.trouserSize && (
                  <p className="text-red-500 text-sm">
                    {errors.trouserSize.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              Continue
            </Button>
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button
                onClick={() => setCurrentStep(0)}
                className="text-red-800 hover:underline"
              >
                Log in
              </button>
            </div>
          </div>
        );

      case "register":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-[40px] font-bold text-gray-900">
                Create an account
              </h1>
              <p className="text-gray-600 text-[18px]">
                Enter your details to create an account
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="firstName"
                      className="py-[24px] px-6 rounded-2xl mt-1"
                      placeholder="Enter your first name here"
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="lastName"
                      className="py-[24px] px-6 rounded-2xl mt-1"
                      placeholder="Enter your last name here"
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="mobileNumber">
                  Mobile money number<span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="mobileNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country="us"
                      inputProps={{ id: "mobileNumber" }}
                      containerClass="!w-full"
                      inputClass="!w-full !h-10 !text-sm !rounded-lg !pl-12 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
                      buttonClass="!h-10 !rounded-l-lg !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
                      placeholder="Phone number"
                    />
                  )}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="mobileMoneyName">
                  Registered mobile money name
                </Label>
                <Controller
                  name="mobileMoneyName"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-6 mt-2">
                        <SelectValue placeholder="Select Provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Telecel", "MTN", "Vodafone"].map((provider) => (
                          <SelectItem
                            key={provider}
                            value={provider.toLowerCase()}
                          >
                            {provider}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.mobileMoneyName && (
                  <p className="text-red-500 text-sm">
                    {errors.mobileMoneyName.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              Continue
            </Button>
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button
                onClick={() => setCurrentStep(0)}
                className="text-red-800 hover:underline"
              >
                Log in
              </button>
            </div>
          </div>
        );

      case "address":
        return (
          <div className="space-y-6 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
              Seller Address
            </h1>
            <div className="space-y-4">
              <div>
                <Label htmlFor="region">Region</Label>
                <Controller
                  name="region"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-3 sm:py-4 mt-2 rounded-2xl text-sm sm:text-base">
                        <SelectValue placeholder="Select Region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.region && (
                  <p className="text-red-500 text-sm">
                    {errors.region.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="city">City / Town</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-3 sm:py-4 mt-2 rounded-2xl text-sm sm:text-base">
                        <SelectValue placeholder="Select City or Town" />
                      </SelectTrigger>
                      <SelectContent>
                        {ghanaCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="area">Area</Label>
                <Controller
                  name="area"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter your area"
                      className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
                    />
                  )}
                />
                {errors.area && (
                  <p className="text-red-500 text-sm">{errors.area.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="mobileNumber">
                  Phone<span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="mobileNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country="us"
                      inputProps={{ id: "mobileNumber" }}
                      containerClass="!w-full"
                      inputClass="!w-full !h-10 sm:!h-12 !text-sm sm:!text-base !rounded-2xl !pl-12 !py-3 sm:!py-4 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
                      buttonClass="!h-10 sm:!h-12 !rounded-l-2xl !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
                      placeholder="Phone number"
                    />
                  )}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900 text-white py-3 sm:py-4 rounded-2xl text-sm sm:text-base"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Continue"}
            </Button>
          </div>
        );

      case "make_account":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Create an Account
              </h1>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="email@gmail.com"
                      className="py-[24px] px-6 rounded-2xl mt-1"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="py-[24px] px-6 rounded-2xl mt-1"
                    />
                  )}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm text-red-800 hover:underline mt-2"
                >
                  {showPassword ? "Hide" : "Show"} Password
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <Link href="/">
              <Button
                onClick={handleNext}
                className="w-full bg-red-800 hover:bg-red-900"
              >
                Create Account
              </Button>
            </Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/login.svg"
          alt="VIBE Fashion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-20" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{renderStep()}</div>
      </div>
    </div>
  );
}
