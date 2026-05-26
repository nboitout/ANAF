import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { SITE } from '@/lib/site';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale } from '@/lib/i18n';

export { generateStaticParams } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return { title: d.meta.contact.title, description: d.meta.contact.desc };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const d = getDictionary(lang);
  const c = d.contact;
  const channelDesc = [
    `${c.channels[0].desc}`,
    `${c.channels[1].desc} ${SITE.callCenter}`.trim(),
    `${SITE.email}`,
  ];

  return (
    <>
      <PageHero lang={lang} homeLabel={d.common.home} crumb={c.crumb} eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {c.channels.map((ch, i) => (
              <div key={ch.title} className="card cell">
                <span className="card__icon"><Icon name={ch.icon} size={24} /></span>
                <span className="card__title">{ch.title}</span>
                <span className="card__desc">{channelDesc[i]}</span>
                <span className="card__link">
                  {ch.action} <Icon name="arrow" size={16} className="icon arrow" strokeWidth={2} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{c.officesEyebrow}</span>
            <h2 className="section-title">{c.officesTitle}</h2>
            <p className="section-intro">{c.officesIntro}</p>
          </div>
          <div className="grid grid--3">
            {c.offices.map((o) => (
              <div key={o.city} className="card cell">
                <div className="meta-line">
                  <span className="card__icon"><Icon name="building" size={24} /></span>
                </div>
                <span className="card__title">{o.city}</span>
                <span className="card__desc">{o.region}</span>
                <div className="info-list" style={{ marginTop: 'var(--sp1)' }}>
                  <div className="info-item">
                    <Icon name="pin" size={18} />
                    <span className="info-item__value" style={{ fontWeight: 400 }}>{o.addr}</span>
                  </div>
                  <div className="info-item">
                    <Icon name="phone" size={18} />
                    <span className="info-item__value" style={{ fontWeight: 400 }}>{o.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
