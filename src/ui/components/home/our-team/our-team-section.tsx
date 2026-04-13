import { OurTeamContent } from "@/types";

import { TeamMembersCarousel } from "./team-members-carousel";

interface OurTeamSectionProps {
  content: OurTeamContent;
  isRtl: boolean;
}

export function OurTeamSection(props: OurTeamSectionProps) {
  const { content, isRtl } = props;

  return (
    <section
      id="our-team"
      className="bg-(--BG-LIGHT) py-14 text-center sm:py-18 lg:py-24"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-display text-5xl leading-none text-(--TXT-BRAND) sm:text-6xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-(--TXT-LIGHT) opacity-70 sm:text-lg">
            {content.description}
          </p>
        </div>

        <TeamMembersCarousel members={content.members} isRtl={isRtl} />
      </div>
    </section>
  );
}
