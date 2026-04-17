import Link from "next/link";
import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl">
          Tüzemen Group
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Premium fabrics and textile manufacturing for international markets.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#our-brands">Explore Our Brands</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#about-us">About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}