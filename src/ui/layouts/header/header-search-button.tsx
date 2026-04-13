import { Search } from "lucide-react";

export function HeaderSearchButton() {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center text-[var(--ICON-ON-DARK)]"
    >
      <Search size={17} />
    </button>
  );
}
