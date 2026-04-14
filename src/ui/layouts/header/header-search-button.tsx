import { Search } from "lucide-react";

interface HeaderSearchButtonProps {
  onClick: () => void;
}

export function HeaderSearchButton(props: HeaderSearchButtonProps) {
  const { onClick } = props;

  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center text-[var(--ICON-ON-DARK)]"
      onClick={onClick}
    >
      <Search size={17} />
    </button>
  );
}
