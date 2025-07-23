import AllProductsPage from "@/components/module/home_page/AllProducts";
import BannerSection from "@/components/module/home_page/BannerSection";
import SaleBanner from "@/components/module/home_page/SaleBanner";
import Suggested from "@/components/module/home_page/Suggested";
import TestimonialsCarousel from "@/components/module/home_page/TestimonialsCarousel";
import TopSellers from "@/components/module/home_page/TopSellers";
import TrendingProducts from "@/components/module/home_page/TrendingProducts";
import VineWorks from "@/components/module/home_page/VineWorks";

const HomePage = () => {
  return (
    <div>
      <h1>
        <BannerSection />
        <TopSellers />
        <TrendingProducts />
        <Suggested />
        <AllProductsPage />
        <VineWorks />
        <SaleBanner />
        <TestimonialsCarousel />
      </h1>
    </div>
  );
};

export default HomePage;
