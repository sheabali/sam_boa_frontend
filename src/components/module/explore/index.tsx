import SaleBanner from "../home_page/SaleBanner";
import Apparel from "./Apparel";
import Bottoms from "./Bottoms";
import Footwear from "./Footwear";

const Explore = () => {
  return (
    <div>
      {/* Man section */}
      <div className="container">
        <Apparel />
        <div className="mb-10">
          <Bottoms />
        </div>
        <div className="mb-16">
          <Footwear />
        </div>
      </div>
      <div className="mb-20">
        <SaleBanner />
      </div>
      {/* Woman section */}
      {/* <div className="container">
        <div className="md:my-20">
          <SearchManagement />
        </div>
        <div className="text-center text-6xl font-semibold mt-25 mb-16">
          <h1 className="text-3xl lg:text-[60px]">Women</h1>
        </div>

        <div className="mb-10">
          <WomensApparel />
        </div>
        <div className="mb-10">
          <WBottoms />
        </div>
        <div className="mb-10">
          <WFootwear />
        </div>
      </div> */}
    </div>
  );
};

export default Explore;
