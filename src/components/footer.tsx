import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Tüzemen Group</h3>
            <p className="text-sm text-muted-foreground">
              Premium fabrics and textile manufacturing for international markets.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about-us" className="transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#our-brands" className="transition-colors hover:text-foreground">
                  Our Brands
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@tuzemengroup.com</li>
              <li>Phone: +90 (XXX) XXX XX XX</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Tüzemen Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}