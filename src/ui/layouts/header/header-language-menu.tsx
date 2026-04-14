"use client";

import { ChevronDown } from "lucide-react";
import { ChangeEvent } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import { usePathname, useRouter } from "@/i18n/navigation";
import { HeaderLanguageOption } from "@/types";

interface HeaderLanguageMenuProps {
  languages: HeaderLanguageOption[];
}

export function HeaderLanguageMenu(props: HeaderLanguageMenuProps) {
  const { languages } = props;

  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    if (nextLocale === currentLocale) {
      return;
    }

    const nextSearchParams = new URLSearchParams(searchParams.toString());
    const nextPath = nextSearchParams.size
      ? `${pathname}?${nextSearchParams.toString()}`
      : pathname;

    router.replace(nextPath, { locale: nextLocale });
  };

  return (
    <div className="relative inline-flex items-center">
      <select
        value={currentLocale}
        onChange={handleLocaleChange}
        className="appearance-none bg-transparent pe-6 ps-2 text-(--TXT-ON-DARK-MUTED) outline-none"
      >
        {languages.map((language) => (
          <option
            key={language.code}
            value={language.code}
            className="bg-(--BG-DARK) text-(--TXT-ON-DARK)"
          >
            {language.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute end-0 text-(--TXT-ON-DARK-MUTED)">
        <ChevronDown size={15} />
      </span>
    </div>
  );
}
