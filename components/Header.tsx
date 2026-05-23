'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { NAV, SITE } from '@/lib/site';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label={`${SITE.fullName} — home`}>
          <span className="brand__mark" aria-hidden="true">AN</span>
          <span>
            <span className="brand__name">{SITE.acronym}</span>
            <br />
            <span className="brand__full">{SITE.fullName}</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="nav__item"
              data-open={openMenu === item.label}
              onMouseEnter={() => item.items && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="nav__link"
                aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                aria-haspopup={item.items ? 'true' : undefined}
                aria-expanded={item.items ? openMenu === item.label : undefined}
                onClick={() => setOpenMenu(null)}
              >
                {item.label}
                {item.items && <Icon name="chevron" size={14} className="icon chev" strokeWidth={2} />}
              </Link>
              {item.items && (
                <div className="dropdown" role="menu">
                  {item.items.map((d) => (
                    <Link key={d.label} href={d.href} className="dropdown__item" role="menuitem" onClick={() => setOpenMenu(null)}>
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
          <Link href="/services" className="btn btn--primary btn--sm btn--login">
            <Icon name="login" size={16} />
            Log in (SPV)
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="mobile-nav" data-open={mobileOpen}>
        <ul className="mobile-nav__list">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="mobile-nav__link" onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-nav__cta">
          <Link href="/services" className="btn btn--primary btn--sm" onClick={() => setMobileOpen(false)}>
            <Icon name="login" size={16} /> Log in (SPV)
          </Link>
          <a href={`tel:${SITE.callCenter.replace(/\s/g, '')}`} className="btn btn--ghost btn--sm">
            <Icon name="phone" size={16} /> Call Center
          </a>
        </div>
      </div>
    </header>
  );
}
