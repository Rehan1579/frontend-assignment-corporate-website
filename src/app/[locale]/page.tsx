import { HomeService } from "@/services";
import { Utils } from "@/lib";
import { HomeView } from "@/ui/views";

interface HomeRouteProps {
  params: Promise<{ locale: string }>;
}

export default async function HomeRoute(props: HomeRouteProps) {
  const { params } = props;
  const { locale } = await params;
  const content = await HomeService.getHomeContent(locale);
  const isRtl = Utils.isRtlLocale(locale);

  return <HomeView content={content} isRtl={isRtl} />;
}
