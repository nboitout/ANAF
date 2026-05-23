import Link from 'next/link';

export default function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumb: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__intro">{intro}</p>
      </div>
    </section>
  );
}
