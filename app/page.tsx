import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HistorySection } from "@/components/HistorySection";
import { DishesSection } from "@/components/DishesSection";
import { DeliverySection } from "@/components/DeliverySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { BookingSection } from "@/components/BookingSection";

export default function HomePage() {
  return (
    <div id="top" className="relative isolate min-h-screen overflow-x-clip bg-[#011845]">
      {/* Мягкие синие пятна света взяты из цветовой гаммы макета. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-175px] -z-10 h-[910px] w-[min(1080px,125vw)] -translate-x-1/2 rounded-full bg-[#496192]/40 blur-[195px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-340px] top-[880px] -z-10 h-[620px] w-[790px] rounded-full bg-[#496192]/30 blur-[170px]"
      />
      <Header />
      <main>
        <HeroSection />
        <HistorySection />
        <DishesSection />
        <DeliverySection />
        <ReviewsSection />
        <PromotionsSection />
        <BookingSection />
      </main>
    </div>
  );
}
