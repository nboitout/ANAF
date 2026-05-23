import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About ANAF',
  description: 'About the National Agency for Fiscal Administration (ANAF) — mission, organisation and values of Romania’s tax administration.',
};

const VALUES = [
  { icon: 'shield', title: 'Integrity', desc: 'We act fairly, transparently and in the public interest.' },
  { icon: 'globe', title: 'Digital by default', desc: 'We make compliance simpler through modern, accessible online services.' },
  { icon: 'users', title: 'Service to taxpayers', desc: 'We support citizens and businesses in meeting their obligations.' },
  { icon: 'scale', title: 'Fairness', desc: 'We apply the law consistently and combat tax evasion.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About ANAF"
        eyebrow="About ANAF"
        title="Romania’s tax administration"
        intro="The National Agency for Fiscal Administration (ANAF) administers taxes, contributions and customs, and delivers public services to citizens and businesses."
      />

      <section className="section">
        <div className="container">
          <div className="prose">
            <h2>Our mission</h2>
            <p>
              ANAF is the public institution, under the Ministry of Finance, responsible for
              collecting the revenue that funds Romania’s public services. We administer the
              national tax and customs system, assist taxpayers in meeting their obligations,
              and act to ensure that everyone contributes fairly.
            </p>
            <p>
              Our priority is to make compliance as simple as possible. Through services such as
              the Virtual Private Space, RO e-Factura and online payments, taxpayers can handle
              most of their interactions with the administration digitally.
            </p>

            <h2>What we do</h2>
            <ul className="bullets">
              <li>Administer and collect taxes, social contributions and other budget revenue.</li>
              <li>Operate the customs authority and supervise the movement of goods.</li>
              <li>Provide assistance, guidance and digital services to taxpayers.</li>
              <li>Prevent and combat tax evasion and fraud.</li>
            </ul>
          </div>

          <div className="section-head" style={{ marginTop: 'var(--sp16)' }}>
            <span className="eyebrow">Our values</span>
            <h2 className="section-title">How we work</h2>
          </div>
          <div className="grid grid--4">
            {VALUES.map((v) => (
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
            <h2 className="cta__title">Looking for a service?</h2>
            <p className="cta__sub">Start with the Virtual Private Space or browse all online services.</p>
          </div>
          <div className="cta__actions">
            <Link href="/services" className="btn btn--white btn--lg">
              <Icon name="login" size={18} /> Online services
            </Link>
            <Link href="/contact" className="btn btn--white-outline btn--lg">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
