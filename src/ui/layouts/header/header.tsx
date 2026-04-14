"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import {
  headerLanguages,
  headerNavigationLinks,
  headerServices,
} from "@/content";
import { Link } from "@/i18n/navigation";
import { HeaderLanguageOption, HeaderNavigationLink } from "@/types";

import { BrandMark } from "@/ui/components/shared/brand-mark";
import { Container } from "@/ui/components/shared/container";

import { HeaderCta } from "./header-cta";
import { HeaderLanguageMenu } from "./header-language-menu";
import { HeaderNav } from "./header-nav";
import { HeaderSearchButton } from "./header-search-button";
import { HeaderSearchForm } from "./header-search-form";

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("header");

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const translatedNavigationLinks: HeaderNavigationLink[] =
    headerNavigationLinks.map((link) => ({
      ...link,
      label: t(link.labelKey),
    }));

  const translatedLanguages: HeaderLanguageOption[] = headerLanguages.map(
    (language) => ({
      code: language.code,
      label: t(language.labelKey),
    }),
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isScrolled || isServicesOpen || isSearchOpen
          ? "bg-[var(--BG-DARK)]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center gap-4 py-4 lg:gap-6">
        <Link
          href="/"
          className="shrink-0"
          onClick={() => setIsSearchOpen(false)}
        >
          <BrandMark />
        </Link>

        {isSearchOpen ? (
          <HeaderSearchForm onClose={() => setIsSearchOpen(false)} />
        ) : (
          <>
            <HeaderNav
              links={translatedNavigationLinks}
              services={headerServices}
              isServicesOpen={isServicesOpen}
              onServicesToggle={() => setIsServicesOpen((current) => !current)}
              onServicesOpen={() => setIsServicesOpen(true)}
              onServicesClose={() => setIsServicesOpen(false)}
            />

            <div className="ms-auto hidden items-center gap-2 lg:flex">
              <HeaderSearchButton
                onClick={() => {
                  setIsServicesOpen(false);
                  setIsSearchOpen(true);
                }}
              />
              <HeaderLanguageMenu languages={translatedLanguages} />
              <HeaderCta label={t("bookAppointment")} />
            </div>
          </>
        )}
      </Container>
    </header>
  );
}
