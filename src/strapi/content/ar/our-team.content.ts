import { OurTeamContent, TeamMember } from "@/types";

export const ourTeamMembers: TeamMember[] = [
  {
    id: "sarah-alden",
    name: "Sarah Alden",
    position: "الشريك الإداري",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة Sarah Alden",
    links: {
      whatsapp: "https://wa.me/15550000001",
      phone: "tel:+15550000001",
      email: "mailto:sarah.alden@example.com",
    },
  },
  {
    id: "omar-bennett",
    name: "Omar Bennett",
    position: "رئيس قسم قانون الشركات",
    imageAlt: "صورة Omar Bennett",
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
    position: "مستشار أول في التحكيم",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة Layla Hughes",
    links: {
      whatsapp: "https://wa.me/15550000003",
      phone: "tel:+15550000003",
      email: "mailto:layla.hughes@example.com",
    },
  },
  {
    id: "david-rowe",
    name: "David Rowe",
    position: "مستشار الشؤون التنظيمية",
    imageAlt: "صورة David Rowe",
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
    position: "كبير المستشارين القانونيين",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة Maya Reed",
    links: {
      whatsapp: "https://wa.me/15550000005",
      phone: "tel:+15550000005",
      email: "mailto:maya.reed@example.com",
    },
  },
  {
    id: "yousef-haleem",
    name: "Yousef Haleem",
    position: "مستشار العقود التجارية",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة Yousef Haleem",
    links: {
      whatsapp: "https://wa.me/15550000006",
      phone: "tel:+15550000006",
      email: "mailto:yousef.haleem@example.com",
    },
  },
  {
    id: "hana-morris",
    name: "Hana Morris",
    position: "مساعد الاستشارات المؤسسية",
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة Hana Morris",
    links: {
      whatsapp: "https://wa.me/15550000007",
      phone: "tel:+15550000007",
      email: "mailto:hana.morris@example.com",
    },
  },
];

export const ourTeamContent: OurTeamContent = {
  title: "فريقنا",
  description:
    "فريق قانوني متعدد التخصصات يركز على الاستشارات المؤسسية وتسوية النزاعات والإرشاد التنظيمي وتقديم المشورة الاستراتيجية للشركات العاملة في المملكة العربية السعودية والأسواق الدولية.",
  members: ourTeamMembers,
};
