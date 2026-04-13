import {
  HeaderLanguageOptionContent,
  HeaderServiceItem,
  HeaderNavigationItemContent,
} from "@/types";

export const headerNavigationLinks: HeaderNavigationItemContent[] = [
  { labelKey: "home", href: "/", type: "link" },
  { labelKey: "aboutUs", href: "/#about-us", type: "link" },
  {
    labelKey: "services",
    href: "/services/legal-consultation-services",
    type: "services",
  },
  { labelKey: "blogs", href: "/#blogs", type: "link" },
  { labelKey: "ourTeam", href: "/#our-team", type: "link" },
  { labelKey: "contactUs", href: "/#contact-us", type: "link" },
];

export const headerServices: HeaderServiceItem[] = [
  { label: "Legal Consultation Services", href: "/services/legal-consultation-services" },
  { label: "Foreign Investment Services", href: "/services/foreign-investment-services" },
  { label: "Contracts", href: "/services/contracts" },
  { label: "Notarization", href: "/services/notarization" },
  { label: "Banks and Financial Institutions", href: "/services/banks-and-financial-institutions" },
  { label: "Corporate Governance Services", href: "/services/corporate-governance-services" },
  { label: "Companies Liquidation", href: "/services/companies-liquidation" },
  { label: "Internal Regulations for Companies", href: "/services/internal-regulations-for-companies" },
  { label: "Arbitration", href: "/services/arbitration" },
  { label: "Intellectual Property", href: "/services/intellectual-property" },
  {
    label: "Corporate Restructuring and Reorganization",
    href: "/services/corporate-restructuring-and-reorganization",
  },
  {
    label: "Services for Companies and Institutions",
    href: "/services/services-for-companies-and-institutions",
  },
  {
    label: "Establishing National and Foreign Companies",
    href: "/services/establishing-national-and-foreign-companies",
  },
  { label: "Commercial Agencies", href: "/services/commercial-agencies" },
  { label: "Supporting Vision 2030", href: "/services/supporting-vision-2030" },
  { label: "Estates", href: "/services/estates" },
];

export const headerLanguages: HeaderLanguageOptionContent[] = [
  { code: "en", labelKey: "english" },
  { code: "ar", labelKey: "arabic" },
];
