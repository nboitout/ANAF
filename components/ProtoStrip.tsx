import Icon from './Icon';

export default function ProtoStrip() {
  return (
    <div className="proto-strip" role="note" aria-label="Prototype notice">
      <div className="container proto-strip__inner">
        <Icon name="info" size={16} strokeWidth={2} />
        <span>
          <strong>Demonstration prototype.</strong> This website is not an official government
          service. It was built to showcase how AI coding agents can rapidly prototype modern
          public services. The official Romanian tax administration is at{' '}
          <a href="https://www.anaf.ro" target="_blank" rel="noopener noreferrer">anaf.ro</a>.
        </span>
      </div>
    </div>
  );
}
