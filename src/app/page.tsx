import FullWidthImage from "~/components/FullWidthImage";
import SectionImageText from "~/components/SectionImageText";
import FadeInWhenVisible from "~/components/FadeInWhenVisible";
import { Hero } from "~/components/Hero";
import HeroCarousel from "~/components/HeroCarousel";

export default function Home() {
  return (
    <div>
      {/* Full Screen Hero */}
      <section className="relative h-screen w-full">
        <HeroCarousel
          heightClass="h-screen"
          intervalMs={5000}
          slides={[
            {
              image: "/images/craft.jpg",
              title: "Fabrics for Timeless Spaces",
              subtitle:
                "Drapery, sheers, and upholstery crafted for homes, hotels, and projects.",
              ctaPrimary: { label: "View Collections", href: "#collections" },
              ctaSecondary: { label: "Request Samples", href: "#samples" },
            },
            {
              image: "/images/hero-fabrics.jpg",
              title: "Crafted with Care",
              subtitle: "From weaving to finishing, quality you can feel.",
              ctaPrimary: { label: "Explore Craft", href: "#craft" },
            },
            {
              image: "/images/samples.jpg",
              title: "Designed for Projects",
              subtitle:
                "Support for residential and hospitality specifications.",
              ctaPrimary: { label: "Contact Sales", href: "#samples" },
            },
          ]}
        />
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
