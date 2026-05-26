'use client';

import { useState } from 'react';
import Icon from './Icon';
import type { Dictionary } from '@/lib/dictionaries';

export default function NewsBlock({ news }: { news: Dictionary['home']['news'] }) {
  const [active, setActive] = useState(news.tabs[0].name);
  const tab = news.tabs.find((t) => t.name === active) ?? news.tabs[0];
  const [featured, ...rest] = tab.articles;

  return (
    <div className="news__grid">
      <div>
        <div className="tabs" role="tablist" aria-label={news.title}>
          {news.tabs.map((t) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={active === t.name}
              className="tab"
              onClick={() => setActive(t.name)}
            >
              {t.name}
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
            <p className="featured__excerpt">{news.featuredExcerpt}</p>
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

      <aside aria-label={news.announcementsHead}>
        <h3 className="sidebar__head">{news.announcementsHead}</h3>
        {news.announcements.map((a) => (
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
