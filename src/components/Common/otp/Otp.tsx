"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
// import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import logo from "@/assets/logo.png";
import Link from "next/link";

// Zod validation schema
const otpSchema = z.object({
  otp: z
    .array(
      z
        .string()
        .length(1)
        .regex(/^[A-Za-z0-9]$/, "Must be alphanumeric")
    )
    .length(6),
});

type OtpFormData = z.infer<typeof otpSchema>;

export default function Otp() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));

  const pathname = usePathname();

  const fromPage = pathname.includes("/login") ? "login" : "register";

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: Array(6).fill(""),
    },
  });

  // Handle OTP input change
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // If pasting multiple digits, distribute them across fields
      const digits = value.split("").slice(0, 6 - index);
      const newOtpValues = [...otpValues];

      digits.forEach((digit, i) => {
        if (index + i < 6) {
          newOtpValues[index + i] = digit;
          setValue(`otp.${index + i}`, digit);
        }
      });

      setOtpValues(newOtpValues);

      // Focus on the next empty field or the last field
      const nextIndex = Math.min(index + digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
    } else if (/^[0-9]$/.test(value) || value === "") {
      // Handle single digit input
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
      setValue(`otp.${index}`, value);

      // Auto-focus next input if a digit was entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    // Trigger validation
    trigger("otp");
  };

  // Handle key press for navigation between inputs
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Move to previous input on left arrow
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      // Move to next input on right arrow
      inputRefs.current[index + 1]?.focus();
    }
  };

  const router = useRouter();

  //   const [verifyOtp] = useVerifyOtpMutation();

  const onSubmit = async (data: OtpFormData) => {
    // const email = localStorage.getItem("forgotPasswordEmail");
    // const otpCode = data.otp.join("");

    // if (!email) {
    //   toast.error("Email not found. Please start over.");
    //   router.push("/forgot-password");
    //   return;
    // }

    // try {
    //   await verifyOtp({ email, otp: otpCode }).unwrap();
    //   toast.success("OTP verified successfully!");
    //   localStorage.setItem("otpCode", otpCode);
    //   router.push("/reset-password");
    // } catch {
    //   toast.error("OTP verification failed");
    // }

    toast.success("OTP verified successfully");

    console.log(data)

    if (fromPage === "login") {
      router.push("/");
    } else {
      router.push("/register/account-type/otp/service-provider");
    }
  };

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Modal */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="relative z-10 w-full max-w-md"
        >
          <div className="bg-white p-8 mx-auto">
            {/* Logo */}
            <div className="flex items-center justify-center py-10">
              <Link href="/">
                <Image width={150} height={100} src={logo} alt="logo" />
              </Link>
            </div>

            {/* Title and Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Verify Your Number
              </h1>
              <p className="text-gray-600 text-sm">
                We&apos;ve sent a verification code to the phone number you
                provided. Please enter the code below to confirm your number and
                proceed.
              </p>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* OTP Input Fields */}
              <div>
                <div className="flex justify-between gap-2 sm:gap-3">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="w-full">
                      <input
                        ref={(el) => {
                          inputRefs.current[index] = el; // Assign ref without returning a value
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        value={otpValues[index]}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-full aspect-square text-center text-xl font-medium border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors border-gray-300"
                        aria-label={`Digit ${index + 1} of OTP`}
                      />
                    </div>
                  ))}
                </div>
                {errors.otp && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-600 text-center"
                  >
                    Please enter a valid 6-digit code
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || otpValues.some((v) => !v)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="cursor-pointer w-full bg-primary disabled:bg-primary/60 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Next"
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
