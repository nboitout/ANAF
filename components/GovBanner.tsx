import { SITE } from '@/lib/site';

export default function GovBanner() {
  return (
    <div className="gov-banner">
      <div className="container gov-banner__inner">
        <span className="tricolor" role="img" aria-label="Flag of Romania" />
        <span className="gov-banner__text">
          <span className="gov-banner__name">Romania</span>
          <span className="gov-banner__sub">{SITE.govLine}</span>
        </span>
        <div className="gov-banner__lang" role="group" aria-label="Language">
          <button type="button" className="lang-btn" aria-current="false" title="Versiunea în limba română (demo)">RO</button>
          <button type="button" className="lang-btn" aria-current="true">EN</button>
        </div>
      </div>
    </div>
  );
}
