import Image from "next/image";

import type { CustomerTestimonial as CustomerTestimonialType } from "@/types";

interface CustomerTestimonialProps {
  isRtl: boolean;
  testimonial: CustomerTestimonialType;
}

export function CustomerTestimonial(props: CustomerTestimonialProps) {
  const { isRtl, testimonial } = props;
  const textAlignmentClassName = isRtl ? "text-right" : "text-left";
  const rtlOffsetClassName = isRtl ? "ms-auto" : "";

  return (
    <article className="grid gap-8 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8">
      <div className="mx-auto w-full max-w-[260px] bg-(--BG-DARK-SHADE)">
        <Image
          src={testimonial.imageSrc}
          alt={testimonial.imageAlt}
          width={420}
          height={420}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className={textAlignmentClassName}>
        <blockquote
          className={`max-w-3xl text-lg leading-8 text-(--TXT-ON-DARK-MUTED) sm:text-[1.3rem] sm:leading-[1.85] ${rtlOffsetClassName}`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <div className={`mt-12 ${rtlOffsetClassName}`}>
          <p className="text-display text-[1.7rem] leading-none text-(--TXT-ON-DARK)">
            {testimonial.name}
          </p>
          <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-(--TXT-ON-DARK-SUBTLE)">
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}
