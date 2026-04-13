import { CustomersContent } from "@/types";

import { CustomersCarousel } from "./customers-carousel";

interface CustomersSectionProps {
  content: CustomersContent;
  isRtl: boolean;
}

export function CustomersSection(props: CustomersSectionProps) {
  const { content, isRtl } = props;

  return (
    <section id="customers" className="bg-(--BG-DARK) py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className={`max-w-4xl ${isRtl ? "ms-auto text-right" : ""}`}>
          <h2 className="text-display text-5xl leading-none text-(--TXT-ON-DARK)">
            {content.title}
          </h2>
          <p className={`mt-5 max-w-2xl text-base leading-8 text-(--TXT-ON-DARK-MUTED) ${isRtl ? "ms-auto" : ""}`}>
            {content.description}
          </p>
        </div>

        <CustomersCarousel testimonials={content.testimonials} isRtl={isRtl} />
      </div>
    </section>
  );
}
