import Terms from "@/components/module/terms";
import DynamicBanner from "@/components/shared/DynamicBanner";

const page = () => {
  return (
    <div>
      <div className="mt-10">
        <DynamicBanner title="Terms of Use – Vine" subtitle="" />
      </div>
      <div className="mt-10">
        <Terms />
      </div>
    </div>
  );
};

export default page;
