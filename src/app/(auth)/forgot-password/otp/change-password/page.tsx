"use client";

import PageLoading from "@/components/shared/PageLoading";
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
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function ResetPassword() {
  const router = useRouter();

  const form = useForm<FieldValues>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const { isSubmitting } = form.formState;

  const watchNewPassword = form.watch("newPassword");
  const watchConfirmPassword = form.watch("confirmPassword");
  const isPasswordMatch =
    watchNewPassword &&
    watchConfirmPassword &&
    watchNewPassword === watchConfirmPassword;

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleNewPassword = () => setShowNewPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Resetting password with:", data);
    // TODO: Call your API here
    // Simulate success
    setTimeout(() => {
      router.push("/"); // Redirect after success
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/login.svg')",
          }}
        ></div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-10 bg-white">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-[40px] font-bold text-gray-800 mb-2">
              Change Password
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* New Password */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showNewPassword ? "text" : "password"}
                          placeholder="Enter new password"
                          {...field}
                          className="py-6 pr-12 rounded-2xl"
                        />
                        <button
                          type="button"
                          onClick={toggleNewPassword}
                          className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                        >
                          {showNewPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Re-enter new password"
                          {...field}
                          className="py-6 pr-12 rounded-2xl"
                        />
                        <button
                          type="button"
                          onClick={toggleConfirmPassword}
                          className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                        >
                          {showConfirmPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors"
                disabled={isSubmitting || !isPasswordMatch}
              >
                {isSubmitting ? <PageLoading /> : "Continue"}
              </Button>

              {/* Show password mismatch error */}
              {!isPasswordMatch && watchConfirmPassword && (
                <p className="text-sm text-red-500 font-medium text-center -mt-4">
                  Passwords do not match.
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
