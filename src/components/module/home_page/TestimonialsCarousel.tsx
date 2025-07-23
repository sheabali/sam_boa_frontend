"use client";

import Button from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "I sold my first vintage jacket within hours. The bidding experience was fun and professional—love how Vine lets me control the price!",
    name: "Luka Marinović",
    title: "Electrical Engineering Student",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 2,
    quote:
      "As a buyer, I love placing bids and finding unique pieces I can't get anywhere else. The chat feature made my last deal super smooth!",
    name: "Marko Ivanić",
    title: "Service Founder",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 3,
    quote:
      "I run a small fashion store and Vine became my digital storefront. The promo tools and social sharing saved me hours every week.",
    name: "Ana Petrović",
    title: "Junior Developer",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 4,
    quote:
      "The community here is amazing! I've made connections with other fashion enthusiasts and discovered so many unique pieces.",
    name: "Stefan Jovanović",
    title: "Fashion Blogger",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
  {
    id: 5,
    quote:
      "Vine transformed how I buy and sell vintage items. The secure payment system gives me peace of mind with every transaction.",
    name: "Milica Stojanović",
    title: "Vintage Collector",
    avatar: "https://i.ibb.co/zhn1crwC/Rectangle-23853.png",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= testimonials.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, testimonials.length - itemsPerPage)
        : Math.max(0, prevIndex - itemsPerPage)
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          What Our Community Says
        </h2>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-yellow-500 fill-current" />
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>

                  {/* Profile Section */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} profile picture`}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-2">
            <Button
              variant="outline"
              size="md"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full w-10 h-10 border-gray-300  disabled:opacity-50 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 text-black" />
              {/* <span className="sr-only">Previous testimonials</span> */}
            </Button>

            <Button
              variant="outline"
              size="md"
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= testimonials.length}
              className="rounded-full w-10 h-10 border-gray-300 disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4 text-black" />
              {/* <span className="sr-only">Next testimonials</span>     */}
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({
              length: Math.ceil(testimonials.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? "bg-gray-900"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
