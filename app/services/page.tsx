import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Online services',
  description:
    'ANAF online services: Virtual Private Space (SPV), RO e-Factura, RO e-Transport, SAF-T (D406), online payments and the “ANA” virtual assistant.',
};

const SERVICES = [
  { icon: 'user', title: 'Virtual Private Space (SPV)', desc: 'A single secure account to receive decisions, view your tax record, submit forms and track payments.', tag: { label: 'Most used', variant: 'blue' } },
  { icon: 'invoice', title: 'RO e-Factura', desc: 'The national electronic invoicing system. Mandatory for B2B and being extended to B2C.', tag: { label: 'Mandatory', variant: 'orange' } },
  { icon: 'truck', title: 'RO e-Transport', desc: 'Declare road transport of high-fiscal-risk goods and obtain a UIT code before departure.' },
  { icon: 'database', title: 'SAF-T (D406)', desc: 'Submit the Standard Audit File for Tax in the required XML structure.' },
  { icon: 'card', title: 'Online payments (Ghiseul.ro)', desc: 'Pay taxes, contributions and fines by card on the national payment platform.' },
  { icon: 'bot', title: '“ANA” virtual assistant', desc: 'AI assistant for general questions about tax obligations, available 24/7.', tag: { label: 'New', variant: 'green' } },
  { icon: 'calendar', title: 'Fiscal calendar', desc: 'Track filing and payment deadlines tailored to your taxpayer type.' },
  { icon: 'download', title: 'Forms & validators', desc: 'Download the latest PDF forms and the validation software for electronic submissions.' },
  { icon: 'help', title: 'Taxpayer assistance', desc: 'Guides, FAQs and contact channels for help with your obligations.' },
];

const STEPS = [
  { n: '1', title: 'Get credentials', text: 'Register for the SPV with a username/password or a qualified digital certificate.' },
  { n: '2', title: 'Verify your identity', text: 'Confirm your identity online or by approving the request at a local office.' },
  { n: '3', title: 'Start using services', text: 'Submit declarations, receive documents and pay — all from your account.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Online services"
        eyebrow="Online services"
        title="Digital services for every taxpayer"
        intro="Access ANAF securely, around the clock. Most obligations can now be completed entirely online."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {SERVICES.map((s) => (
              <div key={s.title} className="card card--svc cell">
                <span className="card__icon"><Icon name={s.icon} size={24} /></span>
                <div className="meta-line">
                  <span className="card__title">{s.title}</span>
                  {s.tag && <span className={`tag tag--${s.tag.variant}`}>{s.tag.label}</span>}
                </div>
                <span className="card__desc">{s.desc}</span>
                <span className="card__link">
                  Open service <Icon name="arrow" size={16} className="icon arrow" strokeWidth={2} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Getting started</span>
            <h2 className="section-title">How to access the Virtual Private Space</h2>
          </div>
          <div className="grid grid--3">
            {STEPS.map((s) => (
              <div key={s.n} className="card cell">
                <span className="portal__icon" aria-hidden="true">{s.n}</span>
                <span className="card__title">{s.title}</span>
                <span className="card__desc">{s.text}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--sp8)' }}>
            <div className="notice notice--ok">
              <Icon name="check" size={20} />
              <span>
                <span className="notice__title">Free of charge</span>
                <br />
                <span className="notice__text">Registration and use of ANAF online services are free for all taxpayers.</span>
              </span>
            </div>
          </div>
          <div className="hero__actions">
            <Link href="/forms" className="btn btn--primary btn--lg">
              Go to forms <Icon name="arrow" size={18} className="icon arrow" strokeWidth={2} />
            </Link>
            <Link href="/contact" className="btn btn--secondary btn--lg">Need help?</Link>
          </div>
        </div>
      </section>
    </>
  );
}
