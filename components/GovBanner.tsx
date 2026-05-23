'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export default function GovBanner({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname() || `/${lang}`;

  const swapTo = (target: Locale) => {
    const parts = pathname.split('/');
    parts[1] = target;
    return parts.join('/') || `/${target}`;
  };

  return (
    <div className="gov-banner">
      <div className="container gov-banner__inner">
        <span className="tricolor" role="img" aria-label="Flag of Romania" />
        <span className="gov-banner__text">
          <span className="gov-banner__name">{dict.gov.country}</span>
          <span className="gov-banner__sub">{dict.gov.line}</span>
        </span>
        <div className="gov-banner__lang" role="group" aria-label="Language / Limbă">
          <Link href={swapTo('ro')} className="lang-btn" aria-current={lang === 'ro'} hrefLang="ro" prefetch={false}>
            RO
          </Link>
          <Link href={swapTo('en')} className="lang-btn" aria-current={lang === 'en'} hrefLang="en" prefetch={false}>
            EN
          </Link>
        </div>
      </div>
    </div>
  );
}
