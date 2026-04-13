import { StrapiService } from "@/strapi/services";
import { HomePageContent } from "@/types";

export const HomeService = {
  async getHomeContent(locale: string): Promise<HomePageContent> {
    return StrapiService.getHomeContent(locale);
  },
};
