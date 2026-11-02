import { CartDrawer } from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartProvider";
import { Events } from "@/components/Events";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoStrip } from "@/components/InfoStrip";
import { MenuSection } from "@/components/MenuSection";
import { OurCoffee } from "@/components/OurCoffee";
import { ShopBeans } from "@/components/ShopBeans";
import { Signup } from "@/components/Signup";
import { VisitUs } from "@/components/VisitUs";

export default function Home() {
  return (
    <CartProvider>
      <a href="#main" className="sr-only">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <InfoStrip />
        <MenuSection />
        <OurCoffee />
        <ShopBeans />
        <Events />
        <VisitUs />
        <Signup />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}
