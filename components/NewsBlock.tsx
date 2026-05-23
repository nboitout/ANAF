'use client';

import { useState } from 'react';
import Icon from './Icon';

type Article = { date: string; title: string; tag?: { label: string; variant: string } };

const TABS: Record<string, Article[]> = {
  'Newsroom': [
    { date: '2026-05-20', title: 'RO e-Factura: B2C reporting becomes mandatory from 1 July 2026', tag: { label: 'e-Invoice', variant: 'blue' } },
    { date: '2026-05-14', title: 'New self-service options added to the Virtual Private Space' },
    { date: '2026-05-06', title: 'Pre-filled unified return (Form 212) available for the 2025 tax year' },
    { date: '2026-04-28', title: 'SAF-T (D406): reporting extended to small taxpayers' },
  ],
  'Legislation': [
    { date: '2026-05-18', title: 'Order updating the e-Transport categories of high-fiscal-risk goods', tag: { label: 'Order', variant: 'orange' } },
    { date: '2026-05-09', title: 'Procedure for VAT refund to non-resident taxable persons' },
    { date: '2026-04-30', title: 'Amendments to the Fiscal Procedure Code — enforcement' },
    { date: '2026-04-22', title: 'Guidelines on the deductibility of business expenses' },
  ],
  'Campaigns': [
    { date: '2026-05-15', title: 'Annual income statement campaign — file by 25 May', tag: { label: 'Deadline', variant: 'red' } },
    { date: '2026-05-02', title: 'Redirect 3.5% of your income tax to a non-profit' },
    { date: '2026-04-18', title: 'Free webinars for new businesses on digital reporting' },
    { date: '2026-04-10', title: 'Awareness drive: protect yourself from phishing in ANAF’s name' },
  ],
};

const ANNOUNCEMENTS = [
  { icon: 'calendar', title: 'Next deadline: VAT return (Form 300)', date: '25 May 2026' },
  { icon: 'alert', title: 'Scheduled maintenance of the SPV', date: '24 May, 22:00–02:00' },
  { icon: 'download', title: 'Updated PDF validators published', date: '19 May 2026' },
  { icon: 'bot', title: '“ANA” virtual assistant now answers VAT questions', date: '12 May 2026' },
];

export default function NewsBlock() {
  const names = Object.keys(TABS);
  const [active, setActive] = useState(names[0]);
  const articles = TABS[active];
  const [featured, ...rest] = articles;

  return (
    <div className="news__grid">
      <div>
        <div className="tabs" role="tablist" aria-label="News categories">
          {names.map((n) => (
            <button
              key={n}
              role="tab"
              aria-selected={active === n}
              className="tab"
              onClick={() => setActive(n)}
            >
              {n}
            </button>
          ))}
        </div>

        <a href="#" className="featured">
          <div className="featured__img">
            <Icon name="invoice" size={40} strokeWidth={1.5} />
          </div>
          <div className="featured__body">
            <div className="featured__meta">
              <span className="date">{featured.date}</span>
              {featured.tag && <span className={`tag tag--${featured.tag.variant}`}>{featured.tag.label}</span>}
            </div>
            <h3 className="featured__title">{featured.title}</h3>
            <p className="featured__excerpt">
              Read the official guidance, key dates and what taxpayers need to do to stay compliant.
            </p>
          </div>
        </a>

        <div className="article-list">
          {rest.map((a) => (
            <a key={a.title} href="#" className="article">
              <div className="meta-line">
                <span className="date">{a.date}</span>
                {a.tag && <span className={`tag tag--${a.tag.variant}`}>{a.tag.label}</span>}
              </div>
              <span className="article__title">{a.title}</span>
            </a>
          ))}
        </div>
      </div>

      <aside aria-label="Announcements">
        <h3 className="sidebar__head">Announcements</h3>
        {ANNOUNCEMENTS.map((a) => (
          <a key={a.title} href="#" className="ann">
            <Icon name={a.icon} size={20} />
            <span>
              <span className="ann__title">{a.title}</span>
              <span className="ann__date">{a.date}</span>
            </span>
          </a>
        ))}
      </aside>
    </div>
  );
}
