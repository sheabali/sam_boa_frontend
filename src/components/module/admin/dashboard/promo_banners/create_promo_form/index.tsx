/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Camera, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface PromoFormData {
  banner: FileList | null;
  ctaName: string;
  pageLink: string;
}

export default function CreatePromoForm() {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { register, handleSubmit, watch, setValue } = useForm<PromoFormData>({
    defaultValues: {
      banner: null,
      ctaName: "",
      pageLink: "",
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("banner", event.target.files);
    }
  };

  const onSubmit = (data: PromoFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission here
  };

  const handleCancel = () => {
    router.push("/admin/dashboard/promo_banners");
    console.log("Form cancelled");
    // Handle cancel action here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="h-8 w-8 text-base">
              <ArrowLeft className="h-4 w-4 text-black" />
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">
              Create New Promo
            </h1>
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Upload Promo Banner */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">
              Upload Promo Banner
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-6 h-6 text-red-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    Formats: JPG, PNG, JPEG - Optional dimensions
                  </p>
                  <p className="text-sm text-gray-600">3200 x 410px</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                className="bg-gray-200 hover:bg-gray-300 hover:text-white text-gray-700"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Choose File
              </Button>
              <span className="text-sm text-gray-500">
                {selectedFile ? selectedFile.name : "No File Chosen"}
              </span>
              <input
                id="file-upload"
                type="file"
                accept=".jpg,.jpeg,.png"
                className="hidden"
                {...register("banner")}
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-2">
            <Label htmlFor="cta" className="text-sm font-medium text-gray-700">
              CTA
            </Label>
            <Input
              id="cta"
              placeholder="cta name"
              className="w-full"
              {...register("ctaName")}
            />
          </div>

          {/* Attach Page Link */}
          <div className="space-y-2">
            <Label
              htmlFor="pageLink"
              className="text-sm font-medium text-gray-700"
            >
              Attach Page Link
            </Label>
            <div className="relative">
              <Input
                id="pageLink"
                placeholder="url"
                className="w-full pr-10"
                {...register("pageLink")}
              />
              <Link className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              className="flex-1 bg-red-800 hover:bg-red-900 text-white py-3 rounded-full"
            >
              Create New
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-red-800 text-red-800 hover:bg-red-50 py-3 rounded-full bg-transparent"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
