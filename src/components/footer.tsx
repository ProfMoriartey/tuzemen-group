import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pb-12 pt-24 md:pt-32">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid gap-16 lg:grid-cols-12">
          
          <div className="flex flex-col lg:col-span-5">
            <h2 className="mb-6 text-3xl font-light uppercase tracking-widest text-foreground md:text-4xl">
              Get in Touch
            </h2>
            <p className="mb-12 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Contact our sales team for international inquiries, catalog requests, or custom manufacturing details.
            </p>
            
            <form className="max-w-md space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full border-b border-border bg-transparent py-3 text-sm placeholder:text-muted-foreground transition-colors focus:border-foreground focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border-b border-border bg-transparent py-3 text-sm placeholder:text-muted-foreground transition-colors focus:border-foreground focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-sm placeholder:text-muted-foreground transition-colors focus:border-foreground focus:outline-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="inline-flex w-full items-center justify-center border border-foreground/50 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-12 lg:col-span-6 lg:col-start-7">
            
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">Contact Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>info@tuzemengroup.com</li>
                  <li>+90 224 3460632</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">Headquarters</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>SAMANLI MAHALLESİ SEL SOK B BLOK NO:67/F
                  16350 YILDIRIM </li>
                  <li>BURSA/TURKEY</li>
                </ul>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.7522123081053!2d29.114439476047426!3d40.2368112714691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca4024c47b7f8f%3A0x5c9fb57a97de00a4!2sT%C3%BCzemen%20Tekstil%20Makina%20G%C4%B1da%20Turizm%20Sa%C4%9Fl%C4%B1k%20Otomotiv%20%C4%B0n%C5%9Faat%20San.%20Tic.%20Ltd.%20%C5%9Eti.!5e0!3m2!1sen!2str!4v1776849025013!5m2!1sen!2str" 
                className="absolute inset-0 h-full w-full opacity-80 mix-blend-luminosity grayscale contrast-125 transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                title="Tüzemen Group Location"
              ></iframe>
            </div>

          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Tüzemen Group. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <Link href="#" className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
              Instagram
            </Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground">
              LinkedIn
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}