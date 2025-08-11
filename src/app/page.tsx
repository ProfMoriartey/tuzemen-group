import FullWidthImage from "~/components/FullWidthImage";
import SectionImageText from "~/components/SectionImageText";
import FadeInWhenVisible from "~/components/FadeInWhenVisible";
import { Hero } from "~/components/Hero";

export default function Home() {
  return (
    <div>
      {/* Full Screen Hero */}
      <section className="relative h-screen w-full">
        <Hero />
        {/* hero code unchanged */}
      </section>

      {/* Sections with fade/slide animation */}
      <FadeInWhenVisible>
        <SectionImageText
          title="Artisan Craftsmanship"
          text="Our fabrics are woven with precision and care, blending traditional techniques with modern design."
          image="/images/craft.jpg"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible direction="up" delay={200}>
        <FullWidthImage
          image="/images/showroom.jpg"
          title="Where Design Meets Quality"
        />
      </FadeInWhenVisible>

      <FadeInWhenVisible direction="right" delay={300}>
        <SectionImageText
          title="Sustainable & Certified"
          text="We work with OEKO-TEX certified partners to ensure eco-friendly and safe production."
          image="/images/sustainable.jpg"
          reverse
          bgColor="bg-gray-50"
        />
      </FadeInWhenVisible>
    </div>
  );
}
