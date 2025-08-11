// src/components/Footer.tsx
export function Footer() {
  return (
    <footer id="contact" className="bg-mist mt-24 border-t border-black/10">
      <div className="container-default flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tuzemen Textile
        </p>
        <div className="text-sm">
          <p>Email: sales@tuzemen.com</p>
          <p>Phone: +90 000 000 00 00</p>
        </div>
      </div>
    </footer>
  );
}
