import Image from "next/image";

interface FullWidthImageProps {
  image: string;
  title?: string;
  subtitle?: string;
}

export default function FullWidthImage({
  image,
  title,
  subtitle,
}: FullWidthImageProps) {
  return (
    <section className="relative h-[60vh] w-full md:h-[80vh]">
      <Image
        src={image}
        alt={title ?? "Full Width"}
        fill
        className="object-cover"
        priority
      />
      {title && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-4 text-center text-white">
          <h2 className="font-serif text-4xl font-bold md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl">{subtitle}</p>}
        </div>
      )}
    </section>
  );
}
