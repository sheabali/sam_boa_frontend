import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/ui/button";

import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      id: "item-1",
      question: "How do I start selling on Vine?",
      answer:
        "Simply sign up, choose a seller plan (including the Free plan), upload your product images, set your price, and go live. You can accept bids or allow instant buy depending on your listing style.",
    },
    {
      id: "item-2",
      question: "What's the difference between the Free and Paid plans?",
      answer:
        "The Free plan allows basic selling features, while Paid plans offer additional benefits like priority listing, advanced analytics, and lower transaction fees.",
    },
    {
      id: "item-3",
      question: "How do payments work on Vine?",
      answer:
        "Payments are processed securely through our platform. Sellers receive payment after successful delivery confirmation from buyers.",
    },
    {
      id: "item-4",
      question: "Can I update or delete a product after listing it?",
      answer:
        "Yes, you can edit your product details, update images, or remove listings at any time through your seller dashboard.",
    },
    {
      id: "item-5",
      question: "How do I place a bid?",
      answer:
        "Navigate to the product page and click the 'Place Bid' button. Enter your bid amount and submit. You'll be notified if your bid is accepted.",
    },
    {
      id: "item-6",
      question: "What happens after my bid is accepted?",
      answer:
        "Once your bid is accepted, you'll receive a notification and payment instructions. Complete the payment to finalize your purchase.",
    },
    {
      id: "item-7",
      question: "Can I buy items instantly?",
      answer:
        "Yes, many sellers offer an 'Buy Now' option alongside bidding. Look for the instant purchase button on product listings.",
    },
    {
      id: "item-8",
      question: "How do I trust the seller?",
      answer:
        "Check seller ratings, reviews from previous buyers, and their verification status. We also offer buyer protection for added security.",
    },
    {
      id: "item-9",
      question: "Can I be both a buyer and a seller?",
      answer:
        "You can switch between buying and selling modes using the same account. Many users enjoy both aspects of the platform.",
    },
    {
      id: "item-10",
      question: "Can I follow sellers?",
      answer:
        "Yes, you can follow your favorite sellers to get notified when they list new items or run special promotions.",
    },
    {
      id: "item-11",
      question: "What if I face an issue with a seller/buyer?",
      answer:
        "Contact our support team immediately. We have a dispute resolution process and will work to resolve any issues fairly.",
    },
    {
      id: "item-12",
      question: "Can I request a workshop for my school or group?",
      answer:
        "Yes, we offer educational workshops for schools and organizations. Contact us to discuss your specific needs and schedule a session.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Got <span className="text-[#790222]">Questions?</span> I&apos;ve Got{" "}
            <span className="text-[#790222]">Answers.</span>
          </h1>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-16">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <AccordionTrigger className="flex items-center justify-between w-full px-6 py-4 text-left hover:no-underline hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#790222] rounded-full flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium text-sm md:text-base">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="ml-12 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Please connect with our team, we are happy to help you
          </p>
          <Button className="bg-[#790222] hover:bg-red-800 text-white px-8 py-3 rounded-full font-medium">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
