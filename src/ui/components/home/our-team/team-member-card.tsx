import { Mail, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

import { TeamMember } from "@/types";

interface TeamMemberCardProps {
  isRtl: boolean;
  member: TeamMember;
}

export function TeamMemberCard(props: TeamMemberCardProps) {
  const { member, isRtl } = props;

  return (
    <div
      className="mx-auto w-full max-w-[16.5rem] text-center sm:max-w-[18rem]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="overflow-hidden">
        <Image
          src={member.imageSrc}
          alt={member.imageAlt}
          width={420}
          height={320}
          className="h-[10.5rem] w-full object-contain sm:h-[12rem]"
        />
      </div>

      <div className="px-2 py-4">
        <h3 className="text-display text-[1.7rem] leading-none text-(--TXT-BRAND)">
          {member.name}
        </h3>
        <p className="mt-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-(--TXT-LIGHT) opacity-35">
          {member.position}
        </p>

        <div className="mt-4 flex items-center justify-center gap-2.5 text-(--ICON-LIGHT)">
          <a
            href={member.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>
          <a
            href={member.links.phone}
            className="inline-flex h-7 w-7 items-center justify-center"
          >
            <Phone size={18} strokeWidth={1.8} />
          </a>
          <a
            href={member.links.email}
            className="inline-flex h-7 w-7 items-center justify-center"
          >
            <Mail size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </div>
  );
}
