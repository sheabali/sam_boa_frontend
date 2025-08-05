import NewArrivals from "@/components/module/home_page/Arrivals";
import BannerSection from "@/components/module/home_page/BannerSection";
import SaleBanner from "@/components/module/home_page/SaleBanner";
import Suggested from "@/components/module/home_page/Suggested";
import TestimonialsCarousel from "@/components/module/home_page/TestimonialsCarousel";
import TopSellers from "@/components/module/home_page/TopSellers";
import TrendingProducts from "@/components/module/home_page/TrendingProducts";
import Under70 from "@/components/module/home_page/Under70";
import VineWorks from "@/components/module/home_page/VineWorks";

const HomePage = () => {
  return (
    <div>
      <BannerSection />
      <TopSellers />
      <TrendingProducts />
      <Suggested />
      <Under70 />
      <NewArrivals />
      <VineWorks />
      <SaleBanner />
      <TestimonialsCarousel />
    </div>
  );
};

export default HomePage;
