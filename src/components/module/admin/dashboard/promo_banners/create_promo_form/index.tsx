/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";

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
    <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto  rounded-lg bg-white shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 border-b">
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto mb-4 sm:mb-0">
            <Button
              variant="outline"
              size="sm"
              className=" border-primary text-primary hover:text-white h-10 w-10 p-0 flex items-center justify-center"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5 " />
            </Button>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Create New Promo
            </h1>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 sm:p-6 space-y-6"
        >
          {/* Upload Promo Banner */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-700">
              Upload Promo Banner
            </Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 sm:p-8 text-center hover:border-gray-400 transition-colors">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Formats: JPG, PNG, JPEG
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Recommended: 3200 x 410px
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 hover:text-gray-800 text-gray-700 px-4 py-2 text-sm"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Choose File
              </Button>
              <span className="text-xs sm:text-sm text-gray-500 truncate max-w-full sm:max-w-md">
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
              placeholder="Enter CTA name"
              className="w-full text-sm py-2"
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
                placeholder="https://example.com"
                className="w-full pr-10 text-sm py-2"
                {...register("pageLink")}
              />
              <Link className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button
              type="submit"
              className="w-full sm:flex-1 bg-red-800 hover:bg-red-900 text-white py-3 rounded-full text-sm font-medium"
            >
              Create New
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full sm:flex-1 border-red-800 text-red-800 hover:bg-red-50 py-3 rounded-full bg-transparent text-sm font-medium"
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
