import Explore from "@/components/module/explore";
import DynamicBanner from "@/components/shared/DynamicBanner";

const page = () => {
  return (
    <div>
      <DynamicBanner
        title="Explore All Products"
        subtitle="Explore the hottest styles, limited editions, and pre-loved fashion in real-time auctions."
      />

      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-center mb-4">Mens</h2>
        <Explore />
      </div>
    </div>
  );
};

export default page;
