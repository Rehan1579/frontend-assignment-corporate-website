import Link from "next/link";

import { SearchResults } from "@/types";
import { Utils } from "@/lib";
import { SearchNoResults, SearchPagination } from "@/ui/components/search";
import { Container } from "@/ui/components/shared";

interface SearchViewProps {
	isRtl: boolean;
	results: SearchResults;
}

export function SearchView(props: SearchViewProps) {
	const { results, isRtl } = props;
	const hasQuery = results.query.length > 0;
	const hasResults = results.items.length > 0;

	if (!hasQuery) {
		return <section className="flex-1 w-full bg-(--BG-LIGHT)" />;
	}

	if (!hasResults) {
		return <SearchNoResults isRtl={isRtl} />;
	}

	return (
		<section className="bg-(--BG-LIGHT) py-14 sm:py-18 lg:py-24">
			<Container>
				<div className={`mx-auto max-w-5xl ${isRtl ? "text-right" : "text-left"}`} dir={isRtl ? "rtl" : "ltr"}>
					<div className="border-t border-[rgb(30_30_30_/_12%)]">
						{results.items.map((item) => (
							<article key={item.id} className="border-b border-[rgb(30_30_30_/_12%)] py-8">
								<h2 className="text-lg leading-7 font-bold text-(--TXT-BRAND)">{item.title}</h2>
								<p className="mt-3 max-w-3xl text-sm leading-7 text-(--TXT-LIGHT)">
									{Utils.truncateDescription(item.description)}
								</p>
								<Link
									className="mt-4 inline-flex text-sm underline underline-offset-2 text-(--TXT-BRAND) transition-colors duration-200 hover:text-(--BTN-PRIMARY-HOVER)"
									href={item.href}
								>
									Read More
								</Link>
							</article>
						))}
					</div>
					<SearchPagination isRtl={isRtl} pagination={results.pagination} query={results.query} />
				</div>
			</Container>
		</section>
	);
}
