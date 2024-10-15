import CarouselBanner from "@/components/CarouselBanner";
import ContactSection from "@/components/HomeContact";
import InspirationSection from "@/components/Inspiration";
import PaintSection from "@/components/PaintSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function HomePage() {
  return (
    <div>
      <CarouselBanner/>
      <ContactSection/>
      <InspirationSection/>
      <ProductSection/>
      <WhyUs/>
      <PaintSection/>
      <TestimonialSection/>
    </div>
  );
}
