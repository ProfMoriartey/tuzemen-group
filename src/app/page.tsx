import Link from "next/link";
import { AboutUs } from "~/components/about-us";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { OurBrands } from "~/components/our-brands";

export default function HomePage() {
  return (
    <main>

    <Hero />
    <AboutUs />
    <OurBrands />
    <Footer/>
    </main>
  );
}
