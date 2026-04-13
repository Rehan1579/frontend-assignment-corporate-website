import { FooterContent } from "@/types";

export const footerContent: FooterContent = {
  subscribePlaceholderKey: "subscribePlaceholder",
  subscribeLabelKey: "subscribeLabel",
  contactsLabelKey: "contactsLabel",
  navigation: [
    { labelKey: "about", href: "/#about-us" },
    { labelKey: "ourStrategy", href: "/#our-strategy" },
    { labelKey: "ourAdvantages", href: "/#our-advantages" },
    { labelKey: "socialResponsibility", href: "/#social-responsibility" },
  ],
  socialLinks: [
    { labelKey: "twitter", href: "https://twitter.com", platform: "twitter" },
    { labelKey: "facebook", href: "https://facebook.com", platform: "facebook" },
    { labelKey: "google", href: "https://google.com", platform: "google" },
  ],
  copyrightKey: "copyright",
};
