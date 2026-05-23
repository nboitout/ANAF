import type { Metadata } from 'next';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ANAF: Call Center, email assistance, the “ANA” virtual assistant and local tax offices across Romania.',
};

const CHANNELS = [
  { icon: 'bot', title: 'Virtual assistant “ANA”', desc: 'Instant answers to common tax questions, 24/7.', action: 'Start a chat' },
  { icon: 'phone', title: 'Call Center', desc: `Mon–Fri, 08:30–16:30. ${SITE.callCenter}`, action: 'Call now' },
  { icon: 'mail', title: 'Email assistance', desc: SITE.email, action: 'Send an email' },
];

const OFFICES = [
  { city: 'Bucharest', region: 'DGRFP Bucharest', addr: 'Str. Prof. Dr. Dimitrie Gerota 13', phone: '+40 21 305 7000' },
  { city: 'Cluj-Napoca', region: 'DGRFP Cluj-Napoca', addr: 'Piața Avram Iancu 19', phone: '+40 264 591 670' },
  { city: 'Timișoara', region: 'DGRFP Timișoara', addr: 'Str. Gheorghe Lazăr 9B', phone: '+40 256 499 334' },
  { city: 'Iași', region: 'DGRFP Iași', addr: 'Str. Anastasie Panu 26', phone: '+40 232 213 332' },
  { city: 'Brașov', region: 'DGRFP Brașov', addr: 'Str. Mihail Kogălniceanu 7', phone: '+40 268 308 400' },
  { city: 'Constanța', region: 'DGRFP Galați / Constanța', addr: 'Bd. I. Gh. Duca 18', phone: '+40 241 480 700' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact & support"
        title="We’re here to help"
        intro="Reach ANAF online, by phone or in person. For most questions, the virtual assistant and Call Center are the fastest options."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {CHANNELS.map((c) => (
              <div key={c.title} className="card cell">
                <span className="card__icon"><Icon name={c.icon} size={24} /></span>
                <span className="card__title">{c.title}</span>
                <span className="card__desc">{c.desc}</span>
                <span className="card__link">
                  {c.action} <Icon name="arrow" size={16} className="icon arrow" strokeWidth={2} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">In person</span>
            <h2 className="section-title">Regional tax offices</h2>
            <p className="section-intro">
              ANAF operates a national network of regional directorates (DGRFP) and local offices. A selection is shown below.
            </p>
          </div>
          <div className="grid grid--3">
            {OFFICES.map((o) => (
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
