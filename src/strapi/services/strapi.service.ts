import { homePageContent as arHomePageContent } from "@/strapi/content/ar/home.content";
import { homePageContent as enHomePageContent } from "@/strapi/content/en/home.content";
import { servicesContent as arServicesContent } from "@/strapi/content/ar/service.content";
import { servicesContent as enServicesContent } from "@/strapi/content/en/service.content";
import { HomePageContent, ServiceDetail } from "@/types";

export const StrapiService = {
	async getServiceContent(locale: string): Promise<ServiceDetail[]> {
		return locale === "ar" ? arServicesContent : enServicesContent;
	},

	async getHomeContent(locale: string): Promise<HomePageContent> {
		return locale === "ar" ? arHomePageContent : enHomePageContent;
	},
};
