import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import SearchBar from '@/components/SearchBar';
import NewsBlock from '@/components/NewsBlock';
import ProtoStrip from '@/components/ProtoStrip';
import { SITE } from '@/lib/site';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale } from '@/lib/i18n';

export { generateStaticParams } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return { title: d.meta.home.title, description: d.meta.home.desc };
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const d = getDictionary(lang);
  const h = d.home;
  const p = (href: string) => `/${lang}${href}`;

  return (
    <>
      <ProtoStrip dict={d} />

      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">{h.hero.eyebrow}</span>
            <h1 className="hero__title">
              {h.hero.titleA} <span className="hl">{h.hero.titleHL}</span>
            </h1>
            <p className="hero__subtitle">{h.hero.subtitle}</p>
            <SearchBar search={d.search} />
            <div className="hero__actions">
              <Link href={p('/services')} className="btn btn--primary btn--lg">
                <Icon name="login" size={18} /> {h.hero.accessSpv}
              </Link>
              <Link href={p('/forms')} className="btn btn--secondary btn--lg">
                {h.hero.browseForms} <Icon name="arrow" size={18} className="icon arrow" strokeWidth={2} />
              </Link>
            </div>
          </div>

          <aside className="portal" aria-label={h.portal.label}>
            <div className="portal__head">
              <span className="portal__icon"><Icon name="shield" size={22} /></span>
              <span>
                <span className="portal__title">{h.portal.title}</span>
                <br />
                <span className="portal__sub">{h.portal.sub}</span>
              </span>
            </div>
            <Link href={p('/services')} className="btn btn--primary btn--block">
              <Icon name="login" size={18} /> {h.portal.login}
            </Link>
            <div className="portal__tiles">
              {h.portal.tiles.map((t) => (
                <Link key={t.label} href={p('/services')} className="quick-tile">
                  <Icon name={t.icon} size={20} />
                  <span className="quick-tile__label">{t.label}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{h.services.eyebrow}</span>
            <h2 className="section-title">{h.services.title}</h2>
            <p className="section-intro">{h.services.intro}</p>
          </div>
          <div className="grid grid--3">
            {h.services.items.map((s) => (
              <Link key={s.title} href={p('/services')} className="card card--svc cell">
                <span className="card__icon"><Icon name={s.icon} size={24} /></span>
                <span className="card__title">{s.title}</span>
                <span className="card__desc">{s.desc}</span>
                <span className="card__link">
                  {h.services.learnMore} <Icon name="arrow" size={16} className="icon arrow" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">{h.stats.eyebrow}</span>
            <h2 className="section-title">{h.stats.title}</h2>
          </div>
          <div className="stats">
            {h.stats.items.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{h.news.eyebrow}</span>
            <h2 className="section-title">{h.news.title}</h2>
          </div>
          <NewsBlock news={h.news} />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="cta__title">{h.cta.title}</h2>
            <p className="cta__sub">{h.cta.sub}</p>
          </div>
          <div className="cta__actions">
            <Link href={p('/contact')} className="btn btn--white btn--lg">
              <Icon name="bot" size={18} /> {h.cta.askAna}
            </Link>
            <a href={`tel:${SITE.callCenter.replace(/\s/g, '')}`} className="btn btn--white-outline btn--lg">
              <Icon name="phone" size={18} /> {SITE.callCenter}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
