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
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 digits.",
    })
    .refine((val) => /^\d{10,15}$/.test(val.replace(/\D/g, "")), {
      message: "Phone number must be valid.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      email: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Submit logic here
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white">
      <h1 className="text-2xl font-semibold text-center mb-8 text-gray-900">
        Submit a request
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    {...field}
                    className="border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Field */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Phone<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    country={"us"}
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    inputProps={{
                      name: "phone",
                      required: true,
                      id: "phoneNumber",
                    }}
                    containerClass="!w-full"
                    inputClass="!w-full !h-10 !text-sm !rounded-lg !pl-12 !border-gray-300 hover:!border-primary focus:!border-primary focus:!ring-2 focus:!ring-primary !outline-none"
                    buttonClass="!h-10 !rounded-l-lg !border-r-0 !border-gray-300 hover:!border-primary focus:!border-primary"
                    placeholder="Phone number"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="email@gmail.com"
                    type="email"
                    {...field}
                    className="border-gray-300 focus:border-gray-400 focus:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Describe
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write here..."
                    {...field}
                    className="border-gray-300 focus:border-gray-400 focus:ring-0 min-h-[80px] resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-red-800 hover:bg-red-900 text-white font-medium py-3 rounded-full"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
