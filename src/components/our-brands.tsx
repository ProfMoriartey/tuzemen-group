import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "~/components/ui/card";
  
  const brands = [
    {
      name: "Winbrella",
      description: "Premium cotton and natural fibers for everyday wear.",
    },
    {
      name: "Advantage",
      description: "Performance synthetic blends for active and outdoor use.",
    },
    {
      name: "La Luxe",
      description: "Luxury silks and delicate fabrics for formal attire.",
    },
    {
      name: "Vanilla Home",
      description: "Durable and sustainable textiles for home goods.",
    },
  ];
  
  export function OurBrands() {
    return (
      <section id="our-brands" className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Brands
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our specialized textile collections.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <Card key={brand.name} className="flex flex-col bg-muted/50 transition-colors hover:bg-muted">
                <div className="flex aspect-video items-center justify-center bg-muted">
                  <span className="text-sm text-muted-foreground">Logo Placeholder</span>
                </div>
                <CardHeader>
                  <CardTitle>{brand.name}</CardTitle>
                  <CardDescription>{brand.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }