import { OurTeamContent, TeamMember } from "@/types";

const ourTeamMembers: TeamMember[] = [
  {
    id: "sarah-alden",
    name: "Sarah Alden",
    position: "Managing Partner",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait of Sarah Alden",
    links: {
      whatsapp: "https://wa.me/15550000001",
      phone: "tel:+15550000001",
      email: "mailto:sarah.alden@example.com",
    },
  },
  {
    id: "omar-bennett",
    name: "Omar Bennett",
    position: "Head of Corporate Law",
    imageAlt: "Portrait of Omar Bennett",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    links: {
      whatsapp: "https://wa.me/15550000002",
      phone: "tel:+15550000002",
      email: "mailto:omar.bennett@example.com",
    },
  },
  {
    id: "layla-hughes",
    name: "Layla Hughes",
    position: "Senior Arbitration Counsel",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait of Layla Hughes",
    links: {
      whatsapp: "https://wa.me/15550000003",
      phone: "tel:+15550000003",
      email: "mailto:layla.hughes@example.com",
    },
  },
  {
    id: "david-rowe",
    name: "David Rowe",
    position: "Regulatory Affairs Advisor",
    imageAlt: "Portrait of David Rowe",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    links: {
      whatsapp: "https://wa.me/15550000004",
      phone: "tel:+15550000004",
      email: "mailto:david.rowe@example.com",
    },
  },
  {
    id: "maya-reed",
    name: "Maya Reed",
    position: "Senior Legal Consultant",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait of Maya Reed",
    links: {
      whatsapp: "https://wa.me/15550000005",
      phone: "tel:+15550000005",
      email: "mailto:maya.reed@example.com",
    },
  },
  {
    id: "yousef-haleem",
    name: "Yousef Haleem",
    position: "Commercial Contracts Counsel",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait of Yousef Haleem",
    links: {
      whatsapp: "https://wa.me/15550000006",
      phone: "tel:+15550000006",
      email: "mailto:yousef.haleem@example.com",
    },
  },
  {
    id: "hana-morris",
    name: "Hana Morris",
    position: "Corporate Advisory Associate",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "Portrait of Hana Morris",
    links: {
      whatsapp: "https://wa.me/15550000007",
      phone: "tel:+15550000007",
      email: "mailto:hana.morris@example.com",
    },
  },
];

export const ourTeamContent: OurTeamContent = {
  title: "Our Team",
  description:
    "A multidisciplinary legal team focused on corporate advisory, dispute resolution, regulatory guidance, and strategic counsel for businesses operating across Saudi Arabia and international markets.",
  members: ourTeamMembers,
};
