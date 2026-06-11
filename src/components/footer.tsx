import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer id="contact" className="border-border bg-background border-t pb-12 pt-24 md:pt-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-5">
            <h2 className="text-foreground mb-6 text-3xl font-light uppercase tracking-widest md:text-4xl">
              {t("title")}
            </h2>
            <p className="text-muted-foreground mb-12 max-w-sm text-sm leading-relaxed">
              {t("description")}
            </p>

            <form className="max-w-md space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("fullName")}
                  className="border-border placeholder:text-muted-foreground focus:border-foreground w-full border-b bg-transparent py-3 text-sm transition-colors focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder={t("email")}
                  className="border-border placeholder:text-muted-foreground focus:border-foreground w-full border-b bg-transparent py-3 text-sm transition-colors focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder={t("message")}
                  rows={4}
                  className="border-border placeholder:text-muted-foreground focus:border-foreground w-full resize-none border-b bg-transparent py-3 text-sm transition-colors focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="border-foreground/50 text-foreground hover:bg-foreground hover:text-background inline-flex w-full items-center justify-center border bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 sm:w-auto"
              >
                {t("sendMessage")}
              </button>
            </form>
          </div>

          <div className="flex flex-col space-y-12 lg:col-span-6 lg:col-start-7">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-foreground text-xs font-semibold uppercase tracking-widest">
                  {t("contactDetails")}
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>info@tuzemengroup.com</li>
                  <li>+90 224 3460632</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-foreground text-xs font-semibold uppercase tracking-widest">
                  {t("headquarters")}
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>{t("addressLine1")}</li>
                  <li>{t("addressLine2")}</li>
                </ul>
              </div>
            </div>

            <div className="border-border bg-muted relative aspect-video w-full overflow-hidden rounded-sm border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3045.7522123081053!2d29.114439476047426!3d40.2368112714691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca4024c47b7f8f%3A0x5c9fb57a97de00a4!2sT%C3%BCzemen%20Tekstil%20Makina%20G%C4%B1da%20Turizm%20Sa%C4%9Fl%C4%B1k%20Otomotiv%20%C4%B0n%C5%9Faat%20San.%20Tic.%20Ltd.%20%C5%9Eti.!5e0!3m2!1sen!2str!4v1776849025013!5m2!1sen!2str"
                className="absolute inset-0 h-full w-full opacity-80 mix-blend-luminosity grayscale contrast-125 transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                loading="lazy"
                title={t("mapTitle")}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-border mt-24 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-muted-foreground text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {t("copyright")}
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a
              href="https://www.instagram.com/tuzemengroup/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-widest transition-colors"
            >
              {t("instagram")}
            </a>
            <a
              href="https://tr.linkedin.com/company/tuzemen-textile"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs uppercase tracking-widest transition-colors"
            >
              {t("linkedin")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
