import FAQ from "@/components/module/FAQ";
import DynamicBanner from "@/components/shared/DynamicBanner";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <DynamicBanner title="Frequently Asked Questions" subtitle="" />
      </div>
      <div className="mt-10">
        <FAQ />
      </div>
    </div>
  );
};

export default page;
