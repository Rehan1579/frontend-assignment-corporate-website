import { StrapiService } from "@/strapi/services";
import { SearchRequest, SearchResults } from "@/types";

export const SearchService = {
	async search(request: SearchRequest): Promise<SearchResults> {
		const searchContent = await StrapiService.searchServiceContent(request);

		return {
			query: searchContent.query,
			items: searchContent.items.map((service) => {
				return {
					id: service.slug,
					title: service.title,
					description: service.description,
					href: `/${request.locale}/services/${service.slug}`,
				};
			}),
			pagination: searchContent.pagination,
		};
	},
};
