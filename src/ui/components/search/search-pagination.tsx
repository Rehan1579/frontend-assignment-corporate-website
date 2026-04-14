"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ReactPaginate, { type ReactPaginateProps } from "react-paginate";

import { usePathname, useRouter } from "@/i18n/navigation";
import { SearchPagination as SearchPaginationType } from "@/types";

interface SearchPaginationProps {
  isRtl: boolean;
  pagination: SearchPaginationType;
  query: string;
}

export function SearchPagination(props: SearchPaginationProps) {
  const { pagination, query, isRtl } = props;

  const pathname = usePathname();
  const router = useRouter();

  if (pagination.totalPages <= 1) {
    return null;
  }

  const PreviousIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  const handlePageChange = (event: {selected: number}) => {
    const searchParams = new URLSearchParams({
      q: query,
      page: String(event.selected + 1),
    });

    router.push(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <ReactPaginate
      pageCount={pagination.totalPages}
      forcePage={pagination.page - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      breakLabel="..."
      previousLabel={<PreviousIcon size={16} />}
      nextLabel={<NextIcon size={16} />}
      disableInitialCallback
      onPageChange={handlePageChange}
      className={`mt-8 flex items-center gap-1 ${
        isRtl ? "justify-end" : "justify-start"
      }`}
      pageLinkClassName="inline-flex min-w-8 items-center justify-center px-2 text-(--TXT-LIGHT)"
      activeClassName="border-b border-(--TXT-BRAND)"
      activeLinkClassName="text-(--TXT-BRAND)"
      previousLinkClassName="inline-flex min-w-8 items-center justify-center px-2 text-(--TXT-LIGHT)"
      nextLinkClassName="inline-flex min-w-8 items-center justify-center px-2 text-(--TXT-LIGHT)"
      breakLinkClassName="inline-flex min-w-8 items-center justify-center px-2 text-(--TXT-LIGHT)"
      disabledLinkClassName="text-(--TXT-ON-DARK-SUBTLE)"
    />
  );
}
