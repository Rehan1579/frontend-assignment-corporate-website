import { HeroSlideInfo, HomePageContent } from "@/types";

import { customersContent } from "./customers.content";
import { ourTeamContent } from "./our-team.content";

const heroSlidesContent: HeroSlideInfo[] = [
  {
    id: "corporate-advisory",
    title: "Practical Legal Guidance For Growing Businesses",
    description:
      "Clear corporate advisory for founders, investors, and leadership teams that need reliable legal direction across daily operations and long-term business decisions.",
    cta: {
      label: "Read More",
      href: "/#our-team",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait for hero slide one",
  },
  {
    id: "dispute-resolution",
    title: "Strategic Counsel For Complex Commercial Matters",
    description:
      "Support for organizations handling high-value contracts, internal restructuring, regulatory pressure, and sensitive disputes that require measured legal strategy.",
    cta: {
      label: "Read More",
      href: "/services/legal-consultation-services",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait for hero slide two",
  },
  {
    id: "business-transformation",
    title: "Trusted Representation With Business Awareness",
    description:
      "We help companies move with confidence by combining legal precision, commercial awareness, and communication that keeps decision-makers informed at every stage.",
    cta: {
      label: "Read More",
      href: "/#our-team",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait for hero slide three",
  },
  {
    id: "investment-readiness",
    title: "Advisory Support For Expansion And Investment",
    description:
      "From market entry planning to foreign investment matters, our legal team supports business growth with structured advice built for fast-moving corporate environments.",
    cta: {
      label: "Read More",
      href: "/services/foreign-investment-services",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait for hero slide four",
  },
  {
    id: "client-confidence",
    title: "A Professional Presence Built Around Trust",
    description:
      "Our approach is designed to communicate clarity, discretion, and dependable counsel for companies, institutions, and stakeholders looking for long-term legal partners.",
    cta: {
      label: "Read More",
      href: "/#contact-us",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait for hero slide five",
  }
];

export const homePageContent: HomePageContent = {
  heroSlides: heroSlidesContent,
  ourTeam: ourTeamContent,
  customers: customersContent,
};
