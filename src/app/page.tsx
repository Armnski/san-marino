import HeroSection from "@/components/sections/HeroSection";
import CuisineSection from "@/components/sections/CuisineSection";
import AtmosphereSection from "@/components/sections/AtmosphereSection";
import MenuSection from "@/components/sections/MenuSection";
import AuthenticitySection from "@/components/sections/AuthenticitySection";
import ReservationSection from "@/components/sections/ReservationSection";
import Footer from "@/components/sections/Footer";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Divider />
      <CuisineSection />
      <Divider />
      <AtmosphereSection />
      <Divider />
      <MenuSection />
      <Divider />
      <AuthenticitySection />
      <Divider />
      <ReservationSection />
      <Footer />
    </main>
  );
}
