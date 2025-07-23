import PrivacyPolicy from "@/components/module/policy";
import DynamicBanner from "@/components/shared/DynamicBanner";

const page = () => {
  return (
    <div>
      <div>
        <DynamicBanner title="Your Privacy Matters" subtitle="" />
      </div>
      <PrivacyPolicy />
    </div>
  );
};

export default page;
