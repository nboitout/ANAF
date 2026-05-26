import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale } from '@/lib/i18n';

export { generateStaticParams } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return { title: d.meta.services.title, description: d.meta.services.desc };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const d = getDictionary(lang);
  const s = d.services;
  const p = (href: string) => `/${lang}${href}`;

  return (
    <>
      <PageHero lang={lang} homeLabel={d.common.home} crumb={s.crumb} eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {s.items.map((item) => (
              <div key={item.title} className="card card--svc cell">
                <span className="card__icon"><Icon name={item.icon} size={24} /></span>
                <div className="meta-line">
                  <span className="card__title">{item.title}</span>
                  {item.tag && <span className={`tag tag--${item.tag.variant}`}>{item.tag.label}</span>}
                </div>
                <span className="card__desc">{item.desc}</span>
                <span className="card__link">
                  {s.open} <Icon name="arrow" size={16} className="icon arrow" strokeWidth={2} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{s.steps.eyebrow}</span>
            <h2 className="section-title">{s.steps.title}</h2>
          </div>
          <div className="grid grid--3">
            {s.steps.list.map((step) => (
              <div key={step.n} className="card cell">
                <span className="portal__icon" aria-hidden="true">{step.n}</span>
                <span className="card__title">{step.title}</span>
                <span className="card__desc">{step.text}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--sp8)' }}>
            <div className="notice notice--ok">
              <Icon name="check" size={20} />
              <span>
                <span className="notice__title">{s.steps.freeTitle}</span>
                <br />
                <span className="notice__text">{s.steps.freeText}</span>
              </span>
            </div>
          </div>
          <div className="hero__actions">
            <Link href={p('/forms')} className="btn btn--primary btn--lg">
              {s.steps.goForms} <Icon name="arrow" size={18} className="icon arrow" strokeWidth={2} />
            </Link>
            <Link href={p('/contact')} className="btn btn--secondary btn--lg">{s.steps.needHelp}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
