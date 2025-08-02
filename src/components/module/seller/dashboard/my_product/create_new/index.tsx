"use client";

import { sizes } from "@/constants/sizeData";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Camera, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  hashtag: z.string().max(100, "Maximum 100 characters allowed for hashtags"),
  category: z.string().min(1, "Category is required"),
  productType: z.string().min(1, "Product type is required"),
  condition: z.string().min(1, "Condition is required"),
  brand: z.string().min(1, "Brand is required"),
  secondaryBrand: z.string().optional(),
  sizes: z.string().min(1, "Size is required"),
  setPrice: z.string().min(1, "Price is required"),
  setDiscount: z.string().optional(),
});

const colors = [
  { name: "Red", value: "#FF0000" },
  { name: "Maroon", value: "#800000" },
  { name: "Light Red", value: "#FF4040" },
  { name: "Crimson", value: "#DC143C" },
  { name: "Blue", value: "#0000FF" },
  { name: "Navy", value: "#000080" },
  { name: "Sky Blue", value: "#87CEEB" },
  { name: "Teal", value: "#008080" },
  { name: "Green", value: "#008000" },
  { name: "Lime", value: "#32CD32" },
  { name: "Olive", value: "#808000" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Orange", value: "#FFA500" },
  { name: "Purple", value: "#800080" },
  { name: "Magenta", value: "#FF00FF" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Brown", value: "#A52A2A" },
  { name: "Gray", value: "#808080" },
  { name: "Multicolored", value: "multicolored" },
  { name: "Other", value: "other" },
];

const brands = ["Nike", "Adidas", "Puma", "Reebok", "Others"];

type FormData = z.infer<typeof formSchema>;

export default function CreateProductForm() {
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);
  const [images, setImages] = React.useState<(File | null)[]>(
    Array(4).fill(null)
  );
  const [imagePreviews, setImagePreviews] = React.useState<string[]>(
    Array(4).fill("")
  );
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      description: "",
      hashtag: "",
      category: "",
      productType: "",
      condition: "",
      brand: "",
      secondaryBrand: "",
      sizes: "",
      setPrice: "",
      setDiscount: "",
    },
  });

  const handleColorSelect = (color: string) => {
    if (
      !selectedColors.includes(color) &&
      selectedColors.length < colors.length
    ) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleColorRemove = (color: string) => {
    setSelectedColors(selectedColors.filter((c) => c !== color));
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024)
        return toast.error("File size must be less than 5MB");
      if (!file.type.startsWith("image/"))
        return toast.error("Please select an image file");

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          const newImages = [...images];
          const newPreviews = [...imagePreviews];
          newImages[index] = file;
          newPreviews[index] = result;
          setImages(newImages);
          setImagePreviews(newPreviews);
        }
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...imagePreviews];
    newImages[index] = null;
    newPreviews[index] = "";
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const onSubmit = async (data: FormData) => {
    if (images.filter(Boolean).length < 2)
      return toast.error("Upload at least 2 images");
    setIsSubmitting(true);
    try {
      const formData = {
        ...data,
        selectedColors,
        images: images
          .map((img, i) =>
            img ? { name: img.name, data: imagePreviews[i] } : null
          )
          .filter(
            (item): item is { name: string; data: string } => item !== null
          ),
      };
      console.log("Form Data:", JSON.stringify(formData, null, 2));
      toast.success("Product created successfully!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to create product");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSaveAsDraft = () => {
    const currentData = form.getValues();
    const draftData = {
      ...currentData,
      selectedColors,
      images: images
        .map((img, i) =>
          img ? { name: img.name, data: imagePreviews[i] } : null
        )
        .filter(
          (item): item is { name: string; data: string } => item !== null
        ),
    };
    console.log("Draft Data:", JSON.stringify(draftData, null, 2));
    toast.info("Product saved as draft.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-sm">
        <div className="flex items-center p-4 sm:p-6 border-b">
          <Link href="/seller/dashboard/my_products">
            <button className="p-0 mr-3" aria-label="Go back">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </Link>
          <h1 className="text-lg font-semibold">Create New Product</h1>
        </div>
        <div className="p-4 sm:p-6 lg:p-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:gap-8">
              <div className="flex-1 space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    {...form.register("productName")}
                    placeholder="Enter product name"
                    className="w-full p-2 border rounded"
                    aria-required="true"
                  />
                  {form.formState.errors.productName && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.productName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    {...form.register("description")}
                    placeholder="Enter product description"
                    className="w-full p-2 border rounded"
                    aria-required="true"
                  />
                  {form.formState.errors.description && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.description.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Hashtags
                  </label>
                  <input
                    {...form.register("hashtag")}
                    placeholder="Enter hashtags (e.g., #fashion #style)"
                    className="w-full p-2 border rounded"
                  />
                  {form.formState.errors.hashtag && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.hashtag.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    {...form.register("category")}
                    className="w-full p-2 border rounded"
                    aria-label="Select category"
                  >
                    <option value="">Select category</option>

                    <option value="men">Use Men</option>
                    <option value="women">Women</option>
                    <option value="unisex">Unisex</option>
                  </select>
                  {form.formState.errors.category && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.category.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Product Type
                  </label>
                  <select
                    {...form.register("productType")}
                    className="w-full p-2 border rounded"
                    aria-label="Select product type"
                  >
                    <option value="">Select type</option>
                    <option value="footwear">Footwear</option>
                    <option value="clothing">Clothing</option>
                    <option value="accessories">Accessories</option>
                    <option value="bags">Bags</option>
                  </select>
                  {form.formState.errors.productType && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.productType.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex-1 space-y-6 mt-6 lg:mt-0">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Condition
                  </label>
                  <select
                    {...form.register("condition")}
                    className="w-full p-2 border rounded"
                    aria-label="Select condition"
                  >
                    <option value="">Select condition</option>
                    <option value="brand-new">Brand New</option>
                    <option value="used-like-new">Used Like New</option>
                    <option value="used-like-excellent">
                      Used Like Excellent
                    </option>
                    <option value="used-like-good">Used Like Good</option>
                    <option value="medium">Medium</option>
                  </select>
                  {form.formState.errors.condition && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.condition.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Brand
                  </label>
                  <select
                    {...form.register("brand")}
                    className="w-full p-2 border rounded"
                    aria-label="Select brand"
                  >
                    <option value="">Select brand</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.brand && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.brand.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Available Size
                  </label>
                  <select
                    {...form.register("sizes")}
                    className="w-full p-2 border rounded"
                    aria-label="Select size"
                  >
                    <option value="">Select size</option>
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  {form.formState.errors.sizes && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.sizes.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">
                      Available Colors
                    </label>
                    {/* <button
                      type="button"
                      className="text-xs text-gray-500 disabled:opacity-50"
                      disabled={selectedColors.length >= colors.length}
                      onClick={() =>
                        toast.info(
                          selectedColors.length >= colors.length
                            ? "All available colors have been selected."
                            : "Select a color from the available options."
                        )
                      }
                      aria-label={
                        selectedColors.length >= colors.length
                          ? "All colors selected"
                          : "Add more colors"
                      }
                    >
                      ADD MORE
                    </button> */}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedColors.map((color, index) => (
                      <div key={index} className="relative">
                        <div
                          className="w-8 h-8 rounded-full border-2 border-gray-200"
                          style={{ backgroundColor: color }}
                          aria-label={`Selected color ${color}`}
                        />
                        <button
                          type="button"
                          className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-gray-500 hover:bg-gray-600 rounded-full"
                          onClick={() => handleColorRemove(color)}
                          aria-label={`Remove color ${color}`}
                        >
                          <X className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    ))}
                    <div className="flex flex-wrap gap-1">
                      {colors
                        .filter(
                          (color) =>
                            !selectedColors.includes(color.value as string)
                        )

                        .map((color) => (
                          <button
                            key={color.value}
                            className="w-6 h-6 p-0 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.value }}
                            onClick={() => handleColorSelect(color.value)}
                            aria-label={`Select color ${color.name}`}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Set Price
                    </label>
                    <input
                      {...form.register("setPrice")}
                      type="number"
                      placeholder="Enter price (e.g., 99.99)"
                      className="w-full p-2 border rounded"
                      aria-required="true"
                    />
                    {form.formState.errors.setPrice && (
                      <p className="text-red-500 text-xs">
                        {form.formState.errors.setPrice.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Set Discount (Optional)
                    </label>
                    <input
                      {...form.register("setDiscount")}
                      type="number"
                      placeholder="Enter discount (e.g., 10.00)"
                      className="w-full p-2 border rounded"
                    />
                    {form.formState.errors.setDiscount && (
                      <p className="text-red-500 text-xs">
                        {form.formState.errors.setDiscount.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="space-y-2">
                  <label
                    className="text-sm font-medium text-gray-700"
                    htmlFor={`image-upload-${i}`}
                  >
                    {i === 0 ? "Main Image" : `Additional Image ${i}`}
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      className="hidden"
                      id={`image-upload-${i}`}
                      onChange={(e) => handleImageUpload(e, i)}
                      aria-label={`Upload image ${i + 1}`}
                    />
                    <div
                      className="custom-card p-4 flex flex-col items-center justify-center h-32 sm:h-40 text-gray-400 cursor-pointer"
                      onClick={() =>
                        document.getElementById(`image-upload-${i}`)?.click()
                      }
                      role="button"
                      aria-label={`Upload image ${i + 1}`}
                    >
                      {imagePreviews[i] ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={imagePreviews[i]}
                            alt={`Preview ${i + 1}`}
                            height={500}
                            width={500}
                            className="w-[70%] h-[100%] object-contain rounded"
                          />
                          <button
                            type="button"
                            className="absolute top-1 right-1 w-6 h-6 p-0 bg-black/50 hover:bg-black/70 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRemoveImage(i);
                            }}
                            aria-label={`Remove image ${i + 1}`}
                          >
                            <X className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Camera className="w-8 h-8 mb-1" />
                          <span className="text-xs">Choose File</span>
                        </>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Formats: JPG, PNG, JPEG - Max 5MB
                  </p>
                  {!images[i] && (
                    <p className="text-xs text-gray-400">No File Chosen</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <button
                type="submit"
                className="flex-1 bg-primary rounded-full text-white p-2  disabled:opacity-50"
                disabled={isSubmitting || form.formState.isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create New"}
              </button>
              <button
                type="button"
                className="flex-1 bg-transparent rounded-full border border-gray-300 p-2  disabled:opacity-50"
                onClick={onSaveAsDraft}
                disabled={isSubmitting || form.formState.isSubmitting}
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
