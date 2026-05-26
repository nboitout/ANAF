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
  return { title: d.meta.about.title, description: d.meta.about.desc };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const d = getDictionary(lang);
  const a = d.about;
  const p = (href: string) => `/${lang}${href}`;

  return (
    <>
      <PageHero lang={lang} homeLabel={d.common.home} crumb={a.crumb} eyebrow={a.eyebrow} title={a.title} intro={a.intro} />

      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>{a.missionH}</h2>
            <p>{a.missionP1}</p>
            <p>{a.missionP2}</p>

            <h2>{a.doH}</h2>
            <ul className="bullets">
              {a.doList.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>

          <div className="section-head" style={{ marginTop: 'var(--sp16)' }}>
            <span className="eyebrow">{a.valuesEyebrow}</span>
            <h2 className="section-title">{a.valuesTitle}</h2>
          </div>
          <div className="grid grid--4">
            {a.values.map((v) => (
              <div key={v.title} className="card cell">
                <span className="card__icon"><Icon name={v.icon} size={24} /></span>
                <span className="card__title">{v.title}</span>
                <span className="card__desc">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="cta__title">{a.ctaTitle}</h2>
            <p className="cta__sub">{a.ctaSub}</p>
          </div>
          <div className="cta__actions">
            <Link href={p('/services')} className="btn btn--white btn--lg">
              <Icon name="login" size={18} /> {a.ctaServices}
            </Link>
            <Link href={p('/contact')} className="btn btn--white-outline btn--lg">{a.ctaContact}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
