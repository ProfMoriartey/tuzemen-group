import { setRequestLocale } from "next-intl/server";
import { AboutUs } from "~/components/about-us";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Navbar } from "~/components/navbar";
import { OurBrands } from "~/components/our-brands";
import { routing } from "~/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurBrands />
      <Footer />
    </main>
  );
}
