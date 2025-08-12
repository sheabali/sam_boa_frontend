/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, PlusCircle, Trash2 } from "lucide-react";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

interface PlanFormValues {
  planName: string;
  planType: string;
  facilities: string[]; // array of strings
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

  // Use useFieldArray with <string> type, because 'facilities' is string[]
  const { fields, append, remove } = useFieldArray<any>({
    control,
    name: "facilities",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const onSubmit = async (data: PlanFormValues) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    setSubmitMessage("Changes saved successfully!");
    setIsSubmitting(false);
  };

  const handleCancel = () => {
    reset(defaultValues);
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
        <div className="space-y-2 md:col-span-2">
          <div className="flex items-center justify-between">
            <Label>Facilities</Label>
            <Button
              type="button"
              size="sm"
              className="h-auto px-2 py-1 text-sm text-muted-foreground hover:bg-transparent hover:text-inherit"
              onClick={() => append("")}
            >
              <PlusCircle className="h-4 w-4 mr-1" />
              ADD MORE
            </Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <Controller
                name={`facilities.${index}` as const}
                control={control}
                rules={{ required: "Facility is required" }}
                render={({ field }) => (
                  <div className="relative flex-1">
                    <Input {...field} className="pr-10" />
                    <Pencil className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              />
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="border-red-500 text-red-500 hover:text-black hover:bg-red-500"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
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
          size="sm"
          className="bg-[#8B0000] hover:bg-[#6A0000] text-white px-6 py-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
        <Button
          type="button"
          size="sm"
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
