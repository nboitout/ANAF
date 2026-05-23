import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import SearchBar from '@/components/SearchBar';

export const metadata: Metadata = {
  title: 'Forms & declarations',
  description: 'Browse and download ANAF fiscal forms and declarations, including the unified return (212), VAT return (300) and more.',
};

const FORMS = [
  { code: '212', name: 'Unified return — individuals', desc: 'Income tax and social contributions for individuals' },
  { code: '300', name: 'VAT return', desc: 'Value added tax — monthly or quarterly' },
  { code: '301', name: 'Special VAT return', desc: 'For specific intra-Community operations' },
  { code: '100', name: 'Statement of budget obligations', desc: 'Taxes and contributions due to the state budget' },
  { code: '101', name: 'Annual corporate income tax return', desc: 'Profit tax for legal entities' },
  { code: '112', name: 'Return on social contributions', desc: 'Income tax & contributions withheld by employers' },
  { code: '390', name: 'Recapitulative statement (VIES)', desc: 'Intra-Community supplies and acquisitions' },
  { code: '394', name: 'Informative statement', desc: 'Domestic supplies/acquisitions on national territory' },
  { code: '406', name: 'SAF-T file (D406)', desc: 'Standard Audit File for Tax — accounting data' },
];

export default function FormsPage() {
  return (
    <>
      <PageHero
        crumb="Forms"
        eyebrow="Forms & declarations"
        title="Find and download the right form"
        intro="Every fiscal form, ordered by number. Submit electronically through the SPV or with the official validation software."
      />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 640, marginBottom: 'var(--sp10)' }}>
            <SearchBar />
          </div>

          <div className="section-head">
            <span className="eyebrow">Most requested</span>
            <h2 className="section-title">Declarations by number</h2>
          </div>

          <div className="rows">
            {FORMS.map((f) => (
              <a key={f.code} href="#" className="row">
                <span className="row__code">{f.code}</span>
                <span>
                  <span className="row__name">{f.name}</span>
                  <br />
                  <span className="row__desc">{f.desc}</span>
                </span>
                <span className="row__action"><Icon name="download" size={20} /></span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 'var(--sp8)' }}>
            <div className="notice">
              <Icon name="info" size={20} />
              <span>
                <span className="notice__title">How to submit</span>
                <br />
                <span className="notice__text">
                  Most declarations are filed electronically through your Virtual Private Space (SPV).
                  Validate PDF forms with the official software before uploading.
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
