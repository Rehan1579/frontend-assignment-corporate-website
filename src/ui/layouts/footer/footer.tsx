import { footerContent } from "@/content";
import { getTranslations } from "next-intl/server";
import { FooterNavigationItem, FooterSocialLink } from "@/types";
import { Container } from "@/ui/components/shared/container";

import { FooterContacts } from "./footer-contacts";
import { FooterNav } from "./footer-nav";
import { FooterSubscribe } from "./footer-subscribe";

export async function Footer() {
  const t = await getTranslations("footer");
  const navigationItems: FooterNavigationItem[] = footerContent.navigation.map(
    (item) => ({
      labelKey: t(`navigation.${item.labelKey}`),
      href: item.href,
    }),
  );
  const socialLinks: FooterSocialLink[] = footerContent.socialLinks.map(
    (link) => ({
      labelKey: t(`social.${link.labelKey}`),
      href: link.href,
      platform: link.platform,
    }),
  );

  return (
    <footer className="bg-(--BG-DARK)">
      <Container>
        <div className="bg-(--BG-DARK) px-5 py-9 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-end">
            <FooterSubscribe
              placeholder={t(footerContent.subscribePlaceholderKey)}
              buttonLabel={t(footerContent.subscribeLabelKey)}
            />
            <FooterContacts
              label={t(footerContent.contactsLabelKey)}
              socialLinks={socialLinks}
            />
          </div>

          <div className="mt-7 border-t pt-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <FooterNav items={navigationItems} />
              <p className="text-sm text-(--TXT-ON-DARK)">
                {t(footerContent.copyrightKey)}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
