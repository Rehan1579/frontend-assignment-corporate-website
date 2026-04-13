export interface FooterNavigationItem {
  labelKey: string;
  href: string;
}

export interface FooterSocialLink {
  labelKey: string;
  href: string;
  platform: "twitter" | "facebook" | "google";
}

export interface FooterContent {
  subscribePlaceholderKey: string;
  subscribeLabelKey: string;
  contactsLabelKey: string;
  navigation: FooterNavigationItem[];
  socialLinks: FooterSocialLink[];
  copyrightKey: string;
}
