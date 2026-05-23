import Link from 'next/link';
import type { Locale } from '@/lib/i18n';

export default function PageHero({
  lang,
  homeLabel,
  crumb,
  eyebrow,
  title,
  intro,
}: {
  lang: Locale;
  homeLabel: string;
  crumb: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href={`/${lang}`}>{homeLabel}</Link>
          <span className="sep">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__intro">{intro}</p>
      </div>
    </section>
  );
}
