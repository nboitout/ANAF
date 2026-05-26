'use client';

import { useEffect } from 'react';

// Root <html> is static; keep its lang attribute in sync with the route locale.
export default function SetLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
