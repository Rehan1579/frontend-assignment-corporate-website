"use client";

import { useTranslations } from "next-intl";
import { Container } from "../shared";

interface SearchNoResultsProps {
	isRtl: boolean;
}

export function SearchNoResults(props: SearchNoResultsProps) {
	const { isRtl } = props;
	const t = useTranslations("search");

	return (
		<section className="flex flex-1 items-start bg-(--BG-LIGHT) py-14 sm:py-18 lg:py-24">
			<Container>
				<p className={`text-sm text-(--TXT-LIGHT) ${isRtl ? "text-right" : "text-left"}`}>{t("noResults")}</p>
			</Container>
		</section>
	);
}
