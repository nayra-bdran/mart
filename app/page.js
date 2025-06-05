import BrandsSlider from "./components/BrandsSlider/BrandsSlider";
import CategoriesSwiper from "./components/CategoriesSwiper/CategoriesSwiper";
import DeliveryBanner from "./components/DeliveryBanner/DeliveryBanner";
import GuidesAndArticles from "./components/GuidesAndArticles/GuidesAndArticles";
import Hero from "./components/Hero/Hero";
import OneStopSection from "./components/OneStopSection/OneStopSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import NewsletterBanner from "./components/NewsletterBanner/NewsletterBanner";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import WhatsAppBanner from "./components/WhatsAppBanner/WhatsAppBanner";

export default function Home() {
  return (
    <div >
      <Hero />
      <OneStopSection />
      <HowItWorksSection />
      <CategoriesSwiper />
      <DeliveryBanner />
      <BrandsSlider />
      <WhatsAppBanner />
      <TestimonialsSection />
      <NewsletterBanner />
      <GuidesAndArticles />
    </div>
  );
}
