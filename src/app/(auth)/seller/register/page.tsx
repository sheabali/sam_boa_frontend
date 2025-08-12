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
import { Textarea } from "@/components/ui/textarea";
import { ghanaCities } from "@/constants/cityData";
import { regions } from "@/constants/regions";
import { Label } from "@radix-ui/react-label";
import { Copy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  phone?: string;
  facebook: string;
  instagram: string;
  twitter: string;
  snapchat: string;
  bio: string;
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

  const handleCopy = (value: string, field: string) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

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
      bio: "",
      selectedImage: null,
    },
  });

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
      handleSubmit(onSubmit)();
    }
  };

  const renderStep = () => {
    switch (steps[currentStep]) {
      case "apply_as_seller":
        return (
          <div className="space-y-6 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
              Apply as a Seller
            </h1>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm sm:text-base">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  {...control.register("name", { required: true })}
                  className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="shopName" className="text-sm sm:text-base">
                  Shop Name
                </Label>
                <Input
                  id="shopName"
                  placeholder="Enter your shop name"
                  {...control.register("shopName", { required: true })}
                  className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="mobileNumber" className="text-sm sm:text-base">
                  Phone Number
                </Label>
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
                      inputClass="!w-full !h-10 sm:!h-12 !text-sm sm:!text-base !rounded-2xl !pl-12 !py-3 sm:!py-4 !border-gray-300"
                      buttonClass="!h-10 sm:!h-12 !rounded-l-2xl !border-r-0 !border-gray-300"
                    />
                  )}
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm sm:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  {...control.register("email", { required: true })}
                  className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
                />
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900 text-white py-3 sm:py-4 rounded-2xl text-sm sm:text-base"
            >
              Continue
            </Button>
          </div>
        );
      case "seller_address":
        return (
          <div className="space-y-6 px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
              Seller Address
            </h1>
            <div className="space-y-4">
              <div>
                <Label htmlFor="regions" className="text-sm sm:text-base">
                  Region
                </Label>
                <Controller
                  name="regions"
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
              </div>
              <div>
                <Label htmlFor="city" className="text-sm sm:text-base">
                  City / Town
                </Label>
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
              </div>
              <div>
                <Label htmlFor="area" className="text-sm sm:text-base">
                  Area
                </Label>
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
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-sm sm:text-base">
                  Phone<span className="text-red-500">*</span>
                </Label>
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
                      inputClass="!w-full !h-10 sm:!h-12 !text-sm sm:!text-base !rounded-2xl !pl-12 !py-3 sm:!py-4 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
                      buttonClass="!h-10 sm:!h-12 !rounded-l-2xl !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
                      placeholder="Phone number"
                    />
                  )}
                />
              </div>
              <div>
                <Label htmlFor="aEmail" className="text-sm sm:text-base">
                  Email
                </Label>
                <Controller
                  name="aEmail"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Enter your email"
                      className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
                    />
                  )}
                />
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
      case "social_links":
        return (
          <div className="space-y-6 px-4 sm:px-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md sm:shadow-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
              Social Links
            </h1>
            <div className="space-y-4">
              <div>
                <Label htmlFor="facebook" className="text-sm sm:text-base">
                  Add Social Link (Facebook)
                </Label>
                <div className="relative">
                  <Controller
                    name="facebook"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-3 sm:py-4 px-4 sm:px-6 rounded-2xl pr-12 text-sm sm:text-base"
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
              <div>
                <Label htmlFor="instagram" className="text-sm sm:text-base">
                  Add Social Link (Instagram)
                </Label>
                <div className="relative">
                  <Controller
                    name="instagram"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-3 sm:py-4 px-4 sm:px-6 rounded-2xl pr-12 text-sm sm:text-base"
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
              <div>
                <Label htmlFor="twitter" className="text-sm sm:text-base">
                  Add Social Link (Twitter)
                </Label>
                <div className="relative">
                  <Controller
                    name="twitter"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-3 sm:py-4 px-4 sm:px-6 rounded-2xl pr-12 text-sm sm:text-base"
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
              <div>
                <Label htmlFor="snapchat" className="text-sm sm:text-base">
                  Add Social Link (Snapchat)
                </Label>
                <div className="relative">
                  <Controller
                    name="snapchat"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          placeholder="URL"
                          className="mt-1 py-3 sm:py-4 px-4 sm:px-6 rounded-2xl pr-12 text-sm sm:text-base"
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

              <div>
                <Label htmlFor="bio" className="text-sm sm:text-base">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  placeholder="Enter your bio"
                  {...control.register("bio", { required: true })}
                  className="mt-1 py-3 sm:py-4 px-4 sm:px-6 rounded-2xl text-sm sm:text-base"
                />
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-red-800 hover:bg-red-900 text-white py-3 sm:py-4 rounded-2xl text-sm sm:text-base"
              >
                Continue
              </Button>
            </div>
          </div>
        );
      case "upload_profile_picture":
        return (
          <div className="space-y-6 px-4 sm:px-6 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Upload a Profile Picture
            </h1>
            <div className="w-full border-2 border-dashed border-gray-300 rounded-xl py-8 sm:py-12 px-4 flex flex-col items-center bg-gray-100">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  className="w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 object-cover rounded-full mb-4"
                  width={160}
                  height={160}
                />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 sm:h-16 w-12 sm:w-16 text-gray-500 mb-4"
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
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    Upload a Profile Picture
                  </p>
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
                <div className="bg-red-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block cursor-pointer hover:bg-red-900 text-sm sm:text-base">
                  Upload file
                </div>
              </label>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <Link href="/subscription">
                <button
                  type="button"
                  className="bg-red-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base"
                  onClick={handleNext}
                >
                  Update
                </button>
              </Link>

              <Link href="/subscription">
                <button
                  type="button"
                  className="text-red-800 font-semibold text-sm sm:text-base"
                  onClick={handleNext}
                >
                  Skip
                </button>
              </Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 relative h-[350px] lg:h-auto">
        <Image
          src="/Frame 2147227838.svg"
          alt="VIBE Fashion"
          fill
          className="object-cover lg:object-contain"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <form
          className="w-full max-w-md sm:max-w-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          {renderStep()}
        </form>
      </div>
    </div>
  );
}
