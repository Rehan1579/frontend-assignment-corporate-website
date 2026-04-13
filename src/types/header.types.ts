export interface HeaderNavigationLink {
  label: string;
  href: string;
  type?: "link" | "services";
}

export interface HeaderServiceItem {
  label: string;
  href: string;
}

export interface HeaderLanguageOption {
  code: string;
  label: string;
}

export interface HeaderNavigationItemContent {
  labelKey: string;
  href: string;
  type?: "link" | "services";
}

export interface HeaderLanguageOptionContent {
  code: string;
  labelKey: string;
}
