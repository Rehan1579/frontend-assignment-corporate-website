import { CustomersContent } from "@/types/customers.types";
import { OurTeamContent } from "@/types/our-team.types";

export interface HeroSlideInfo {
  id: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  imageSrc: string;
  imageAlt: string;
}

export interface HomePageContent {
  heroSlides: HeroSlideInfo[];
  ourTeam: OurTeamContent;
  customers: CustomersContent;
}
