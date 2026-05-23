import Icon from './Icon';
import type { Dictionary } from '@/lib/dictionaries';

export default function ProtoStrip({ dict }: { dict: Dictionary }) {
  return (
    <div className="proto-strip" role="note" aria-label={dict.protoStrip.title}>
      <div className="container proto-strip__inner">
        <Icon name="info" size={16} strokeWidth={2} />
        <span>
          <strong>{dict.protoStrip.title}</strong> {dict.protoStrip.text}{' '}
          <a href="https://www.anaf.ro" target="_blank" rel="noopener noreferrer">{dict.protoStrip.link}</a>.
        </span>
      </div>
    </div>
  );
}
