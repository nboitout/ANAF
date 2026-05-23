import Link from 'next/link';
import Icon from './Icon';
import { SITE } from '@/lib/site';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const p = (href: string) => (href.startsWith('/') ? `/${lang}${href}` : href);
  const copy = dict.footer.copy.replace('{year}', String(new Date().getFullYear()));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href={`/${lang}`} className="brand" aria-label={`${dict.brand.full} — ${dict.common.home}`}>
              <span className="brand__mark" aria-hidden="true">{SITE.mark}</span>
              <span>
                <span className="brand__name">{SITE.acronym}</span>
                <br />
                <span className="brand__full">{dict.brand.full}</span>
              </span>
            </Link>
            <p className="footer__desc">{dict.footer.desc}</p>
            <div className="social">
              <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
              <a href="#" aria-label="X"><Icon name="x" size={16} strokeWidth={2} /></a>
              <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            </div>
          </div>

          {dict.footer.cols.map((col) => (
            <div key={col.title} className="footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((l, i) => (
                  <li key={`${l.label}-${i}`}>
                    <Link href={p(l.href)}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">{copy}</span>
          <div className="footer__legal">
            {dict.footer.legal.map((l) => (
              <a key={l.label} href={l.href}>{l.label}</a>
            ))}
          </div>
          <div className="badges">
            {dict.footer.badges.map((b) => (
              <span key={b} className="badge">{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
