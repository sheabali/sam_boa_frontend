import SaleBanner from "../home_page/SaleBanner";
import Apparel from "./Apparel";
import Bottoms from "./Bottoms";
import Footwear from "./Footwear";
import WomensApparel from "./woman/Apparel";
import WBottoms from "./woman/Bottoms";
import WFootwear from "./woman/Footwear";

const Explore = () => {
  return (
    <div>
      {/* Man section */}
      <div className="container">
        <Apparel />
        <Bottoms />
        <Footwear />
      </div>
      <SaleBanner />
      {/* Woman section */}
      <div className="container">
        <div className="text-center text-6xl font-semibold mt-40 mb-16">
          <h1>Womens</h1>
        </div>
        <WomensApparel />
        <WBottoms />
        <WFootwear />
      </div>
    </div>
  );
};

export default Explore;
