// app/explore/page.tsx

import Explore from "@/components/module/explore";
import DynamicBanner from "@/components/shared/DynamicBanner";
import SearchManagement from "@/components/shared/searchBar/SearchManagement";

const ExplorePage = () => {
  return (
    <div>
      <DynamicBanner
        title="Explore All Products"
        subtitle="Explore the hottest styles, limited editions, and pre-loved fashion in real-time auctions."
      />

      <SearchManagement />

      <div className="mt-10">
        <h2 className="text-3xl lg:text-[60px] font-semibold text-center mb-4">
          Men
        </h2>
        <Explore />
      </div>
    </div>
  );
};

export default ExplorePage;
