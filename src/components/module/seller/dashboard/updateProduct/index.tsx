"use client";

import Button from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { brands } from "@/constants/brandsData";
import { sizes } from "@/constants/sizeData";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Camera, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Define form schema
const formSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  hashtag: z.string().max(100, "Maximum 100 characters allowed for hashtags"),
  category: z.string().min(1, "Category is required"),
  productType: z.string().min(1, "Product type is required"),
  condition: z.string().min(1, "Condition is required"),
  brand: z.string().min(1, "Brand is required"),
  secondaryBrand: z.string().optional(),
  size: z.string().min(1, "Size is required"),
  setPrice: z.string().min(1, "Price is required"),
  setDiscount: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

// Updated color palette based on the Figma "Color Dropdown" image
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
// Interface for existing product data
interface ProductData extends FormData {
  id: string;
  selectedColors?: string[];
  mainImageUrl?: string;
  additionalImageUrls?: string[];
}

interface UpdateProductFormProps {
  product: ProductData;
}

export default function UpdateProductForm({ product }: UpdateProductFormProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>(
    product.selectedColors || []
  );
  const [images, setImages] = useState<(File | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [imagePreviews, setImagePreviews] = useState<string[]>(() => {
    const previews = ["", "", "", ""];
    if (product.mainImageUrl) previews[0] = product.mainImageUrl;
    if (product.additionalImageUrls) {
      product.additionalImageUrls.slice(0, 3).forEach((url, i) => {
        if (i + 1 < previews.length) previews[i + 1] = url;
      });
    }
    return previews;
  });

  // Initialize form with existing product data
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: product.productName || "",
      description: product.description || "",
      hashtag: product.hashtag || "",
      category: product.category || "",
      productType: product.productType || "",
      condition: product.condition || "",
      brand: product.brand || "",
      secondaryBrand: product.secondaryBrand || "",
      size: product.size || "",
      setPrice: product.setPrice || "",
      setDiscount: product.setDiscount || "",
    },
  });

  // Cleanup image previews for new uploads
  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview, index) => {
        if (preview && images[index]) URL.revokeObjectURL(preview);
      });
    };
  }, [imagePreviews, images]);

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
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file (JPG, PNG, JPEG)");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        const newImages = [...images];
        const newPreviews = [...imagePreviews];
        newImages[index] = file;
        newPreviews[index] = result;
        setImages(newImages);
        setImagePreviews(newPreviews);
      };
      reader.onerror = () => toast.error("Error reading file");
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
    try {
      const formData = {
        id: product.id,
        ...data,
        selectedColors,
        mainImage: images[0] || undefined,
        additionalImages:
          images.slice(1).filter((img) => img !== null) || undefined,
      };
      if (images.filter((img) => img !== null).length < 2) {
        toast.error("Please upload at least 2 images.");
        return;
      }
      console.log("Form updated:", formData);
      toast.success("Product updated successfully!");
      // TODO: Implement API call to update product
      // await updateProductAPI(formData);
    } catch (error) {
      toast.error("Failed to update product. Please try again.");
      console.error("Submission error:", error);
    }
  };

  const onSaveAsDraft = () => {
    const currentData = form.getValues();
    console.log("Saved as draft:", {
      id: product.id,
      ...currentData,
      selectedColors,
      mainImage: images[0] || undefined,
      additionalImages:
        images.slice(1).filter((img) => img !== null) || undefined,
    });
    toast.info("Product draft updated.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto bg-white rounded-lg shadow-sm">
        <div className="flex items-center p-4 sm:p-6 border-b">
          <Button size="sm" className="p-0 mr-3" aria-label="Go back">
            <Link href="/seller/dashboard/my_products">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-lg font-semibold">Update Product</h1>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:gap-8">
                <div className="flex-1 space-y-6">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Product Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter product name"
                            {...field}
                            className="w-full"
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Description
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter product description"
                            {...field}
                            className="w-full py-2"
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hashtag"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Hashtags
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter hashtags (e.g., #fashion #style)"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Category
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full"
                              aria-label="Select category"
                            >
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="men">Men</SelectItem>
                            <SelectItem value="women">Women</SelectItem>
                            <SelectItem value="unisex">Unisex</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="productType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Product Type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full"
                              aria-label="Select product type"
                            >
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="footwear">Footwear</SelectItem>
                            <SelectItem value="clothing">Clothing</SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                            <SelectItem value="bags">Bags</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex-1 space-y-6 mt-6 lg:mt-0">
                  <FormField
                    control={form.control}
                    name="condition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Condition
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full"
                              aria-label="Select condition"
                            >
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="brand-new">Brand New</SelectItem>
                            <SelectItem value="used-like-new">
                              Used Like New
                            </SelectItem>
                            <SelectItem value="used-like-excellent">
                              Used Like Excellent
                            </SelectItem>
                            <SelectItem value="good">Used Like Good</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Brand
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full"
                              aria-label="Select brand"
                            >
                              <SelectValue placeholder="Select brand" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {brands.map((brand) => (
                              <SelectItem key={brand} value={brand}>
                                {brand}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">
                          Available Size
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger
                              className="w-full"
                              aria-label="Select size"
                            >
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {sizes.map((size) => (
                              <SelectItem key={size} value={size}>
                                {size}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-gray-700">
                        Available Colors
                      </Label>
                      {/* <Button
                        type="button"
                        size="sm"
                        className="text-xs text-gray-500"
                        disabled={selectedColors.length >= colors.length}
                        onClick={() => {
                          toast.info(
                            "Select a color from the available options."
                          );
                        }}
                      >
                        ADD MORE
                      </Button> */}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedColors.map((color, index) => (
                        <div key={index} className="relative">
                          <div
                            className="w-8 h-8 rounded border-2 border-gray-200"
                            style={{ backgroundColor: color }}
                            aria-label={`Selected color ${color}`}
                          />
                          {selectedColors.length > 0 && (
                            <button
                              type="button"
                              // size="sm"
                              className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-gray-500 hover:bg-gray-600 rounded-full"
                              onClick={() => handleColorRemove(color)}
                              aria-label={`Remove color ${color}`}
                            >
                              <X className="w-4 h-4 text-white" />
                            </button>
                          )}
                        </div>
                      ))}
                      <div className="grid grid-cols-4 gap-1">
                        {colors
                          .filter(
                            (color) => !selectedColors.includes(color.value)
                          )
                          .map((color) => (
                            <button
                              key={color.value}
                              className="w-8 h-8 p-0 rounded border border-gray-300"
                              onClick={() => handleColorSelect(color.value)}
                              aria-label={`Select color ${color.name}`}
                            >
                              <div
                                className="w-full h-full rounded"
                                style={{ backgroundColor: color.value }}
                              />
                            </button>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="setPrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Set Price
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter price (e.g., 99.99)"
                              {...field}
                              className="w-full"
                              aria-required="true"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="setDiscount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-700">
                            Set Discount (Optional)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Enter discount (e.g., 10.00)"
                              {...field}
                              className="w-full"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Updating..."
                    : "Update Product"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={onSaveAsDraft}
                  disabled={form.formState.isSubmitting}
                >
                  Save as Draft
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
