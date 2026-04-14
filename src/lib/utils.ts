import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const Utils = {
  cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  },

  isRtlLocale(locale: string) {
    return locale === "ar";
  },

  truncateDescription(description: string, maxLength = 200) {
    if (description.length <= maxLength) {
      return description;
    }

    return `${description.slice(0, maxLength).trimEnd()}...`;
  },
};
