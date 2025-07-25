"use client";

import { Check } from "lucide-react";
import Image from "next/image";
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
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleChoosePlan = (planLabel: string) => {
    setSelectedPlan(planLabel);
    console.log("Selected plan:", planLabel);
    // optionally navigate or show modal, etc.
  };

  return (
    <section className="container py-16 bg-white mt-16 mb-[100px] text-black">
      <h2 className="text-5xl font-semibold text-center mb-10">Subscription</h2>
      <div className="flex flex-col lg:flex-row items-center mb-18 justify-center gap-8 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="relative w-full bg-white rounded-3xl shadow-lg p-6"
          >
            {/* Coin Icon */}
            <div className="flex justify-start mb-4">
              <Image
                src="/88f2179796f9eff0501711aba5c8670ecfd28daf.png"
                alt="Coin"
                className="bg-[#edfaff] p-2 rounded-full"
                width={50}
                height={50}
              />
            </div>

            {/* Price Badge */}
            <div className="absolute top-20 right-20  -translate-y-1/2 translate-x-1/2">
              <div
                className={`text-white text-xs font-bold py-6 px-6 rounded-bl-full ${plan.color}`}
              >
                {plan.price}
                <span className="text-[10px]">/month</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">{plan.badge}</p>
            <h3 className="text-2xl font-semibold my-2">{plan.label}</h3>

            <ul className="text-left space-y-3 mt-6">
              {plan.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-[#7D0021]" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleChoosePlan(plan.label)}
              className={`mt-6 w-full py-3 rounded-xl text-white font-medium ${plan.color} hover:opacity-90`}
            >
              Choose this plan
            </button>

            {selectedPlan === plan.label && (
              <p className="mt-2 text-sm text-green-600 text-center">
                You selected this plan
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
