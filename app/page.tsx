import Link from 'next/link';
import Icon from '@/components/Icon';
import SearchBar from '@/components/SearchBar';
import NewsBlock from '@/components/NewsBlock';
import { SITE } from '@/lib/site';

const SERVICES = [
  { icon: 'user', title: 'Virtual Private Space (SPV)', desc: 'Your secure account for communicating with ANAF — tax records, decisions, payments and submissions in one place.' },
  { icon: 'invoice', title: 'RO e-Factura', desc: 'Issue, send and receive electronic invoices through the national e-invoicing system for B2B and B2C.' },
  { icon: 'truck', title: 'RO e-Transport', desc: 'Declare road transport of high-fiscal-risk goods and obtain your UIT code before the journey starts.' },
  { icon: 'database', title: 'SAF-T (D406)', desc: 'Submit the Standard Audit File for Tax with your accounting and tax data in the required XML format.' },
  { icon: 'card', title: 'Online payments', desc: 'Pay taxes, contributions and duties securely by card through Ghiseul.ro, the national payment platform.' },
  { icon: 'bot', title: '“ANA” virtual assistant', desc: 'Get instant answers to common tax questions, any time, from ANAF’s AI-powered assistant.' },
];

const STATS = [
  { value: '8.9M', label: 'SPV accounts' },
  { value: '1.4B', label: 'e-Invoices / year' },
  { value: '320+', label: 'Local offices' },
  { value: '24/7', label: 'Online services' },
  { value: '12', label: 'Languages supported' },
];

const QUICK_TILES = [
  { icon: 'file', label: 'Submit a return' },
  { icon: 'card', label: 'Pay a tax' },
  { icon: 'calendar', label: 'Fiscal calendar' },
  { icon: 'help', label: 'Get assistance' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="eyebrow">National Agency for Fiscal Administration</span>
            <h1 className="hero__title">
              Romania’s tax services, <span className="hl">online and in one place.</span>
            </h1>
            <p className="hero__subtitle">
              File declarations, pay taxes, send electronic invoices and find the information
              you need — securely, whenever it suits you.
            </p>
            <SearchBar />
            <div className="hero__actions">
              <Link href="/services" className="btn btn--primary btn--lg">
                <Icon name="login" size={18} /> Access the SPV
              </Link>
              <Link href="/forms" className="btn btn--secondary btn--lg">
                Browse forms <Icon name="arrow" size={18} className="icon arrow" strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Portal panel */}
          <aside className="portal" aria-label="Taxpayer portal">
            <div className="portal__head">
              <span className="portal__icon"><Icon name="shield" size={22} /></span>
              <span>
                <span className="portal__title">Virtual Private Space</span>
                <br />
                <span className="portal__sub">Secure access for citizens & businesses</span>
              </span>
            </div>
            <Link href="/services" className="btn btn--primary btn--block">
              <Icon name="login" size={18} /> Log in
            </Link>
            <div className="portal__tiles">
              {QUICK_TILES.map((t) => (
                <Link key={t.label} href="/services" className="quick-tile">
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
            <span className="eyebrow">Online services</span>
            <h2 className="section-title">Everything you need to stay compliant</h2>
            <p className="section-intro">
              Digital services for individuals, the self-employed and companies — available around the clock.
            </p>
          </div>
          <div className="grid grid--3">
            {SERVICES.map((s) => (
              <Link key={s.title} href="/services" className="card card--svc cell">
                <span className="card__icon"><Icon name={s.icon} size={24} /></span>
                <span className="card__title">{s.title}</span>
                <span className="card__desc">{s.desc}</span>
                <span className="card__link">
                  Learn more <Icon name="arrow" size={16} className="icon arrow" strokeWidth={2} />
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
            <span className="eyebrow">ANAF in numbers</span>
            <h2 className="section-title">A modern, digital tax administration</h2>
          </div>
          <div className="stats">
            {STATS.map((s) => (
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
            <span className="eyebrow">News & information</span>
            <h2 className="section-title">Latest from ANAF</h2>
          </div>
          <NewsBlock />
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2 className="cta__title">Need help with your taxes?</h2>
            <p className="cta__sub">
              Ask the “ANA” virtual assistant, call the Call Center, or find your nearest local office.
            </p>
          </div>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--white btn--lg">
              <Icon name="bot" size={18} /> Ask ANA
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
