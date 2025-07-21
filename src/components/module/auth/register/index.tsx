/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import "react-phone-input-2/lib/style.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

interface FormData {
  // Login/Registration
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  mobileMoneyName: string;
  city: string;

  // Sizes
  shoeSize: string;
  topSize: string;
  trouserSize: string;

  // Category
  category: string;

  // Brands
  selectedBrands: string[];

  // Interests
  interests: string[];
}

const steps = [
  "category",
  "interests",
  "brands",
  "sizes",
  "register",
  //   "login",
  //   "forgot-password",
];

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
  const { control } = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    mobileMoneyName: "",
    city: "",
    shoeSize: "",
    topSize: "",
    trouserSize: "",
    category: "",
    selectedBrands: [],
    interests: [],
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleBrand = (brand: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedBrands: prev.selectedBrands.includes(brand)
        ? prev.selectedBrands.filter((b) => b !== brand)
        : [...prev.selectedBrands, brand],
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      // Simulate API call
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("API Response:", result);
      console.log("Complete Form Data:", formData);

      alert("Onboarding completed! Check console for data.");
    } catch (error) {
      console.error("Error submitting form:", error);
      console.log("Form Data (Error case):", formData);
    }
  };

  const renderStep = () => {
    const stepName = steps[currentStep];

    switch (stepName) {
      //   case "forgot-password":
      //     return (
      //       <div className="space-y-6">
      //         <div className="text-center space-y-2">
      //           <h1 className="text-2xl font-bold text-gray-900">
      //             Forgot Password?
      //           </h1>
      //         </div>

      //         <div className="space-y-4">
      //           <div>
      //             <Label htmlFor="resetEmail">Email</Label>
      //             <Input
      //               id="resetEmail"
      //               type="email"
      //               placeholder="email@gmail.com"
      //               value={formData.email}
      //               onChange={(e) => updateFormData("email", e.target.value)}
      //             />
      //           </div>
      //         </div>

      //         <Button
      //           onClick={handleNext}
      //           className="w-full bg-red-800 hover:bg-red-900"
      //         >
      //           Reset Password
      //         </Button>
      //       </div>
      //     );

      case "category":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Select Category
              </h1>
            </div>

            <div className=" grid grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`cursor-pointer transition-all ${
                    formData.category === category.id
                      ? "ring-2 ring-red-800"
                      : ""
                  }`}
                  onClick={() => updateFormData("category", category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.label}
                        width={700}
                        height={500}
                        className=" rounded-lg mb-2"
                      />
                    </div>
                    <p className="text-[18px] font-medium">{category.label}</p>
                  </CardContent>
                </div>
              ))}
            </div>

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
                  You have picked 3 brands
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
                <Select
                  value={formData.shoeSize}
                  onValueChange={(value) => updateFormData("shoeSize", value)}
                >
                  <SelectTrigger className="w-full py-6 mt-2">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="w-full" value="6">
                      6
                    </SelectItem>
                    <SelectItem value="7">7</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="9">9</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>What is your top size?</Label>
                <Select
                  value={formData.topSize}
                  onValueChange={(value) => updateFormData("topSize", value)}
                >
                  <SelectTrigger className="w-full py-6 mt-2">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="XS">XS</SelectItem>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="XXL">XXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>What is your trouser or skirt size?</Label>
                <Select
                  value={formData.trouserSize}
                  onValueChange={(value) =>
                    updateFormData("trouserSize", value)
                  }
                >
                  <SelectTrigger className="w-full py-6 mt-2">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="28">28</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                    <SelectItem value="34">34</SelectItem>
                    <SelectItem value="36">36</SelectItem>
                    <SelectItem value="38">38</SelectItem>
                  </SelectContent>
                </Select>
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
                Enter new email and password for create an <br /> account
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  className="py-[24px] px-6 rounded-2xl mt-1"
                  placeholder="Enter your first name here"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Enter your Last name here"
                  className="py-[24px] px-6 rounded-2xl mt-1"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"us"}
                      inputProps={{ id: "phoneNumber" }}
                      containerClass="!w-full"
                      inputClass="!w-full !h-10 !text-sm !rounded-lg !pl-12 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
                      buttonClass="!h-10 !rounded-l-lg !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
                      placeholder="Phone number"
                    />
                  )}
                />
              </div>

              <div>
                <Label htmlFor="mobileMoneyName">
                  Registered mobile money name
                </Label>
                <Select
                  value={formData.mobileMoneyName}
                  onValueChange={(value) =>
                    updateFormData("mobileMoneyName", value)
                  }
                >
                  <SelectTrigger className="w-full py-6 mt-2">
                    <SelectValue placeholder="Telecel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="telecel">Telecel</SelectItem>
                    <SelectItem value="mtn">MTN</SelectItem>
                    <SelectItem value="vodafone">Vodafone</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="city">City</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => updateFormData("city", value)}
                >
                  <SelectTrigger className="w-full py-6 mt-2">
                    <SelectValue placeholder="Your City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accra">Accra</SelectItem>
                    <SelectItem value="kumasi">Kumasi</SelectItem>
                    <SelectItem value="tamale">Tamale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Link href="/">
              <Button
                onClick={handleNext}
                className="w-full bg-red-800 hover:bg-red-900"
              >
                Continue
              </Button>
            </Link>

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

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="./login.svg"
          alt="VIBE Fashion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-opacity-20" />
        {/* <div className="absolute top-8 left-8">
          <h1 className="text-6xl font-bold text-white">VIBE</h1>
        </div> */}
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">{renderStep()}</div>
      </div>
    </div>
  );
}
