"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Button from "@/components/ui/button";
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
import { Label } from "@radix-ui/react-label";
import { Copy } from "lucide-react";
import Image from "next/image";

interface FormData {
  email: string;
  password: string;
  name: string;
  shopName: string;
  mobileNumber: string;
  mobileMoneyName: string;
  aEmail: string;
  city: string;
  area: string;
  shoeSize: string;
  regions: string;
  topSize: string;
  trouserSize: string;
  category: string;
  selectedBrands: string[];
  interests: string[];
  phone?: string; // for Controller phone field
  facebook: string;
  instagram: string;
  twitter: string;
  snapchat: string;
  selectedImage: File | null;
}

const steps = [
  "apply_as_seller",
  "seller_address",
  "social_links",
  "upload_profile_picture",
];

export default function VibeOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [copiedField, setCopiedField] = useState("");

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  console.log("Selected Image:", selectedImage);

  const handleCopy = (value: string, field: string) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  // Initialize react-hook-form
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      shopName: "",
      mobileNumber: "",
      mobileMoneyName: "",
      city: "",
      shoeSize: "",
      regions: "",
      topSize: "",
      trouserSize: "",
      category: "",
      selectedBrands: [],
      interests: [],
      phone: "",
      facebook: "",
      instagram: "",
      twitter: "",
      snapchat: "",
      selectedImage: null,
    },
  });

  // If you want to track form data locally:
  // You can watch fields with watch() or handle them via useForm

  const onSubmit = (data: FormData) => {
    const finalData = {
      ...data,
      selectedImage,
    };
    console.log("Final form data:", finalData);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Trigger react-hook-form submit
      handleSubmit(onSubmit)();
    }
  };

  const renderStep = () => {
    switch (steps[currentStep]) {
      case "apply_as_seller":
        return (
          <div className="space-y-6">
            <h1 className="text-[32px] font-bold text-center text-gray-900">
              Apply as a Seller
            </h1>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...control.register("name", { required: true })}
                  className="py-[20px] px-6 rounded-2xl mt-1"
                />
              </div>

              <div>
                <Label htmlFor="shopName">Shop Name</Label>
                <Input
                  id="shopName"
                  placeholder="Enter your shop name"
                  {...control.register("shopName", { required: true })}
                  className="py-[20px] px-6 rounded-2xl mt-1"
                />
              </div>

              <div>
                <Label htmlFor="mobileNumber">Phone Number</Label>
                <Controller
                  name="mobileNumber"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <PhoneInput
                      country={"gh"}
                      inputProps={{ name: "mobileNumber", required: true }}
                      value={field.value}
                      onChange={field.onChange}
                      containerClass="!w-full"
                      inputClass="!w-full !h-[48px] !text-sm !rounded-2xl !pl-12 py-6 !border-gray-300"
                      buttonClass="!h-[48px] !rounded-l-2xl !border-r-0 !border-gray-300"
                    />
                  )}
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  {...control.register("email", { required: true })}
                  className="py-[20px] px-6 rounded-2xl mt-1"
                />
              </div>
            </div>

            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              Continue
            </Button>
          </div>
        );

      case "seller_address":
        return (
          <div className="space-y-6">
            <h1 className="text-[32px] font-bold text-center text-gray-900">
              Seller Address
            </h1>

            <div className="space-y-4">
              <div>
                <Label htmlFor="regions">Region</Label>
                <Controller
                  name="regions"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-6 mt-2 rounded-2xl">
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
              </div>

              <div>
                <Label htmlFor="city">City / Town</Label>
                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-6 mt-2 rounded-2xl">
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
                      className="py-[20px] px-6 rounded-2xl mt-1"
                    />
                  )}
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
                      country="us"
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
                <Label htmlFor="aEmail">Email</Label>
                <Controller
                  name="aEmail"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="py-[20px] px-6 rounded-2xl mt-1"
                    />
                  )}
                />
              </div>
            </div>

            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
            >
              {currentStep === steps.length - 1 ? "Submit" : "Continue"}
            </Button>
          </div>
        );
      case "social_links":
        return (
          <div className="space-y-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h1 className="text-[32px] font-bold text-center text-gray-900">
              Apply as a Seller
            </h1>

            <div className="space-y-4">
              {/* Facebook */}
              <div>
                <Label htmlFor="facebook">Add Social Link (Facebook)</Label>
                <div className="relative">
                  <Controller
                    name="facebook"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-[20px] px-6 rounded-2xl pr-12"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => handleCopy(field.value, "facebook")}
                        >
                          <Copy className="w-5 h-5 text-gray-600 hover:text-black" />
                        </button>
                        {copiedField === "facebook" && (
                          <span className="absolute right-12 top-1/2 -translate-y-1/2 text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>

              {/* Instagram */}
              <div>
                <Label htmlFor="instagram">Add Social Link (Instagram)</Label>
                <div className="relative">
                  <Controller
                    name="instagram"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-[20px] px-6 rounded-2xl pr-12"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => handleCopy(field.value, "instagram")}
                        >
                          <Copy className="w-5 h-5 text-gray-600 hover:text-black" />
                        </button>
                        {copiedField === "instagram" && (
                          <span className="absolute right-12 top-1/2 -translate-y-1/2 text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>

              {/* Twitter */}
              <div>
                <Label htmlFor="twitter">Add Social Link (Twitter)</Label>
                <div className="relative">
                  <Controller
                    name="twitter"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-[20px] px-6 rounded-2xl pr-12"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => handleCopy(field.value, "twitter")}
                        >
                          <Copy className="w-5 h-5 text-gray-600 hover:text-black" />
                        </button>
                        {copiedField === "twitter" && (
                          <span className="absolute right-12 top-1/2 -translate-y-1/2 text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>

              {/* Snapchat */}
              <div>
                <Label htmlFor="snapchat">Add Social Link (Snapchat)</Label>
                <div className="relative">
                  <Controller
                    name="snapchat"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-[20px] px-6 rounded-2xl pr-12"
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                          onClick={() => handleCopy(field.value, "snapchat")}
                        >
                          <Copy className="w-5 h-5 text-gray-600 hover:text-black" />
                        </button>
                        {copiedField === "snapchat" && (
                          <span className="absolute right-12 top-1/2 -translate-y-1/2 text-xs text-green-600">
                            Copied!
                          </span>
                        )}
                      </>
                    )}
                  />
                </div>
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-red-800 hover:bg-red-900 text-white py-3 rounded-2xl"
              >
                Continue
              </Button>
            </div>
          </div>
        );

      case "upload_profile_picture":
        return (
          <div className="space-y-6 text-center">
            <h1 className="text-[32px] font-bold text-gray-900">
              Upload a Profile Picture
            </h1>
            <div className="w-full border-2 border-dashed border-gray-300 rounded-xl py-12 px-4 flex flex-col items-center bg-gray-100">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-full mb-4"
                  width={40}
                  height={40}
                />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-500 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <p className="text-gray-600 mb-2">Upload a Profile Picture</p>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                id="upload"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setSelectedImage(file);
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
                className="hidden"
              />
              <label htmlFor="upload">
                <div className="bg-red-800 text-white px-6 py-2 rounded-full inline-block cursor-pointer hover:bg-red-900">
                  Upload file
                </div>
              </label>
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                type="button"
                className="bg-red-800 text-white px-8 py-3 rounded-full"
                onClick={handleNext}
              >
                Update
              </button>
              <button
                type="button"
                className="text-red-800 font-semibold"
                onClick={handleNext}
              >
                Skip
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
      {/* Left Side Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/Frame 2147227838.svg"
          alt="VIBE Fashion"
          fill
          className="object-cover"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          {renderStep()}
        </form>
      </div>
    </div>
  );
}
