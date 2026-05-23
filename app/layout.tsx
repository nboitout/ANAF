import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import GovBanner from '@/components/GovBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ANAF — National Agency for Fiscal Administration',
    template: '%s · ANAF',
  },
  description:
    'Official services of the Romanian tax administration: Virtual Private Space (SPV), e-Invoice, e-Transport, SAF-T, online payments, forms and taxpayer assistance.',
  metadataBase: new URL('https://example.org'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <a href="#main" className="sr-only">Skip to main content</a>
        <GovBanner />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
