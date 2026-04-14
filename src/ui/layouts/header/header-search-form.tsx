"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { useRouter } from "@/i18n/navigation";

interface HeaderSearchFormProps {
  onClose: () => void;
}

export function HeaderSearchForm(props: HeaderSearchFormProps) {
  const { onClose } = props;

  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      return;
    }

    const searchParams = new URLSearchParams({
      q: normalizedQuery,
      page: "1",
    });

    onClose();
    router.push(`/search?${searchParams.toString()}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <form className="ms-auto hidden flex-1 lg:flex" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder=""
        className="w-full rounded-[0.4rem] border border-[rgb(255_255_255_/_55%)] bg-transparent px-4 py-2 text-(--TXT-ON-DARK) outline-none placeholder:text-(--TXT-ON-DARK-SUBTLE)"
      />
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
}
