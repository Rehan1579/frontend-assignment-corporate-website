import { ServiceDetail } from "@/types";
import {
  ServiceCategory,
  ServiceClosingRemarks,
} from "@/ui/components/services";
import { Container } from "@/ui/components/shared/container";

interface ServiceDetailViewProps {
  service: ServiceDetail;
  isRtl: boolean;
}

export function ServiceDetailView(props: ServiceDetailViewProps) {
  const { service, isRtl } = props;

  return (
    <section className="bg-(--BG-LIGHT) py-14 sm:py-18 lg:py-24">
      <Container>
        <div
          className={`mx-auto max-w-6xl ${isRtl ? "text-right" : "text-left"}`}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <header className="max-w-5xl">
            <h1 className="text-display text-5xl leading-none text-(--TXT-BRAND) sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-10 text-base leading-8 text-(--TXT-LIGHT) sm:text-lg">
              {service.description}
            </p>
          </header>

          <div className="mt-10 space-y-12 sm:mt-14 sm:space-y-14">
            {service.categories.map((category) => (
              <ServiceCategory key={category.title} category={category} />
            ))}
          </div>

          <div className="mt-14 sm:mt-18">
            <ServiceClosingRemarks content={service.closingRemarks} />
          </div>
        </div>
      </Container>
    </section>
  );
}
