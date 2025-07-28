"use client";

import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  availableSize: z.string().min(1, "Size is required"),
  setPrice: z.string().min(1, "Price is required"),
  setDiscount: z.string().optional(),
  sizes: z.string().min(1, "Sizes is required"),
});

type FormData = z.infer<typeof formSchema>;

const colors = [
  { name: "Red", value: "#ef4444" },
  { name: "Blue", value: "#3b82f6" },
  { name: "Green", value: "#10b981" },
  { name: "Yellow", value: "#f59e0b" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Pink", value: "#ec4899" },
  { name: "Black", value: "#000000" },
  { name: "White", value: "#ffffff" },
];

// Default fake data for the form
const defaultFormData: FormData = {
  productName: "Classic Sneakers",
  description: "Comfortable and stylish sneakers perfect for everyday wear.",
  hashtag: "#sneakers #fashion #casual",
  category: "both",
  productType: "footwear",
  condition: "brand-new",
  brand: "Nike",
  secondaryBrand: "",
  availableSize: "US 9",
  setPrice: "99.99",
  setDiscount: "10.00",
  sizes: "US 9",
};

export default function UpdateProductForm() {
  const [selectedColors, setSelectedColors] = useState<string[]>([
    "#ef4444",
    "#3b82f6",
  ]);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [additionalImage, setAdditionalImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>("");
  const [additionalImagePreview, setAdditionalImagePreview] =
    useState<string>("");

  // Initialize form with default fake data
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultFormData,
  });

  // Cleanup image previews
  useEffect(() => {
    return () => {
      if (mainImagePreview) URL.revokeObjectURL(mainImagePreview);
      if (additionalImagePreview) URL.revokeObjectURL(additionalImagePreview);
    };
  }, [mainImagePreview, additionalImagePreview]);

  const handleColorSelect = (color: string) => {
    if (!selectedColors.includes(color)) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleColorRemove = (color: string) => {
    setSelectedColors(selectedColors.filter((c) => c !== color));
  };

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "main" | "additional"
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
        if (type === "main") {
          setMainImage(file);
          setMainImagePreview(result);
        } else {
          setAdditionalImage(file);
          setAdditionalImagePreview(result);
        }
      };
      reader.onerror = () => {
        toast.error("Error reading file");
      };
      reader.readAsDataURL(file);
    }

    event.target.value = "";
  };

  const onSubmit = async (data: FormData) => {
    try {
      const formData = {
        ...data,
        selectedColors,
        mainImage,
        additionalImage,
      };
      console.log("Form submitted:", formData);
      toast.success("Product created successfully!");
    } catch (error) {
      toast.error("Failed to create product. Please try again.");
      console.error("Submission error:", error);
    }
  };

  const onSaveAsDraft = () => {
    const currentData = form.getValues();
    console.log("Saved as draft:", {
      ...currentData,
      selectedColors,
      mainImage,
      additionalImage,
    });
    toast.info("Product saved as draft.");
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
          <h1 className="text-lg font-semibold">Edit Products</h1>
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
                            <SelectItem value="men">Mens</SelectItem>
                            <SelectItem value="women">Womens</SelectItem>
                            <SelectItem value="both">Both</SelectItem>
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
                    name="sizes"
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
                      <Button
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
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedColors.map((color, index) => (
                        <div key={index} className="relative">
                          <div
                            className="w-8 h-8 rounded-full border-2 border-gray-200"
                            style={{ backgroundColor: color }}
                            aria-label={`Selected color ${color}`}
                          />
                          {selectedColors.length > 0 && (
                            <Button
                              type="button"
                              size="sm"
                              className="absolute -top-1 -right-1 w-4 h-4 p-0 bg-gray-500 hover:bg-gray-600 rounded-full"
                              onClick={() => handleColorRemove(color)}
                              aria-label={`Remove color ${color}`}
                            >
                              <X className="w-2 h-2 text-white" />
                            </Button>
                          )}
                        </div>
                      ))}
                      <div className="flex flex-wrap gap-1">
                        {colors
                          .filter(
                            (color) => !selectedColors.includes(color.value)
                          )
                          .slice(0, 5)
                          .map((color) => (
                            <Button
                              key={color.value}
                              className="w-6 h-6 p-0 bg-none rounded-full border border-gray-300"
                              onClick={() => handleColorSelect(color.value)}
                              aria-label={`Select color ${color.name}`}
                            >
                              <div style={{ backgroundColor: color.value }} />
                            </Button>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <Label
                    className="text-sm font-medium text-gray-700"
                    htmlFor="main-image-upload"
                  >
                    Upload Product Picture (Main)
                  </Label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      className="hidden"
                      id="main-image-upload"
                      onChange={(e) => handleImageUpload(e, "main")}
                      aria-label="Upload main product image"
                    />
                    <Card
                      className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
                      onClick={() =>
                        document.getElementById("main-image-upload")?.click()
                      }
                      role="button"
                      aria-label="Upload main product image"
                    >
                      <CardContent className="p-4">
                        {mainImagePreview ? (
                          <div className="relative">
                            <Image
                              src={mainImagePreview}
                              alt="Main product preview"
                              className="w-full h-32 sm:h-40 object-cover rounded"
                              width={200}
                              height={200}
                            />
                            <Button
                              type="button"
                              size="sm"
                              className="absolute top-1 right-1 w-6 h-6 p-0 bg-black/50 hover:bg-black/70 rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                setMainImage(null);
                                setMainImagePreview("");
                              }}
                              aria-label="Remove main image"
                            >
                              <X className="w-3 h-3 text-white" />
                            </Button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-32 sm:h-40 text-gray-400">
                            <Camera className="w-8 h-8 mb-1" />
                            <span className="text-xs">Choose File</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-xs text-gray-500">
                    Formats: JPG, PNG, JPEG - Max 5MB
                  </p>
                  {!mainImage && (
                    <p className="text-xs text-gray-400">No File Chosen</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label
                      className="text-sm font-medium text-gray-700"
                      htmlFor="additional-image-upload"
                    >
                      Additional Picture
                    </Label>
                    <Button
                      type="button"
                      size="sm"
                      className="text-xs text-gray-500"
                      disabled
                    >
                      NO MORE
                    </Button>
                  </div>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      className="hidden"
                      id="additional-image-upload"
                      onChange={(e) => handleImageUpload(e, "additional")}
                      aria-label="Upload additional product image"
                    />
                    <Card
                      className="border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer"
                      onClick={() =>
                        document
                          .getElementById("additional-image-upload")
                          ?.click()
                      }
                      role="button"
                      aria-label="Upload additional product image"
                    >
                      <CardContent className="p-4">
                        {additionalImagePreview ? (
                          <div className="relative">
                            <Image
                              src={additionalImagePreview}
                              alt="Additional product preview"
                              className="w-full h-32 sm:h-40 object-cover rounded"
                              width={200}
                              height={200}
                            />
                            <Button
                              type="button"
                              size="sm"
                              className="absolute top-1 right-1 w-6 h-6 p-0 bg-black/50 hover:bg-black/70 rounded-full"
                              onClick={(e) => {
                                e.stopPropagation();
                                setAdditionalImage(null);
                                setAdditionalImagePreview("");
                              }}
                              aria-label="Remove additional image"
                            >
                              <X className="w-3 h-3 text-white" />
                            </Button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-32 sm:h-40 text-gray-400">
                            <Camera className="w-8 h-8 mb-1" />
                            <span className="text-xs">Choose File</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-xs text-gray-500">
                    Formats: JPG, PNG, JPEG - Max 5MB
                  </p>
                  {!additionalImage && (
                    <p className="text-xs text-gray-400">No File Chosen</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6">
                <Button
                  type="submit"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Creating..." : "Create New"}
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
