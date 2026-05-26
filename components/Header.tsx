'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { SITE } from '@/lib/site';
import type { Locale } from '@/lib/i18n';
import type { Dictionary } from '@/lib/dictionaries';

export default function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const pathname = usePathname() || `/${lang}`;
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const p = (href: string) => `/${lang}${href}`;
  const isActive = (href: string) => pathname.startsWith(p(href));

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href={`/${lang}`} className="brand" aria-label={`${dict.brand.full} — ${dict.common.home}`}>
          <span className="brand__mark" aria-hidden="true">{SITE.mark}</span>
          <span>
            <span className="brand__name">{SITE.acronym}</span>
            <br />
            <span className="brand__full">{dict.brand.full}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {dict.nav.map((item) => (
            <div
              key={item.href}
              className="nav__item"
              data-open={openMenu === item.href}
              onMouseEnter={() => item.items.length > 0 && setOpenMenu(item.href)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={p(item.href)}
                className="nav__link"
                aria-current={isActive(item.href) ? 'page' : undefined}
                aria-haspopup={item.items.length > 0 ? 'true' : undefined}
                aria-expanded={item.items.length > 0 ? openMenu === item.href : undefined}
                onClick={() => setOpenMenu(null)}
              >
                {item.label}
                {item.items.length > 0 && <Icon name="chevron" size={14} className="icon chev" strokeWidth={2} />}
              </Link>
              {item.items.length > 0 && (
                <div className="dropdown" role="menu">
                  {item.items.map((d) => (
                    <Link key={d.label} href={p(d.href)} className="dropdown__item" role="menuitem" onClick={() => setOpenMenu(null)}>
                      <Icon name={d.icon} size={20} />
                      <span>
                        <span className="dropdown__label">{d.label}</span>
                        <br />
                        <span className="dropdown__hint">{d.hint}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header__cta">
          <Link href={p('/services')} className="btn btn--primary btn--sm btn--login">
            <Icon name="login" size={16} />
            {dict.brand.login}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mobile-nav" data-open={mobileOpen}>
        <ul className="mobile-nav__list">
          {dict.nav.map((item) => (
            <li key={item.href}>
              <Link href={p(item.href)} className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__cta">
          <Link href={p('/services')} className="btn btn--primary btn--sm" onClick={() => setMobileOpen(false)}>
            <Icon name="login" size={16} /> {dict.brand.login}
          </Link>
          <a href={`tel:${SITE.callCenter.replace(/\s/g, '')}`} className="btn btn--ghost btn--sm">
            <Icon name="phone" size={16} /> {dict.brand.callCenter}
          </a>
        </div>
      </div>
    </header>
  );
}
