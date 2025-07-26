"use client";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface PlanFormValues {
  planName: string;
  planType: string;
  facilities: string;
  price: string;
  duration: string;
}

interface PlanFormProps {
  defaultValues: PlanFormValues;
}

export function PlanForm({ defaultValues }: PlanFormProps) {
  const { handleSubmit, control, reset } = useForm<PlanFormValues>({
    defaultValues,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const onSubmit = async (data: PlanFormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setSubmitMessage("Changes saved successfully!");
    setIsSubmitting(false);
    // Optionally reset form to new default values or keep current
    // reset(data);
  };

  const handleCancel = () => {
    reset(defaultValues); // Reset form to its initial default values
    setSubmitMessage(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Plan Name */}
        <div className="space-y-2">
          <Label htmlFor="plan-name">Plan Name</Label>
          <Controller
            name="planName"
            control={control}
            rules={{ required: "Plan Name is required" }}
            render={({ field }) => (
              <div className="relative">
                <Input id="plan-name" {...field} className="pr-10" />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            )}
          />
        </div>

        {/* Plan Type */}
        <div className="space-y-2">
          <Label htmlFor="plan-type">Plan Type</Label>
          <Controller
            name="planType"
            control={control}
            rules={{ required: "Plan Type is required" }}
            render={({ field }) => (
              <div className="relative">
                <Input id="plan-type" {...field} className="pr-10" />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            )}
          />
        </div>

        {/* Facilities */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="facilities">Facilities</Label>
            <Button className="h-auto px-2 py-1 text-sm text-muted-foreground hover:bg-transparent hover:text-foreground">
              <PlusCircle className="h-4 w-4 mr-1" />
              {"ADD MORE"}
            </Button>
          </div>
          <Controller
            name="facilities"
            control={control}
            rules={{ required: "Facilities are required" }}
            render={({ field }) => (
              <div className="relative">
                <Input id="facilities" {...field} className="pr-10" />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            )}
          />
        </div>

        {/* Price */}
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <div className="relative">
                <Input id="price" {...field} className="pr-10" />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            )}
          />
        </div>

        {/* Duration */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="duration">Duration</Label>
          <Controller
            name="duration"
            control={control}
            rules={{ required: "Duration is required" }}
            render={({ field }) => (
              <div className="relative">
                <Input id="duration" {...field} className="pr-10" />
                <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            )}
          />
        </div>
      </div>

      {submitMessage && (
        <div className="mt-4 text-sm text-green-600" aria-live="polite">
          {submitMessage}
        </div>
      )}

      <div className="flex justify-start gap-4 mt-8">
        <Button
          type="submit"
          className="bg-[#8B0000] hover:bg-[#6A0000] text-white px-6 py-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-[#8B0000] text-[#8B0000] hover:bg-[#FFF5F5] hover:text-[#8B0000] px-6 py-2 rounded-md bg-transparent"
          onClick={handleCancel}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
