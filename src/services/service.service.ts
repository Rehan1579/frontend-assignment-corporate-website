import { StrapiService } from "@/strapi/services";
import { ServiceDetail } from "@/types";

export const ServicesService = {
  async getServiceDetailBySlug(
    locale: string,
    slug: string,
  ): Promise<ServiceDetail | undefined> {
    const servicesContent = await StrapiService.getServiceContent(locale);

    return servicesContent.find((service) => service.slug === slug);
  },
};
