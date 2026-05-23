'use client';

import { useState } from 'react';
import Icon from './Icon';

const HINTS = ['Form 212', 'e-Factura', 'SPV registration', 'VAT refund', 'Fiscal calendar'];

export default function SearchBar() {
  const [q, setQ] = useState('');
  return (
    <div className="searchbar">
      <form className="searchbar__row" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="search-scope">Search scope</label>
        <select id="search-scope" className="searchbar__select" defaultValue="all">
          <option value="all">All</option>
          <option value="services">Services</option>
          <option value="forms">Forms</option>
          <option value="legislation">Legislation</option>
        </select>
        <label className="sr-only" htmlFor="search-input">Search anaf.ro</label>
        <input
          id="search-input"
          className="searchbar__input"
          type="search"
          placeholder="Search services, forms, guides…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit" className="searchbar__submit" aria-label="Search">
          <Icon name="search" size={18} strokeWidth={2} />
        </button>
      </form>
      <div className="search-hints">
        <span className="search-hints__label">Popular</span>
        {HINTS.map((h) => (
          <button key={h} type="button" className="hint-tag" onClick={() => setQ(h)}>{h}</button>
        ))}
      </div>
    </div>
  );
}
