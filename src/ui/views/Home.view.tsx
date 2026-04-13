import { HomePageContent } from "@/types";
import { CustomersSection } from "@/ui/components/home/customers";
import { HeroCarousel } from "@/ui/components/home/hero";
import { OurTeamSection } from "@/ui/components/home/our-team";

interface HomeViewProps {
  content: HomePageContent;
  isRtl: boolean;
}

export function HomeView(props: HomeViewProps) {
  const { content, isRtl } = props;

  return (
    <>
      <HeroCarousel slides={content.heroSlides} isRtl={isRtl} />
      <OurTeamSection content={content.ourTeam} isRtl={isRtl} />
      <CustomersSection content={content.customers} isRtl={isRtl} />
    </>
  );
}
