"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { HeroSlideInfo } from "@/types";
import { HeroSlide } from "./hero-slide";

interface HeroCarouselProps {
  isRtl: boolean;
  slides: HeroSlideInfo[];
}

export function HeroCarousel(props: HeroCarouselProps) {
  const { slides, isRtl } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelectedIndex();
    emblaApi.on("select", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
    };
  }, [emblaApi]);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-5.5rem)] w-full max-w-[1440px] items-stretch">
        <button
          type="button"
          className="hidden w-20 items-center justify-center text-(--TXT-ON-DARK) lg:flex"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={28} strokeWidth={1.8} />
        </button>

        <div className="relative flex-1 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
                <HeroSlide slide={slide} isRtl={isRtl} />
              </div>
            ))}
          </div>

          <div
            className={`absolute top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex ${
              isRtl ? "right-6" : "left-6"
            }`}
          >
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to hero slide ${index + 1}`}
                className={`h-3 w-3 rounded-full border border-(--TXT-ON-DARK) ${
                  index === selectedIndex
                    ? "bg-(--TXT-ON-DARK)"
                    : "bg-transparent"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="hidden w-20 items-center justify-center text-(--TXT-ON-DARK) lg:flex"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={28} strokeWidth={1.8} />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 px-6 py-5 lg:hidden">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-(--TXT-ON-DARK)"
          style={{
            borderColor:
              "color-mix(in srgb, var(--TXT-ON-DARK) 24%, transparent)",
          }}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={18} strokeWidth={1.8} />
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to hero slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-(--TXT-ON-DARK) ${
                index === selectedIndex
                  ? "bg-(--TXT-ON-DARK)"
                  : "bg-transparent"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-(--TXT-ON-DARK)"
          style={{
            borderColor:
              "color-mix(in srgb, var(--TXT-ON-DARK) 24%, transparent)",
          }}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={18} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}
