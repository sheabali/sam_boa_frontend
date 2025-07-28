"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const plans = [
  {
    label: "Basic",
    price: "₵0",
    badge: "FREE PLAN",
    items: ["2 items post", "2 items post", "2 items post", "2 items post"],
    color: "bg-[#7D0021]",
  },
  {
    label: "Standard",
    price: "₵20.99",
    badge: "PREMIUM",
    items: ["10 items post", "10 items post", "10 items post", "10 items post"],
    color: "bg-[#F39800]",
  },
  {
    label: "Unlimited",
    price: "₵69",
    badge: "PREMIUM",
    items: [
      "Unlimited items post",
      "Unlimited items post",
      "Unlimited items post",
      "Unlimited items post",
    ],
    color: "bg-[#7D0021]",
  },
];

export default function SubscriptionPlans() {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleChoosePlan = (planLabel: string) => {
    setSelectedPlan(planLabel);
    console.log("Selected plan:", planLabel);
    router.push("/seller/dashboard/my_products");
    // Optionally navigate or show modal, etc.
  };

  return (
    <section className="container py-8 sm:py-12 md:py-16 bg-white mt-8 sm:mt-12 md:mt-16 mb-12 sm:mb-16 md:mb-[100px] text-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8 md:mb-10">
        Subscription
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative w-full bg-white rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col"
          >
            {/* Coin Icon */}
            <div className="flex justify-start mb-4">
              <Image
                src="/88f2179796f9eff0501711aba5c8670ecfd28daf.png"
                alt="Coin"
                className="bg-[#edfaff] p-2 rounded-full"
                width={40}
                height={40}
                sizes="(max-width: 640px) 40px, 50px"
              />
            </div>

            {/* Price Badge */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
              <div
                className={`text-white text-xs sm:text-sm font-bold py-4 sm:py-6 px-4 sm:px-6 rounded-bl-full ${plan.color}`}
              >
                {plan.price}
                <span className="text-[8px] sm:text-[10px]">/month</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 font-medium">
              {plan.badge}
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold my-2">
              {plan.label}
            </h3>

            <ul className="text-left space-y-2 sm:space-y-3 mt-4 sm:mt-6 flex-grow">
              {plan.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm sm:text-base"
                >
                  <Check className="text-[#7D0021]" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleChoosePlan(plan.label)}
              className={`mt-4 sm:mt-6 w-full py-2 sm:py-3 rounded-xl text-white font-medium ${plan.color} hover:opacity-90 text-sm sm:text-base`}
            >
              Choose this plan
            </button>

            {selectedPlan === plan.label && (
              <p className="mt-2 text-xs sm:text-sm text-green-600 text-center">
                You selected this plan
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
