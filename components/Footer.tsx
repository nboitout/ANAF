import Link from 'next/link';
import Icon from './Icon';
import { FOOTER_COLS, SITE } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="brand" aria-label={`${SITE.fullName} — home`}>
              <span className="brand__mark" aria-hidden="true">AN</span>
              <span>
                <span className="brand__name">{SITE.acronym}</span>
                <br />
                <span className="brand__full">{SITE.fullName}</span>
              </span>
            </Link>
            <p className="footer__desc">
              The Romanian tax administration. We collect public revenue and deliver
              digital services to citizens and businesses.
            </p>
            <div className="social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href="#" aria-label="X"><Icon name="x" size={16} strokeWidth={2} /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {new Date().getFullYear()} ANAF — National Agency for Fiscal Administration. Prototype.</span>
          <div className="footer__legal">
            <a href="#">Legal notice</a>
            <a href="#">Privacy (GDPR)</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
          <div className="badges">
            <span className="badge">RO.gov</span>
            <span className="badge">WCAG 2.1 AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
