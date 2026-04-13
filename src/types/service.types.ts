export interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  description: string;
  categories: ServiceCategory[];
  closingRemarks: string;
}
