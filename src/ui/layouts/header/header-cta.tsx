import Link from "next/link";

interface HeaderCtaProps {
  label: string;
}

export function HeaderCta(props: HeaderCtaProps) {
  const { label } = props;

  return (
    <Link
      href="#book-appointment"
      className="inline-flex items-center rounded-xl border border-[var(--TXT-ON-DARK-MUTED)] bg-[var(--BG-DARK)] px-4 py-2.5 text-sm font-medium text-[var(--BTN-PRIMARY-TXT)]"
    >
      {label}
    </Link>
  );
}
