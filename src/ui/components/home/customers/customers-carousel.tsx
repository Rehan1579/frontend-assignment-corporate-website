"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CustomerTestimonial as CustomerTestimonialType } from "@/types";

import { CustomerTestimonial } from "./customer-testimonial";

interface CustomersCarouselProps {
  isRtl: boolean;
  testimonials: CustomerTestimonialType[];
}

export function CustomersCarousel(props: CustomersCarouselProps) {
  const { testimonials, isRtl } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  return (
    <div className="mt-12 sm:mt-14">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-0 flex-[0_0_100%]">
              <CustomerTestimonial testimonial={testimonial} isRtl={isRtl} />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`mt-10 flex items-center justify-center gap-3 ${
          isRtl ? "lg:justify-start" : "lg:justify-end"
        }`}
      >
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[color:color-mix(in_srgb,var(--BG-LIGHT)_16%,transparent)] text-(--TXT-ON-DARK) transition hover:bg-(--BG-DARK-SHADE)"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={20} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-(--BG-LIGHT) text-(--TXT-BRAND) transition hover:opacity-90"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={20} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}
