import { Link } from "@/i18n/navigation";
import { HeaderNavigationLink, HeaderServiceItem } from "@/types";

import { HeaderServicesMenu } from "./header-services-menu";

interface HeaderNavProps {
  links: HeaderNavigationLink[];
  services: HeaderServiceItem[];
  isServicesOpen: boolean;
  onServicesToggle: () => void;
  onServicesOpen: () => void;
  onServicesClose: () => void;
}

export function HeaderNav(props: HeaderNavProps) {
  const {
    links,
    services,
    isServicesOpen,
    onServicesToggle,
    onServicesOpen,
    onServicesClose,
  } = props;

  return (
    <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex">
      {links.map((link, index) => {
        const linkClassName =
          index === 0
            ? "text-sm font-medium text-[var(--TXT-ON-DARK)]"
            : "text-sm font-medium text-[var(--TXT-ON-DARK-MUTED)]";

        if (link.type === "services") {
          return (
            <HeaderServicesMenu
              key={link.label}
              link={link}
              services={services}
              isOpen={isServicesOpen}
              onToggle={onServicesToggle}
              onOpen={onServicesOpen}
              onClose={onServicesClose}
              className={linkClassName}
            />
          );
        }

        return (
          <Link key={link.label} href={link.href} className={linkClassName}>
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
