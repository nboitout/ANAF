import Icon from './Icon';

export default function PrototypeBanner() {
  return (
    <aside className="proto-banner" role="note" aria-label="Prototype notice">
      <Icon name="info" size={18} strokeWidth={2} />
      <span>
        <span className="proto-banner__title">Demonstration prototype</span>
        <span className="proto-banner__text">
          This website is not an official government service. It was built to showcase how AI
          coding agents can rapidly prototype modern public services. The official Romanian
          tax administration is at{' '}
          <a href="https://www.anaf.ro" target="_blank" rel="noopener noreferrer">anaf.ro</a>.
        </span>
      </span>
    </aside>
  );
}
