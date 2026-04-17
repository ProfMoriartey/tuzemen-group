import Image from "next/image";

export function AboutUs() {
  return (
    <section id="about-us" className="bg-muted/50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Tüzemen Group
            </h2>
            <p className="text-lg text-muted-foreground">
              We produce high-quality fabrics for the global market. Our manufacturing process blends traditional craftsmanship with modern technology.
            </p>
            <p className="text-lg text-muted-foreground">
              We manage a catalog of over 160 distinct designs. Our team ensures every yard of fabric meets strict quality standards before it reaches your business.
            </p>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl bg-muted lg:aspect-video">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Image Placeholder: Factory or Fabrics</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}