/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const MyFormWrapper = ({
  onSubmit,
  className,
  children,
  defaultValues,
  resolver,
}: {
  onSubmit: (data: any) => void;
  className?: string;
  children: React.ReactNode;
  defaultValues?: any;
  resolver?: import("react-hook-form").Resolver<any, any>;
}) => {
  const methods = useForm({
    defaultValues,
    resolver,
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const submit = (data: any) => {
    onSubmit(data);
    // reset();
  };

  return (
    <FormProvider {...methods}>
      <form className={cn("", className)} onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default MyFormWrapper;
