/* eslint-disable @typescript-eslint/no-explicit-any */
import { PencilIcon } from "lucide-react";
import { Controller } from "react-hook-form";
import { Input } from "../input";
import { Label } from "../label";

// Reusable Form Field Component
interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  control: any;
  errors: any;
}

export function FormField({
  label,
  id,
  placeholder,
  type = "text",
  control,
  errors,
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id.toString()}>{label}</Label>
      <div className="relative">
        <Controller
          name={id.toString()}
          control={control}
          render={({ field }) => (
            <Input
              id={id.toString()}
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
