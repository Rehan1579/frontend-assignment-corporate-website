import { ServiceDetail } from "./service.types";

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface SearchPagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface SearchResults {
  query: string;
  items: SearchResultItem[];
  pagination: SearchPagination;
}

export interface SearchContentResults {
  query: string;
  items: ServiceDetail[];
  pagination: SearchPagination;
}

export interface SearchRequest {
  locale: string;
  query: string;
  page?: number;
}
