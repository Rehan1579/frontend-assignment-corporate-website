"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { TeamMember } from "@/types";

import { TeamMemberCard } from "./team-member-card";

interface TeamMembersCarouselProps {
  isRtl: boolean;
  members: TeamMember[];
}

export function TeamMembersCarousel(props: TeamMembersCarouselProps) {
  const { members, isRtl } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });

  return (
    <section className="mt-12 sm:mt-14">
      <div className="relative mx-auto max-w-[900px]">
        <button
          type="button"
          className="absolute left-0 top-[5.5rem] z-10 hidden -translate-x-4 items-center justify-center text-(--ICON-LIGHT) transition hover:text-(--TXT-BRAND) lg:inline-flex"
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={34} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          className="absolute right-0 top-[5.5rem] z-10 hidden translate-x-4 items-center justify-center text-(--ICON-LIGHT) transition hover:text-(--TXT-BRAND) lg:inline-flex"
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={34} strokeWidth={1.8} />
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-5 flex">
            {members.map((member) => (
              <div
                key={member.id}
                className="min-w-0 flex-[0_0_100%] pl-5 sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
              >
                <TeamMemberCard member={member} isRtl={isRtl} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-(--ICON-LIGHT) transition hover:border-(--TXT-BRAND) hover:text-(--TXT-BRAND)"
          style={{
            borderColor: "color-mix(in srgb, var(--TXT-LIGHT) 12%, transparent)",
          }}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ChevronLeft size={20} strokeWidth={1.8} />
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border text-(--ICON-LIGHT) transition hover:border-(--TXT-BRAND) hover:text-(--TXT-BRAND)"
          style={{
            borderColor: "color-mix(in srgb, var(--TXT-LIGHT) 12%, transparent)",
          }}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ChevronRight size={20} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}
