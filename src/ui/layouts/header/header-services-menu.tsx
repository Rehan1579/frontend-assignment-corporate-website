"use client";

import { ChevronDown } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { HeaderNavigationLink, HeaderServiceItem } from "@/types";

interface HeaderServicesMenuProps {
  link: HeaderNavigationLink;
  services: HeaderServiceItem[];
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
  className: string;
}

export function HeaderServicesMenu(props: HeaderServicesMenuProps) {
  const { link, services, isOpen, onToggle, onOpen, onClose, className } = props;

  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`${className} inline-flex items-center gap-1`}
        onClick={onToggle}
      >
        {link.label}
        <ChevronDown size={16} className={isOpen ? "rotate-180" : ""} />
      </button>

      <div
        className={`absolute left-1/2 top-full z-40 mt-5 w-[min(92vw,960px)] -translate-x-1/2 rounded-[1.75rem] bg-[var(--BG-DARK)] p-8 text-left transition-all duration-200 ${
          isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className="text-sm leading-6 text-[var(--TXT-ON-DARK-MUTED)]"
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
