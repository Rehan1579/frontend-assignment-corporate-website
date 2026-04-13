export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="section-label text-[#d4b89d]">{eyebrow}</span>
      <h2 className="text-display mt-4 text-4xl leading-none text-[#f7f2ec] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#c7b9ab] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
