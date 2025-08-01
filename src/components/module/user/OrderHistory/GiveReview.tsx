"use client";

import Button from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useState } from "react";

export default function GiveReviewPage() {
  const [rating, setRating] = useState(0);
  const handleSubmit = () => {
    console.log("Rating:", rating);
  };

  return (
    <div className="container max-w-2xl  px-4 py-8 md:px-6 lg:px-8">
      <h1 className="text-xl md:text-3xl font-bold mb-6">Give a Review</h1>

      <div className="mb-8 my-auto">
        <p className="text-base lg:text-lg font-semibold">
          Product Name : <span className="font-normal">Example Product A</span>
        </p>
        <p className="text-base md:text-lg font-semibold">
          Seller Name : <span className="font-normal">Example Seller B</span>
        </p>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-8 h-8 cursor-pointer ${
              rating >= star
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <p className="text-sm text-gray-600 mb-6">
        Tap on a star to rate your experience with this seller.
      </p>

      <div className="mb-6">
        <label htmlFor="review" className="block text-lg font-semibold mb-2">
          Review
        </label>
        <Textarea
          id="review"
          placeholder="Write here"
          className="min-h-[120px]"
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="w-full py-2  h-9 md:h-12 bg-primary text-white hover:bg-primary/90"
      >
        Submit
      </Button>
    </div>
  );
}
