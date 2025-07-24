"use client";

import Button from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";

export default function ReportForm() {
  const [reason, setReason] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedReason = localStorage.getItem("reportReason");
    if (storedReason) {
      const decoded = decodeURIComponent(storedReason);
      setReason(decoded);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description.trim()) {
      alert("Please provide a description.");
      return;
    }

    console.log("Decoded Report Reason:", reason);
    console.log("Report Description:", description);

    // Reset form
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full container rounded-lg bg-white    border-gray-200">
        <div className="text-center text-4xl font-semibold py-4 border-y border-gray-200">
          Report
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 my-4 px-4">
            {reason && (
              <h3 className="text-lg font-semibold ">Reason: {reason}</h3>
            )}
            <div className="grid w-full my-4 gap-1.5">
              <Label className="my-2" htmlFor="description">
                Describe the issue
              </Label>
              <Textarea
                id="description"
                placeholder="Please explain the problem..."
                className="min-h-[150px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="px-4 pb-4 mt-4">
            <Button
              type="submit"
              className="w-full py-4 text-lg bg-v0-dark-red hover:bg-v0-dark-red/90 text-white rounded-lg"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
