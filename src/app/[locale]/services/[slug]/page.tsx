import { notFound } from "next/navigation";

import { isRtlLocale } from "@/lib";
import { ServicesService } from "@/services";
import { ServiceDetailView } from "@/ui/views";

interface ServiceDetailRouteProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ServiceDetailRoute(props: ServiceDetailRouteProps) {
  const { params } = props;
  const { locale, slug } = await params;
  const isRtl = isRtlLocale(locale);
  const service = await ServicesService.getServiceDetailBySlug(locale, slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} isRtl={isRtl} />;
}
