/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PencilIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Schema
const profileSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  region: z.string().min(1, "Region is required"),
  city: z.string().min(1, "City is required"),
  area: z.string().min(1, "Area is required"),
  mobileMoneyName: z.string().min(1, "Mobile Money Name is required"),
  email: z.string().email("Invalid email address"),
  mobileNumber: z.string().min(10, "Invalid phone number"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

interface FormFieldProps {
  label: string;
  id: keyof ProfileFormData;
  placeholder: string;
  type?: string;
  control: any;
  errors: any;
  children?: React.ReactNode;
}

function FormField({
  label,
  id,
  placeholder,
  type = "text",
  control,
  errors,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {children}
        <Controller
          name={id}
          control={control}
          render={({ field }) => (
            <Input
              id={id}
              placeholder={placeholder}
              type={type}
              className="py-[24px] px-6 rounded-2xl mt-1"
              {...field}
            />
          )}
        />
        <PencilIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
      {errors[id] && (
        <p className="text-sm text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  );
}

// Simulated API call
async function saveProfileSettings(formData: FormData) {
  console.log("Submitting profile with:");
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  return new Promise<{ success: boolean; message: string }>((resolve) =>
    setTimeout(
      () => resolve({ success: true, message: "Profile updated!" }),
      1000
    )
  );
}

export default function ProfileSettings() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      region: "",
      city: "",
      area: "",
      mobileMoneyName: "",
      email: "",
      mobileNumber: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please upload a valid image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image must be less than 5MB");
      return;
    }

    setSelectedImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data: ProfileFormData) => {
    console.log("Form submitted with data:", data);
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (selectedImage) {
      formData.append("profileImage", selectedImage);
    }

    const res = await saveProfileSettings(formData);
    toast(res.message);

    if (res.success) {
      // Optionally reset or update UI
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

      {/* Image Upload */}
      <div className="space-y-6 text-center mb-10">
        <h2 className="text-[26px] font-semibold text-gray-900">
          Upload a Profile Picture
        </h2>
        <div className="w-full border-2 border-dashed border-gray-300 rounded-xl py-12 px-4 flex flex-col items-center bg-gray-100">
          {imagePreview ? (
            <Image
              src={imagePreview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-full mb-4"
              width={160}
              height={160}
            />
          ) : (
            <>
              <Image
                src="https://i.ibb.co/pCzqP9S/icon-7797704-640.png"
                alt="Default Preview"
                className="w-40 h-40 object-cover rounded-full mb-4"
                width={160}
                height={160}
              />
              <p className="text-gray-600 mb-2">Upload a Profile Picture</p>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            id="upload"
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="upload">
            <div className="bg-red-800 text-white px-6 py-2 rounded-full inline-block cursor-pointer hover:bg-red-900">
              Upload file
            </div>
          </label>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FormField
            id="firstName"
            label="First Name"
            placeholder="First name"
            control={control}
            errors={errors}
          />
          <FormField
            id="lastName"
            label="Last Name"
            placeholder="Last name"
            control={control}
            errors={errors}
          />
          <FormField
            id="region"
            label="Region"
            placeholder="Your region"
            control={control}
            errors={errors}
          />
          <FormField
            id="city"
            label="City"
            placeholder="Your city"
            control={control}
            errors={errors}
          />
          <FormField
            id="area"
            label="Area"
            placeholder="Your area"
            control={control}
            errors={errors}
          />
          <FormField
            id="mobileMoneyName"
            label="Registered Mobile Money Name"
            placeholder="Telecel"
            control={control}
            errors={errors}
          />
          <FormField
            id="email"
            label="Email"
            placeholder="email@gmail.com"
            type="email"
            control={control}
            errors={errors}
          />

          {/* Phone Input */}
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Controller
              name="mobileNumber"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={"gh"}
                  inputProps={{
                    name: "mobileNumber",
                    required: true,
                  }}
                  onChange={(value) => field.onChange(value)}
                  containerClass="!w-full"
                  inputClass="!w-full !h-10 py-6  !text-sm !rounded-lg !pl-12 !border-gray-300"
                  buttonClass="!h-12.2  !rounded-l-lg  !border-r-0 !border-gray-300"
                />
              )}
            />
            {errors.mobileNumber && (
              <p className="text-sm text-red-500">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 justify-start">
          <Button
            type="submit"
            className="bg-[#8B0000] hover:bg-[#6A0000] text-white px-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            type="button"
            className="text-muted-foreground px-8"
            onClick={() => reset()}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
