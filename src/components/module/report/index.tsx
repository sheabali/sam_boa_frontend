"use client";

import Button from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ReportPage() {
  const id = 1;

  const reportReasons = [
    "Scammer",
    "Dangerous Item",
    "Violance",
    "I don't like this",
    "Not available to buy",
    "Sexual harassment",
    "Rude behavior",
    "Something else",
  ];

  const handleRedirect = (reason: string) => {
    const encodedReason = encodeURIComponent(reason);
    localStorage.setItem("reportReason", encodedReason);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full container rounded-lg bg-white p-6 md:p-8 lg:p-10">
        <h1 className="mb-6 text-center text-3xl font-bold">Report</h1>
        <hr className="mb-8 border-t border-gray-300" />

        <div className="mb-8 space-y-2">
          <h2 className="text-xl font-semibold">
            Why are you reporting this shop?
          </h2>
          <p className="text-sm text-gray-500">
            Only ThriftHUT admins can view and respond to your report. Your
            identity will be kept confidential.
          </p>
        </div>

        <div className="mb-8 divide-y divide-gray-200 border-y border-gray-200">
          {reportReasons.map((reason, index) => (
            <Link href={`/report/${id}/report_from`} key={index}>
              <div
                key={index}
                onClick={() => handleRedirect(reason)}
                className="group flex cursor-pointer items-center justify-between py-4 transition-colors hover:bg-gray-50"
              >
                <span className="text-base text-gray-800 group-hover:text-gray-900">
                  {reason}
                </span>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600" />
              </div>
            </Link>
          ))}
        </div>

        <Button
          className="w-full rounded-lg bg-[#8B0000] py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#6A0000] focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
