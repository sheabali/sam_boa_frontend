import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlanForm } from "./plan-form";

export default function PlansPricingPage() {
  const basicPlanDefaults = {
    planName: "Basic",
    planType: "Free Plan",
    facilities: "2 ITEMS POST",
    price: "€0",
    duration: "Month",
  };

  const standardPlanDefaults = {
    planName: "Standard",
    planType: "Premium Plan",
    facilities: "10 ITEMS POST, Analytics",
    price: "€29",
    duration: "Month",
  };

  const unlimitedPlanDefaults = {
    planName: "Unlimited",
    planType: "Enterprise Plan",
    facilities: "UNLIMITED ITEMS POST, Analytics, Priority Support",
    price: "€99",
    duration: "Year",
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8 ">
      <h1 className="text-3xl font-bold mb-6">Plans & Pricing</h1>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-0 bg-transparent border-b border-gray-200">
          <TabsTrigger
            value="basic"
            className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none"
          >
            Basic
          </TabsTrigger>
          <TabsTrigger
            value="standard"
            className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none"
          >
            Standard
          </TabsTrigger>
          <TabsTrigger
            value="unlimited"
            className="inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none"
          >
            Unlimited
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <PlanForm defaultValues={basicPlanDefaults} />
        </TabsContent>

        <TabsContent value="standard">
          <PlanForm defaultValues={standardPlanDefaults} />
        </TabsContent>

        <TabsContent value="unlimited">
          <PlanForm defaultValues={unlimitedPlanDefaults} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
