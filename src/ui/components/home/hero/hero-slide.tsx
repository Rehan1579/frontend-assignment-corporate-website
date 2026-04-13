import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { HeroSlideInfo } from "@/types";

interface HeroSlideProps {
  isRtl: boolean;
  slide: HeroSlideInfo;
}

export function HeroSlide(props: HeroSlideProps) {
  const { slide, isRtl } = props;
  const ctaClassName =
    "mt-8 inline-flex items-center rounded-[1rem] bg-(--BTN-PRIMARY-TXT) px-6 py-3 text-sm font-semibold";
  const ctaStyle = { color: "var(--TXT-BRAND)" };
  const gridClassName = isRtl
    ? "lg:grid-cols-[0.9fr_1.1fr]"
    : "lg:grid-cols-[1.1fr_0.9fr]";
  const textAlignmentClassName = isRtl ? "text-right" : "text-left";
  const textColumnClassName = isRtl ? "lg:order-2" : "lg:order-1";
  const imageColumnClassName = isRtl ? "lg:order-1 lg:justify-start" : "lg:order-2 lg:justify-end";

  return (
    <div className="flex min-h-[calc(100vh-5.5rem)] items-center px-6 py-14 sm:px-8 lg:px-14 lg:py-20 xl:px-20">
      <div className={`grid w-full items-center gap-10 ${gridClassName}`}>
        <div className={`max-w-2xl ${textAlignmentClassName} ${textColumnClassName}`}>
          <h1 className="text-display text-4xl leading-none text-(--TXT-ON-DARK) sm:text-4xl lg:text-5xl">
            {slide.title}
          </h1>

          <p
            className={`mt-6 max-w-xl text-base leading-8 text-(--TXT-ON-DARK-MUTED) sm:text-lg ${
              isRtl ? "ms-auto" : ""
            }`}
          >
            {slide.description}
          </p>

          {slide.cta.isExternal ? (
            <a
              href={slide.cta.href}
              target="_blank"
              rel="noreferrer"
              className={ctaClassName}
              style={ctaStyle}
            >
              {slide.cta.label}
            </a>
          ) : (
            <Link
              href={slide.cta.href}
              className={ctaClassName}
              style={ctaStyle}
            >
              {slide.cta.label}
            </Link>
          )}
        </div>

        <div className={`flex justify-center ${imageColumnClassName}`}>
          <div className="w-full max-w-[300px] bg-(--BG-DARK-SHADE) p-4 sm:max-w-[340px]">
            <Image
              src={slide.imageSrc}
              alt={slide.imageAlt}
              width={420}
              height={500}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
