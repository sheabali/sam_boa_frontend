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
import { sizes } from "@/constants/sizeData";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";
import { z } from "zod";

// const interests = [
//   {
//     id: "streetwear",
//     label: "Streetwear",
//     image: "https://i.ibb.co/WNy9Tk2k/Rectangle-23854-2.png",
//   },
//   {
//     id: "vintage",
//     label: "Vintage",
//     image: "https://i.ibb.co/0VD0pJW2/Rectangle-23853-2.png",
//   },
//   {
//     id: "sportswear",
//     label: "Sportswear",
//     image: "https://i.ibb.co/8JtGCmW/Rectangle-23852-2.png",
//   },
//   {
//     id: "luxury",
//     label: "Luxury",
//     image: "https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png",
//   },
//   {
//     id: "independent",
//     label: "Independent brands",
//     image: "https://i.ibb.co/v43nVf4b/Rectangle-23853-1.png",
//   },
//   {
//     id: "old-fashion",
//     label: "Old fashion",
//     image: "https://i.ibb.co/RVf6mfx/Rectangle-23852-1.png",
//   },
// ];

const validInterests = [
  "streetwear",
  "vintage",
  "sportswear",
  "luxury",
  "independent",
  "old-fashion",
]; // Replace with actual valid interests

// Define form data schema with Zod
const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required")
    .refine((email) => !email.includes("temporary"), {
      message: "Disposable email addresses are not allowed",
    }),
  password: z.string().min(8, "Password must be at least 8 characters"),
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name cannot exceed 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name cannot exceed 50 characters"),
  // mobileNumber: z.string().min(1, "Mobile number is required"),

  // mobileMoneyName: z
  //   .string()
  //   .min(1, "Mobile money provider is required")
  //   .refine((value) => ["telecel", "mtn", "airteltigo"].includes(value), {
  //     message: "Invalid mobile money provider",
  //   }),
  // city: z.string().min(1, "City is required"),
  // region: z.string().min(1, "Region is required"),
  // area: z.string().min(1, "Area is required"),
  shoeSize: z.string().min(1, "Shoe size is required"),
  topSize: z.string().min(1, "Top size is required"),
  trouserSize: z.string().min(1, "Trouser size is required"),
  gender: z
    .string()
    .min(1, "gender is required")
    .refine((value) => ["menswear", "womenswear", "both"].includes(value), {
      message: "Invalid gender",
    }),
  selectedBrands: z
    .array(z.string())
    .min(1, "Select at least one brand")
    .refine(
      (brands) => brands.every((brand) => suggestedBrands.includes(brand)),
      { message: "Invalid brand selected" }
    ),
  interests: z
    .array(z.string())
    .min(1, "Select at least one interest")
    .refine(
      (interests) =>
        interests.every((interest) => validInterests.includes(interest)),
      { message: "Invalid interest selected" }
    ),
});

// Infer TypeScript type from Zod schema
type FormData = z.infer<typeof formSchema>;

// Define steps
const steps = [
  "gender",
  "interests",
  "brands",
  "sizes",
  "register",
  //"address",
  "make_account",
];

// Define step-specific fields for validation
const stepFields: { [key: string]: (keyof FormData)[] } = {
  gender: ["gender"],
  interests: ["interests"],
  brands: ["selectedBrands"],
  sizes: ["shoeSize", "topSize", "trouserSize"],
  register: ["firstName", "lastName"], //"mobileNumber", "mobileMoneyName"],
  // address: ["region", "city", "area"], //"mobileNumber", "email"],
  make_account: ["email", "password"],
};

// Define genders
const genders = [
  {
    id: "menswear",
    label: "Shop Menswear",
    image: "https://i.ibb.co/mVjzdhHW/Rectangle-23852.png",
  },
  {
    id: "womenswear",
    label: "Shop Womenswear",
    image: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: "unisex",
    label: "unisex",
    image: "https://i.ibb.co/ycvbKsQV/Rectangle-23854.png",
  },
];

// Define interests
const interests = [
  {
    id: "streetwear",
    label: "Streetwear",
    image: "https://i.ibb.co/RVf6mfx/Rectangle-23852-1.png",
  },
  {
    id: "vintage",
    label: "Vintage",
    image: "https://i.ibb.co/v43nVf4b/Rectangle-23853-1.png",
  },
  {
    id: "sportswear",
    label: "Sportswear",
    image: "https://i.ibb.co/Rkp8d1qq/Rectangle-23854-1.png",
  },
  {
    id: "luxury",
    label: "Luxury",
    image: "https://i.ibb.co/8JtGCmW/Rectangle-23852-2.png",
  },
  {
    id: "independent",
    label: "Independent brands",
    image: "https://i.ibb.co/0VD0pJW2/Rectangle-23853-2.png",
  },
  {
    id: "old-fashion",
    label: "Old fashion",
    image: "https://i.ibb.co/WNy9Tk2k/Rectangle-23854-2.png",
  },
];

// Define suggested brands
const suggestedBrands = [
  "Levi’s",
  "Nike",
  "Adidas",
  "Zara",
  "H&M",
  "Forever 21",
  "Shein",
  "American Eagle Outfitters",
  "Polo Ralph Lauren",
  "Gap",
  "Urban Outfitters",
  "Topshop",
  "Converse",
  "Dr. Martens",
  "Uniqlo",
  "Patagonia",
  "The North Face",
  "Columbia Sportswear",
  "Champion",
  "ASOS",
];

export default function VibeOnboarding() {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      // mobileNumber: "",
      // mobileMoneyName: "",
      // city: "",
      // region: "",
      // area: "",
      shoeSize: "",
      topSize: "",
      trouserSize: "",
      gender: "",
      selectedBrands: [],
      interests: [],
    },
    mode: "onChange", // Enable real-time validation
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

  const formData = watch();

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

  const handleNext = async () => {
    // Validate fields for the current step
    const isStepValid = await trigger(stepFields[steps[currentStep]], {
      shouldFocus: true,
    });

    if (!isStepValid) {
      console.log(`Validation failed for step ${steps[currentStep]}:`, errors);
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
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
      router.push("/");
    } catch (error) {
      toast.success("Onboarding completed successfully!"); //todo remove this line just for testing
      router.push("/");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    const stepName = steps[currentStep];
    const isNextButtonDisabled =
      !isValid && stepFields[stepName].some((field) => !formData[field]);

    switch (stepName) {
      case "gender":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">
                Select gender
              </h1>
            </div>
            <div className="grid grid-cols-3 md:gap-4">
              {genders.map((gender) => (
                <div
                  key={gender.id}
                  className={`cursor-pointer transition-all ${
                    formData.gender === gender.id ? "ring-2 ring-red-800" : ""
                  }`}
                  onClick={() =>
                    setValue("gender", gender.id, { shouldValidate: true })
                  }
                >
                  <CardContent className="p-4 text-center">
                    <div>
                      <Image
                        src={gender.image || "/placeholder.svg"}
                        alt={gender.label}
                        width={700}
                        height={500}
                        className="rounded-lg mb-2"
                      />
                    </div>
                    <p className="text-[12px] md:text-[18px] font-medium">
                      {gender.label}
                    </p>
                  </CardContent>
                </div>
              ))}
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm" role="alert">
                {errors.gender.message}
              </p>
            )}
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
              disabled={isNextButtonDisabled}
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
            <div className="grid grid-cols-3 rounded-full gap-4">
              {interests.map((interest) => (
                <div
                  key={interest.id}
                  className={`cursor-pointer  transition-all ${
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
                        className="rounded-full"
                      />
                    </div>
                    <p className="text-[12px] md:text-[18px] font-medium">
                      {interest.label}
                    </p>
                  </CardContent>
                </div>
              ))}
            </div>
            {errors.interests && (
              <p className="text-red-500 text-sm" role="alert">
                {errors.interests.message}
              </p>
            )}
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
              disabled={isNextButtonDisabled}
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
              <p className="text-red-500 text-sm" role="alert">
                {errors.selectedBrands.message}
              </p>
            )}
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
              disabled={isNextButtonDisabled}
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
                <Label className="text-sm md:text-base">
                  What is your shoe size?
                </Label>
                <Controller
                  name="shoeSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-5 rounded-2xl mt-2">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.shoeSize && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.shoeSize.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm md:text-base">
                  What is your top size?
                </Label>
                <Controller
                  name="topSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-5 rounded-2xl mt-2">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.topSize && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.topSize.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm md:text-base">
                  What is your trouser or skirt size?
                </Label>
                <Controller
                  name="trouserSize"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-5 rounded-2xl mt-2">
                        <SelectValue placeholder="Select Size" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.trouserSize && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.trouserSize.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
              disabled={isNextButtonDisabled}
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
              <h1 className="text-2xl md:text-[40px] font-bold text-gray-900">
                Create an account
              </h1>
              <p className="text-gray-600 text-sm md:text-[18px]">
                Enter your details to create an account
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <Label className="text-sm md:text-base" htmlFor="firstName">
                  First Name
                </Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="firstName"
                      className="py-[20px] mb-2 md:py-[24px] px-6 rounded-2xl mt-1"
                      placeholder="Enter your first name here"
                    />
                  )}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm md:text-base" htmlFor="lastName">
                  Last Name
                </Label>
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="lastName"
                      className="py-[20px] mb-2 md:py-[24px] px-6 rounded-2xl mt-1"
                      placeholder="Enter your last name here"
                    />
                  )}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              {/* <div>
                <Label className="text-sm md:text-base" htmlFor="mobileNumber">
                  Mobile money number<span className="text-red-500">*</span>
                </Label>
                <Controller
                  name="mobileNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country="gh"
                      inputProps={{ id: "mobileNumber" }}
                      containerClass="!w-full"
                      inputClass="!w-full !h-10 !text-sm !rounded-lg !pl-12 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
                      buttonClass="!h-10 !rounded-l-lg !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
                      placeholder="Phone number"
                    />
                  )}
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
              <div>
                <Label
                  className="text-sm md:text-base"
                  htmlFor="mobileMoneyName"
                >
                  Registered mobile money name
                </Label>
                <Controller
                  name="mobileMoneyName"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full py-[20px] mb-2 md:py-[24px] px-6 rounded-2xl mt-1">
                        <SelectValue placeholder="Select Provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Telecel", "AirtelTigo", "MTN"].map((provider) => (
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
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.mobileMoneyName.message}
                  </p>
                )}
              </div> */}
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
              disabled={isNextButtonDisabled}
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

      // case "address":
      //   return (
      //     <div className="space-y-6 px-4 sm:px-6">
      //       <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900">
      //         Address
      //       </h1>
      //       <div className="space-y-4">
      //         <div>
      //           <Label htmlFor="region">Region</Label>
      //           <Controller
      //             name="region"
      //             control={control}
      //             render={({ field }) => (
      //               <Select value={field.value} onValueChange={field.onChange}>
      //                 <SelectTrigger className="w-full py-5 md:py-6 mt-2 rounded-2xl text-sm md:text-base">
      //                   {" "}
      //                   <SelectValue placeholder="Select Region" />
      //                 </SelectTrigger>
      //                 <SelectContent>
      //                   {regions.map((region) => (
      //                     <SelectItem key={region} value={region}>
      //                       {region}
      //                     </SelectItem>
      //                   ))}
      //                 </SelectContent>
      //               </Select>
      //             )}
      //           />
      //           {errors.region && (
      //             <p className="text-red-500 text-sm" role="alert">
      //               {errors.region.message}
      //             </p>
      //           )}
      //         </div>
      //         <div>
      //           <Label htmlFor="city">City / Town</Label>
      //           <Controller
      //             name="city"
      //             control={control}
      //             render={({ field }) => (
      //               <Select value={field.value} onValueChange={field.onChange}>
      //                 <SelectTrigger className="w-full py-5 md:py-6 mt-2 rounded-2xl text-sm md:text-base">
      //                   <SelectValue placeholder="Select City or Town" />
      //                 </SelectTrigger>
      //                 <SelectContent>
      //                   {ghanaCities.map((city) => (
      //                     <SelectItem key={city} value={city}>
      //                       {city}
      //                     </SelectItem>
      //                   ))}
      //                 </SelectContent>
      //               </Select>
      //             )}
      //           />
      //           {errors.city && (
      //             <p className="text-red-500 text-sm" role="alert">
      //               {errors.city.message}
      //             </p>
      //           )}
      //         </div>

      //         <div>
      //           <Label htmlFor="area">Area</Label>
      //           <Controller
      //             name="area"
      //             control={control}
      //             render={({ field }) => (
      //               <Input
      //                 {...field}
      //                 placeholder="Enter your area"
      //                 className="py-5 md:py-6 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
      //               />
      //             )}
      //           />
      //           {errors.area && (
      //             <p className="text-red-500 text-sm" role="alert">
      //               {errors.area.message}
      //             </p>
      //           )}
      //         </div>
      //         {/* <div>
      //           <Label htmlFor="mobileNumber">
      //             Phone<span className="text-red-500">*</span>
      //           </Label>
      //           <Controller
      //             name="mobileNumber"
      //             control={control}
      //             render={({ field }) => (
      //               <PhoneInput
      //                 {...field}
      //                 country="gh"
      //                 inputProps={{ id: "mobileNumber" }}
      //                 containerClass="!w-full"
      //                 inputClass="!w-full !h-10 sm:!h-12 !text-sm sm:!text-base !rounded-2xl !pl-12 !py-3 sm:!py-4 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
      //                 buttonClass="!h-10 sm:!h-12 !rounded-l-2xl !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
      //                 placeholder="Phone number"
      //               />
      //             )}
      //           />
      //           {errors.mobileNumber && (
      //             <p className="text-red-500 text-sm" role="alert">
      //               {errors.mobileNumber.message}
      //             </p>
      //           )}
      //         </div> */}
      //         {/* <div>
      //           <Label htmlFor="email">Email</Label>
      //           <Controller
      //             name="email"
      //             control={control}
      //             render={({ field }) => (
      //               <Input
      //                 {...field}
      //                 placeholder="Enter your email"
      //                 className="py-5 md:py-6 px-4 sm:px-6 rounded-2xl mt-1 text-sm sm:text-base"
      //               />
      //             )}
      //           />
      //           {errors.email && (
      //             <p className="text-red-500 text-sm" role="alert">
      //               {errors.email.message}
      //             </p>
      //           )}
      //         </div> */}
      //       </div>
      //       <Button
      //         onClick={handleNext}
      //         className="w-full bg-red-800 hover:bg-red-900 text-white py-3 sm:py-4 rounded-2xl text-sm sm:text-base"
      //         disabled={isNextButtonDisabled || isSubmitting}
      //       >
      //         {currentStep === steps.length - 1 ? "Submit" : "Continue"}
      //       </Button>
      //     </div>
      //   );

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
                <Label className="text-sm md:text-base" htmlFor="email">
                  Email
                </Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="email@gmail.com"
                      className="py-5 md:py-6 px-6 rounded-2xl mt-1"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label className="text-sm md:text-base" htmlFor="password">
                  Password
                </Label>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="py-5 md:py-6 px-6 rounded-2xl mt-1"
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
                  <p className="text-red-500 text-sm" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              onClick={handleNext}
              className="w-full bg-red-800 hover:bg-red-900"
              disabled={isNextButtonDisabled || isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
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
