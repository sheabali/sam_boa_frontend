"use client";
import { useState, useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { cn } from "@/lib/utils";
import { HiEye, HiEyeOff } from "react-icons/hi"; // React Icons

interface MyFormInputProps {
  type?: string; // Input type, defaults to "text"
  name: string; // Field name for react-hook-form
  label?: string; // Label text
  onValueChange?: (value: string) => void; // Optional callback for value changes
  required?: boolean; // Optional required validation, default is true
  className?: string; // Custom className for input container
  labelClassName?: string; // Custom className for label
  inputClassName?: string; // Custom className for input
}

const MyFormInput = ({
  type = "text",
  name,
  label,
  onValueChange,
  required = false,
  className,
  labelClassName,
  inputClassName,
}: MyFormInputProps) => {
  const { control, getValues } = useFormContext();
  const inputValue = useWatch({ control, name }) ?? ""; // Ensure no undefined value
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(inputValue);
    }
  }, [inputValue, onValueChange]);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={name}
        className={cn("text-sm font-medium", labelClassName)}
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={getValues(name) ?? ""} // Ensures controlled behavior
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            <input
              {...field}
              id={name}
              type={
                type === "password"
                  ? isPasswordVisible
                    ? "text"
                    : "password"
                  : type
              }
              className={cn(
                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2",
                error ? "border-red-500" : "border-gray-300",
                inputClassName
              )}
              value={field.value ?? ""} // Ensures controlled component
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {isPasswordVisible ? (
                  <HiEyeOff size={20} />
                ) : (
                  <HiEye size={20} />
                )}
              </button>
            )}
            <div className="h-4 my-1">
              {error && (
                <small className="text-red-500 text-xs">{error.message}</small>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default MyFormInput;
