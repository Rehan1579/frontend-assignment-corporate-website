import { HeroSlideInfo, HomePageContent } from "@/types";

import { customersContent } from "./customers.content";
import { ourTeamContent } from "./our-team.content";

export const heroSlidesContent: HeroSlideInfo[] = [
  {
    id: "corporate-advisory",
    title: "توجيه قانوني عملي للشركات النامية",
    description:
      "استشارات قانونية واضحة للمؤسسين والمستثمرين وفرق الإدارة التي تحتاج إلى اتجاه قانوني موثوق في العمليات اليومية والقرارات التجارية طويلة المدى.",
    cta: {
      label: "اقرأ المزيد",
      href: "/#our-team",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة الشريحة الأولى",
  },
  {
    id: "dispute-resolution",
    title: "استشارة استراتيجية للمسائل التجارية المعقدة",
    description:
      "دعم للجهات التي تتعامل مع عقود عالية القيمة وإعادة هيكلة داخلية وضغوط تنظيمية ونزاعات حساسة تتطلب استراتيجية قانونية متزنة.",
    cta: {
      label: "اقرأ المزيد",
      href: "/services/legal-consultation-services",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة الشريحة الثانية",
  },
  {
    id: "business-transformation",
    title: "تمثيل موثوق بوعي تجاري",
    description:
      "نساعد الشركات على التحرك بثقة من خلال الجمع بين الدقة القانونية والفهم التجاري والتواصل الواضح الذي يبقي متخذي القرار على اطلاع في كل مرحلة.",
    cta: {
      label: "اقرأ المزيد",
      href: "/#our-team",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة الشريحة الثالثة",
  },
  {
    id: "investment-readiness",
    title: "دعم استشاري للتوسع والاستثمار",
    description:
      "من تخطيط دخول السوق إلى مسائل الاستثمار الأجنبي، يدعم فريقنا القانوني نمو الأعمال من خلال مشورة منظمة تناسب البيئات المؤسسية سريعة الحركة.",
    cta: {
      label: "اقرأ المزيد",
      href: "/services/foreign-investment-services",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة الشريحة الرابعة",
  },
  {
    id: "client-confidence",
    title: "حضور مهني قائم على الثقة",
    description:
      "يعكس نهجنا الوضوح والسرية والاعتماد المهني للشركات والمؤسسات وأصحاب المصلحة الذين يبحثون عن شريك قانوني طويل الأمد.",
    cta: {
      label: "اقرأ المزيد",
      href: "/#contact-us",
    },
    imageSrc: "/images/our-team/team-member-placeholder.png",
    imageAlt: "صورة الشريحة الخامسة",
  }
];

export const homePageContent: HomePageContent = {
  heroSlides: heroSlidesContent,
  ourTeam: ourTeamContent,
  customers: customersContent,
};
