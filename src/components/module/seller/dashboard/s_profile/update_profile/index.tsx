/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";
import { z } from "zod";

import Button from "@/components/ui/button";
import { FormField } from "@/components/ui/core/FormField";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ghanaCities } from "@/constants/cityData";
import { regions } from "@/constants/regions";

// Zod validation schema
const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  region: z.string().min(1, "Region is required"),
  city: z.string().min(1, "City is required"),
  area: z.string().min(1, "Area is required"),
  shopName: z.string().min(1, "Shop Name is required"),
  email: z.string().email("Invalid email address"),
  facebookLink: z.string().url("Invalid URL").optional(),
  twitterLink: z.string().url("Invalid URL").optional(),
  instagramLink: z.string().url("Invalid URL").optional(),
  snapchatLink: z.string().url("Invalid URL").optional(),
  mobileNumber: z.string().min(10, "Invalid phone number"),
  serviceProvider: z.string().min(1, "Service Provider is required"),
  bio: z.string().min(1, "Bio is required"),
  registeredName: z.string().min(1, "Registered Name is required"),
});

type ProfileFormData = z.infer<typeof profileSchema>;

// Fake user data
const fakeUser = {
  name: "Sheib",
  region: "Greater Accra",
  city: "Accra",
  area: "Nima",
  shopName: "Ali's Garage",
  email: "sheib@example.com",
  facebookLink: "https://facebook.com/sheib",
  twitterLink: "https://twitter.com/sheib",
  instagramLink: "https://instagram.com/sheib",
  snapchatLink: "https://snapchat.com/sheib",
  mobileNumber: "233501234567",
  serviceProvider: "Telecel",
  registeredName: "Sheib Ali",
  bio: "Allow 2 days for shipping. No return policy. Message me with any enquiries. Allow 2 days for shipping. No return policy. Message me with any enquiries. Allow 2 days for shipping. No return policy. Message me with any enquiries.",
  profileImage: "https://i.ibb.co/pCzqP9S/icon-7797704-640.png",
};

async function saveProfileSettings(formData: FormData) {
  console.log("Submitting profile with:");
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  return new Promise<{ success: boolean; message: string }>((resolve) =>
    setTimeout(
      () =>
        resolve({ success: true, message: "Profile updated successfully!" }),
      1000
    )
  );
}

export default function SProfileSettings() {
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
      name: "",
      region: "",
      city: "",
      area: "",
      shopName: "",
      email: "",
      facebookLink: "",
      twitterLink: "",
      instagramLink: "",
      snapchatLink: "",
      mobileNumber: "",
      serviceProvider: "",
      registeredName: "",
    },
  });

  useEffect(() => {
    reset({
      name: fakeUser.name,
      region: fakeUser.region,
      city: fakeUser.city,
      area: fakeUser.area,
      shopName: fakeUser.shopName,
      email: fakeUser.email,
      facebookLink: fakeUser.facebookLink,
      twitterLink: fakeUser.twitterLink,
      instagramLink: fakeUser.instagramLink,
      snapchatLink: fakeUser.snapchatLink,
      mobileNumber: fakeUser.mobileNumber,
      serviceProvider: fakeUser.serviceProvider,
      registeredName: fakeUser.registeredName,
    });

    if (fakeUser.profileImage) {
      setImagePreview(fakeUser.profileImage);
    }
  }, [reset]);

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
    // Explicitly log all field data
    console.log("Form Data Submitted:", {
      name: data.name,
      region: data.region,
      city: data.city,
      area: data.area,
      shopName: data.shopName,
      email: data.email,
      facebookLink: data.facebookLink,
      twitterLink: data.twitterLink,
      instagramLink: data.instagramLink,
      snapchatLink: data.snapchatLink,
      mobileNumber: data.mobileNumber,
      serviceProvider: data.serviceProvider,
      bio: data.bio,
      registeredName: data.registeredName,
    });

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== (fakeUser as any)[key]) {
        formData.append(key, value);
      }
    });

    if (selectedImage) {
      formData.append("profileImage", selectedImage);
    }

    const res = await saveProfileSettings(formData);
    toast(res.message);
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
          ) : null}
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
            id="name"
            label="Name"
            placeholder="Your Name"
            control={control}
            errors={errors}
          />
          <div>
            <Label htmlFor="region">Region</Label>
            <Controller
              name="region"
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
            <Label htmlFor="city">City</Label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full py-6 mt-2 rounded-2xl">
                    <SelectValue placeholder="Select City" />
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
          <FormField
            id="area"
            label="Area"
            placeholder="Your area"
            control={control}
            errors={errors}
          />
          <FormField
            id="shopName"
            label="Shop Name"
            placeholder="Your shop name"
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
          <FormField
            id="facebookLink"
            label="Add Social Link (Facebook)"
            placeholder="url"
            control={control}
            errors={errors}
          />
          <FormField
            id="twitterLink"
            label="Add Social Link (Twitter)"
            placeholder="url"
            control={control}
            errors={errors}
          />
          <FormField
            id="instagramLink"
            label="Add Social Link (Instagram)"
            placeholder="url"
            control={control}
            errors={errors}
          />
          <FormField
            id="snapchatLink"
            label="Add Social Link (Snapchat)"
            placeholder="url"
            control={control}
            errors={errors}
          />
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">Mobile Money Number</Label>
            <Controller
              name="mobileNumber"
              control={control}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country={"gh"}
                  inputProps={{ name: "mobileNumber", required: true }}
                  onChange={(value) => field.onChange(value)}
                  containerClass="!w-full"
                  inputClass="!w-full !h-10 py-6 !text-sm !rounded-lg !pl-12 !border-gray-300"
                  buttonClass="!h-12.2 !rounded-l-lg !border-r-0 !border-gray-300"
                />
              )}
            />
            {errors.mobileNumber && (
              <p className="text-sm text-red-500">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="serviceProvider">Service Provider</Label>
            <Controller
              name="serviceProvider"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full py-6 mt-2 rounded-2xl">
                    <SelectValue placeholder="Select Service Provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MTN">MTN</SelectItem>
                    <SelectItem value="AirtelTigo">AirtelTigo</SelectItem>
                    <SelectItem value="Telecel">Telecel</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <FormField
            label="Bio"
            control={control}
            errors={errors}
            placeholder="Write your bio"
            type="textarea"
            id="bio"
          />
          <FormField
            id="registeredName"
            label="Registered Name"
            placeholder="Your registered name"
            control={control}
            errors={errors}
          />
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
            onClick={() => reset(fakeUser)}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
}
