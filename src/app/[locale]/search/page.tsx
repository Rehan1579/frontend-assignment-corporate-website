import { Utils } from "@/lib";
import { SearchService } from "@/services";
import { SearchView } from "@/ui/views";

interface SearchRouteProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; q?: string }>;
}

export default async function SearchRoute(props: SearchRouteProps) {
  const { params, searchParams } = props;
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const page = Number.parseInt(resolvedSearchParams.page ?? "1", 10);
  const query = resolvedSearchParams.q ?? "";
  const results = await SearchService.search({
    locale,
    query,
    page: Number.isNaN(page) ? 1 : page,
  });
  const isRtl = Utils.isRtlLocale(locale);

  return <SearchView results={results} isRtl={isRtl} />;
}
