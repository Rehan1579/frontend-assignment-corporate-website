import { homePageContent as arHomePageContent } from "@/strapi/content/ar/home.content";
import { homePageContent as enHomePageContent } from "@/strapi/content/en/home.content";
import { servicesContent as arServicesContent } from "@/strapi/content/ar/service.content";
import { servicesContent as enServicesContent } from "@/strapi/content/en/service.content";
import {
	HomePageContent,
	SearchContentResults,
	SearchRequest,
	ServiceDetail,
} from "@/types";

const DEFAULT_PAGE_SIZE = 10;

function getSearchableServiceContent(service: ServiceDetail): string {
	return [
		service.title,
		service.description,
		service.closingRemarks,
		...service.categories.flatMap((category) => [
			category.title,
			category.description,
			...category.items,
		]),
	].join(" ");
}

export const StrapiService = {
	async getServiceContent(locale: string): Promise<ServiceDetail[]> {
		return locale === "ar" ? arServicesContent : enServicesContent;
	},

	async searchServiceContent(
		request: SearchRequest,
	): Promise<SearchContentResults> {
		const normalizedQuery = request.query.trim();
		const normalizedPage = request.page && request.page > 0 ? request.page : 1;
		const normalizedSearchTerm = normalizedQuery.toLocaleLowerCase();
		const servicesContent = request.locale === "ar" ? arServicesContent : enServicesContent;

		if (!normalizedSearchTerm) {
			return {
				query: normalizedQuery,
				items: [],
				pagination: {
					page: normalizedPage,
					pageSize: DEFAULT_PAGE_SIZE,
					total: 0,
					totalPages: 0,
				},
			};
		}

		const matchedServices = servicesContent.filter((service) =>
			getSearchableServiceContent(service)
				.toLocaleLowerCase()
				.includes(normalizedSearchTerm),
		);
		const total = matchedServices.length;
		const totalPages = total === 0 ? 0 : Math.ceil(total / DEFAULT_PAGE_SIZE);
		const startIndex = (normalizedPage - 1) * DEFAULT_PAGE_SIZE;
		const paginatedServices = matchedServices.slice(
			startIndex,
			startIndex + DEFAULT_PAGE_SIZE,
		);

		return {
			query: normalizedQuery,
			items: paginatedServices,
			pagination: {
				page: normalizedPage,
				pageSize: DEFAULT_PAGE_SIZE,
				total,
				totalPages,
			},
		};
	},

	async getHomeContent(locale: string): Promise<HomePageContent> {
		return locale === "ar" ? arHomePageContent : enHomePageContent;
	},
};
