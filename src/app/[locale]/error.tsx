"use client";

import { useTranslations } from "next-intl";

interface LocaleErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LocaleError(props: LocaleErrorProps) {
  const { reset } = props;
  const t = useTranslations("appError");

  return (
    <section className="bg-[#f6f3f0] py-14 text-center sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 lg:px-10">
        <h1 className="text-display text-5xl leading-none text-[#5c3422] sm:text-6xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#777777] sm:text-lg">
          {t("description")}
        </p>
        <button
          type="button"
          className="mt-8 inline-flex items-center rounded-xl border border-[#5c3422] px-4 py-2.5 text-sm font-medium text-[#5c3422] transition hover:bg-[#5c3422] hover:text-white"
          onClick={reset}
        >
          {t("tryAgain")}
        </button>
      </div>
    </section>
  );
}
