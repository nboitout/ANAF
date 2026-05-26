import type { CSSProperties } from 'react';

// Inline SVG icons — stroke style, currentColor, 1.75 stroke-width (charter §7).
const PATHS: Record<string, React.ReactNode> = {
  user: <><circle cx="12" cy="8" r="4" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" /></>,
  login: <><path d="M14 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4" /><path d="M10 12H3" /><path d="m6 8-4 4 4 4" /></>,
  file: <><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M9 13h6M9 17h6" /></>,
  invoice: <><path d="M6 2h9l4 4v16l-3-1.5L13 22l-3-1.5L7 22l-3-1.5V4a2 2 0 0 1 2-2Z" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
  truck: <><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>,
  database: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></>,
  card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
  bot: <><rect x="4" y="8" width="16" height="11" rx="2" /><path d="M12 8V4M9 4h6" /><circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
  pin: <><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  'arrow-ur': <><path d="M7 17 17 7" /><path d="M8 7h9v9" /></>,
  phone: <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  building: <><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" /><path d="M15 9h4a1 1 0 0 1 1 1v11" /><path d="M8 8h3M8 12h3M8 16h3M2 21h20" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z" /><path d="M19 19H6a2 2 0 0 0-2 2" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 5.5a3.2 3.2 0 0 1 0 5M21 19a5.5 5.5 0 0 0-3.5-5.1" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" /></>,
  shield: <><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>,
  download: <><path d="M12 4v11" /><path d="m7 11 5 5 5-5" /><path d="M5 20h14" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1 .9-1 1.7M12 17h.01" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
  facebook: <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V8.5c0-.3.2-.5.5-.5Z" />,
  x: <path d="M4 4l16 16M20 4 4 20" />,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="m10 9 5 3-5 3z" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4" /></>,
  scale: <><path d="M12 3v18M7 21h10M6 7h12M6 7 3 13a3 3 0 0 0 6 0L6 7Zm12 0-3 6a3 3 0 0 0 6 0l-3-6Z" /></>,
};

type Props = { name: keyof typeof PATHS | string; size?: number; className?: string; style?: CSSProperties; strokeWidth?: number };

export default function Icon({ name, size = 20, className = 'icon', style, strokeWidth }: Props) {
  const small = size <= 16;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth ?? (small ? 2 : 1.75)}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={style}
    >
      {PATHS[name] ?? PATHS.info}
    </svg>
  );
}
