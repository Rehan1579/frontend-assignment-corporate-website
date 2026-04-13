import { Facebook, Globe, Twitter } from "lucide-react";

import { FooterSocialLink } from "@/types";

interface FooterContactsProps {
  label: string;
  socialLinks: FooterSocialLink[];
}

function getSocialIcon(platform: FooterSocialLink["platform"]) {
  if (platform === "twitter") {
    return <Twitter size={14} strokeWidth={1.8} />;
  }

  if (platform === "facebook") {
    return <Facebook size={14} strokeWidth={1.8} />;
  }

  return <Globe size={14} strokeWidth={1.8} />;
}

export function FooterContacts(props: FooterContactsProps) {
  const { label, socialLinks } = props;

  return (
    <div className="flex items-center gap-6 text-sm text-(--TXT-ON-DARK)">
      <span>{label}</span>

      <div className="flex items-center gap-5 text-(--TXT-ON-DARK)">
        {socialLinks.map((link) => (
          <a
            key={link.labelKey}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.labelKey}
            className="inline-flex items-center justify-center text-(--TXT-ON-DARK) transition hover:text-(--TXT-ON-DARK-MUTED)"
          >
            {getSocialIcon(link.platform)}
          </a>
        ))}
      </div>
    </div>
  );
}
