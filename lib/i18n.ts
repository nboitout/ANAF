export const locales = ['en', 'ro'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ro';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Shared across every page/layout under app/[lang] for static export.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
