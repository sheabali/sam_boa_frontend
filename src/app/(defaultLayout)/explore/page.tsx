import Explore from "@/components/module/explore";
import DynamicBanner from "@/components/shared/DynamicBanner";
import SearchManagement from "@/components/shared/searchBar/SearchManagement";

const page = () => {
  return (
    <div>
      <DynamicBanner
        title="Explore All Products"
        subtitle="Explore the hottest styles, limited editions, and pre-loved fashion in real-time auctions."
      />

      <SearchManagement />

      <div className="mt-10">
        <h2 className="text-4xl lg:text-[60px] font-semibold text-center mb-4">
          Mens
        </h2>
        <Explore />
      </div>
    </div>
  );
};

export default page;
