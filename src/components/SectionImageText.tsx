import Image from "next/image";

interface SectionImageTextProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
  bgColor?: string;
}

export default function SectionImageText({
  title,
  text,
  image,
  reverse = false,
  bgColor = "bg-white",
}: SectionImageTextProps) {
  return (
    <section className={`${bgColor} py-16`}>
      <div
        className={`mx-auto flex max-w-6xl flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 px-4`}
      >
        {/* Image */}
        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-lg md:w-1/2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="font-serif text-3xl font-semibold">{title}</h2>
          <p className="mt-4 leading-relaxed text-gray-700">{text}</p>
        </div>
      </div>
    </section>
  );
}
