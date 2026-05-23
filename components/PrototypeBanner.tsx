import Icon from './Icon';
import type { Dictionary } from '@/lib/dictionaries';

export default function PrototypeBanner({ dict }: { dict: Dictionary }) {
  return (
    <aside className="proto-banner" role="note" aria-label={dict.protoBanner.title}>
      <Icon name="info" size={18} strokeWidth={2} />
      <span>
        <span className="proto-banner__title">{dict.protoBanner.title}</span>
        <span className="proto-banner__text">
          {dict.protoBanner.text}{' '}
          <a href="https://www.anaf.ro" target="_blank" rel="noopener noreferrer">{dict.protoBanner.link}</a>.
        </span>
      </span>
    </aside>
  );
}
