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

import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function ResetPassword() {
  const form = useForm({});

  // const { setIsLoading } = useUser();
  // const searchParams = useSearchParams();
  // const redirect = searchParams.get("redirectPath");
  // const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Form submitted with data:", data);
    //   const res = await loginUser(data);
    //   setIsLoading(true);
    //   if (res?.success) {
    //     toast.success(res.message);
    //     router.push(redirect || "/");
    //   } else {
    //     toast.error(res.message);
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          <p className="text-sm text-gray-500">Welcome back! Please log in.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="py-6"
                      type="email"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full loader">
              {isSubmitting ? <PageLoading /> : "Submit"}
            </Button>
          </form>
        </Form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don t have an account?{" "}
          <Link
            href="/register"
            className=" text-primary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
