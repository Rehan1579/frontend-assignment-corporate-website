import { Link } from "@/i18n/navigation";
import { FooterNavigationItem } from "@/types";

interface FooterNavProps {
  items: FooterNavigationItem[];
}

export function FooterNav(props: FooterNavProps) {
  const { items } = props;

  return (
    <nav className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-(--TXT-ON-DARK)">
      {items.map((item) => (
        <Link
          key={item.labelKey}
          href={item.href}
          className="transition hover:text-(--TXT-ON-DARK-MUTED)"
        >
          {item.labelKey}
        </Link>
      ))}
    </nav>
  );
}
