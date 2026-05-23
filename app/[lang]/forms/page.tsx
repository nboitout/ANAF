import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import SearchBar from '@/components/SearchBar';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale } from '@/lib/i18n';

export { generateStaticParams } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDictionary(lang);
  return { title: d.meta.forms.title, description: d.meta.forms.desc };
}

export default async function FormsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const d = getDictionary(lang);
  const f = d.forms;

  return (
    <>
      <PageHero lang={lang} homeLabel={d.common.home} crumb={f.crumb} eyebrow={f.eyebrow} title={f.title} intro={f.intro} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 'var(--sp10)' }}>
            <SearchBar search={d.search} />
          </div>

          <div className="section-head">
            <span className="eyebrow">{f.listEyebrow}</span>
            <h2 className="section-title">{f.listTitle}</h2>
          </div>

          <div className="rows">
            {f.rows.map((row) => (
              <a key={row.code} href="#" className="row">
                <span className="row__code">{row.code}</span>
                <span>
                  <span className="row__name">{row.name}</span>
                  <br />
                  <span className="row__desc">{row.desc}</span>
                </span>
                <span className="row__action"><Icon name="download" size={20} /></span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'var(--sp8)' }}>
            <div className="notice">
              <Icon name="info" size={20} />
              <span>
                <span className="notice__title">{f.noticeTitle}</span>
                <br />
                <span className="notice__text">{f.noticeText}</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
