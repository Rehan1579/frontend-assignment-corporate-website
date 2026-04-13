import { ServiceCategory as ServiceCategoryInfo } from "@/types";

interface ServiceCategoryProps {
  category: ServiceCategoryInfo;
}

export function ServiceCategory(props: ServiceCategoryProps) {
  const { category } = props;

    return (
    <section>
      <h2 className="text-xl font-semibold text-(--TXT-BRAND) sm:text-2xl">
        {category.title}
      </h2>

      <div className="mt-6 flex gap-6">
        <div className="flex flex-col items-center pt-1">
          <span className="h-3 w-3 rounded-[2px] bg-(--BG-DARK)" />
          <span className="mt-3 min-h-16 w-px flex-1 bg-(--BG-DARK-SHADE) opacity-15" />
        </div>

        <div className="flex-1">
          <p className="text-base font-medium leading-8 text-(--TXT-LIGHT) sm:text-lg">
            {category.description}
          </p>

          {category.items.length > 0 ? (
            <ul className="mt-6 space-y-2.5 ps-4 text-[15px] leading-8 text-(--TXT-LIGHT) marker:text-(--TXT-BRAND)">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
