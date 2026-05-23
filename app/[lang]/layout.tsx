import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GovBanner from '@/components/GovBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrototypeBanner from '@/components/PrototypeBanner';
import SetLang from '@/components/SetLang';
import { getDictionary } from '@/lib/dictionaries';
import { isLocale } from '@/lib/i18n';

export { generateStaticParams } from '@/lib/i18n';
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: { default: dict.meta.siteTitle, template: `%s · ${dict.meta.titleSuffix}` },
    description: dict.meta.siteDesc,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <SetLang lang={lang} />
      <a href="#main" className="sr-only">{dict.common.skip}</a>
      <GovBanner lang={lang} dict={dict} />
      <Header lang={lang} dict={dict} />
      <main id="main">{children}</main>
      <Footer lang={lang} dict={dict} />
      <PrototypeBanner dict={dict} />
    </>
  );
}
