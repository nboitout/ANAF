export type DropdownItem = { label: string; hint: string; href: string; icon: string };
export type NavItem = { label: string; href: string; items?: DropdownItem[] };

export const NAV: NavItem[] = [
  {
    label: 'Online services',
    href: '/services',
    items: [
      { label: 'Virtual Private Space (SPV)', hint: 'Your secure taxpayer account', href: '/services', icon: 'user' },
      { label: 'e-Invoice (RO e-Factura)', hint: 'Issue and receive electronic invoices', href: '/services', icon: 'invoice' },
      { label: 'e-Transport', hint: 'Declare high-fiscal-risk goods', href: '/services', icon: 'truck' },
      { label: 'SAF-T (D406)', hint: 'Standard Audit File for Tax', href: '/services', icon: 'database' },
      { label: 'Online payments (Ghiseul.ro)', hint: 'Pay taxes and duties by card', href: '/services', icon: 'card' },
    ],
  },
  {
    label: 'Forms',
    href: '/forms',
    items: [
      { label: 'All declarations', hint: 'Browse every fiscal form', href: '/forms', icon: 'file' },
      { label: 'Form 212', hint: 'Unified return — individuals', href: '/forms', icon: 'file' },
      { label: 'Form 300', hint: 'VAT return', href: '/forms', icon: 'file' },
      { label: 'Form 100 / 101', hint: 'Budget obligations & profit tax', href: '/forms', icon: 'file' },
    ],
  },
  { label: 'Contact', href: '/contact' },
  { label: 'About ANAF', href: '/about' },
];

export const FOOTER_COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Virtual Private Space', href: '/services' },
      { label: 'e-Invoice', href: '/services' },
      { label: 'e-Transport', href: '/services' },
      { label: 'Online payments', href: '/services' },
    ],
  },
  {
    title: 'Taxpayers',
    links: [
      { label: 'Forms & declarations', href: '/forms' },
      { label: 'Fiscal calendar', href: '/services' },
      { label: 'Guides', href: '/services' },
      { label: 'Virtual assistant', href: '/services' },
    ],
  },
  {
    title: 'Agency',
    links: [
      { label: 'About ANAF', href: '/about' },
      { label: 'Organisation', href: '/about' },
      { label: 'Strategy', href: '/about' },
      { label: 'Careers', href: '/about' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Local offices', href: '/contact' },
      { label: 'Call Center', href: '/contact' },
      { label: 'Petitions', href: '/contact' },
      { label: 'Press office', href: '/contact' },
    ],
  },
];

export const SITE = {
  acronym: 'ANAF',
  shortName: 'ANAF',
  fullName: 'National Agency for Fiscal Administration',
  govLine: 'Government of Romania · Ministry of Finance',
  callCenter: '+40 31 403 9160',
  email: 'asistenta@anaf.ro',
};
