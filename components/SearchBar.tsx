'use client';

import { useState } from 'react';
import Icon from './Icon';
import type { Dictionary } from '@/lib/dictionaries';

export default function SearchBar({ search }: { search: Dictionary['search'] }) {
  const [q, setQ] = useState('');
  return (
    <div className="searchbar">
      <form className="searchbar__row" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="sr-only" htmlFor="search-scope">{search.scopeLabel}</label>
        <select id="search-scope" className="searchbar__select" defaultValue="all">
          <option value="all">{search.scope.all}</option>
          <option value="services">{search.scope.services}</option>
          <option value="forms">{search.scope.forms}</option>
          <option value="legislation">{search.scope.legislation}</option>
        </select>
        <label className="sr-only" htmlFor="search-input">{search.placeholder}</label>
        <input
          id="search-input"
          className="searchbar__input"
          type="search"
          placeholder={search.placeholder}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit" className="searchbar__submit" aria-label={search.submit}>
          <Icon name="search" size={18} strokeWidth={2} />
        </button>
      </form>
      <div className="search-hints">
        <span className="search-hints__label">{search.popular}</span>
        {search.hints.map((h) => (
          <button key={h} type="button" className="hint-tag" onClick={() => setQ(h)}>{h}</button>
        ))}
      </div>
    </div>
  );
}
