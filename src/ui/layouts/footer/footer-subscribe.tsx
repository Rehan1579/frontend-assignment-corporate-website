"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSubscriber } from "@/hooks";

interface FooterSubscribeProps {
  placeholder: string;
  buttonLabel: string;
}

export function FooterSubscribe(props: FooterSubscribeProps) {
  const { placeholder, buttonLabel } = props;
  const t = useTranslations("footer");
  const { formik, canSubmit, submitStatus, clearSubmitStatus } =
    useSubscriber();

  useEffect(() => {
    if (!submitStatus) {
      return;
    }

    const statusMessageMap = {
      duplicate: t("alreadySubscribed"),
      success: t("subscribed"),
    } as const;

    window.alert(statusMessageMap[submitStatus]);
    clearSubmitStatus();
  }, [clearSubmitStatus, submitStatus, t]);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    formik.handleSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="flex items-center overflow-hidden rounded-[0.55rem] bg-(--BG-LIGHT) p-1">
        <input
          id="footer-subscribe-email"
          name="email"
          type="email"
          placeholder={placeholder}
          value={formik.values.email}
          onChange={formik.handleChange}
          className="h-9 min-w-[130px] bg-transparent px-3 text-sm text-(--TXT-STRONG) outline-none placeholder:text-(--TXT-LIGHT)"
        />
        <button
          type="submit"
          className="inline-flex h-8 items-center rounded-[0.4rem] bg-(--BTN-PRIMARY-BG) px-4 text-xs font-medium text-(--BTN-PRIMARY-TXT) transition hover:bg-(--BTN-PRIMARY-HOVER)"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
