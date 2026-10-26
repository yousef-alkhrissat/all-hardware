// Line illustrations of each component family. 64×64 grid, stroked with currentColor.
const common = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const CpuIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="16" y="16" width="32" height="32" rx="3" />
    <rect x="24" y="24" width="16" height="16" rx="1.5" className="ic-core" />
    {[22, 28, 34, 40].map((n) => (
      <path key={n} d={`M${n} 16V9M${n} 48v7M16 ${n}H9M48 ${n}h7`} />
    ))}
    <circle cx="20.5" cy="20.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const GpuIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M6 18v32M6 22h4" />
    <rect x="10" y="18" width="48" height="24" rx="3" />
    <circle cx="24" cy="30" r="7.5" />
    <circle cx="44" cy="30" r="7.5" />
    <path d="M24 22.5v15M16.5 30h15" className="ic-spin" />
    <path d="M44 22.5v15M36.5 30h15" className="ic-spin" />
    <path d="M16 42v5h22v-5" />
    {[19, 23, 27, 31, 35].map((x) => <path key={x} d={`M${x} 42v5`} />)}
  </svg>
)

export const RamIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M6 22h52v18H34v4h-4v-4H6z" />
    {[11, 21, 37, 47].map((x) => (
      <rect key={x} x={x} y="26" width="7" height="9" rx="1" className="ic-core" />
    ))}
    {[10, 14, 18, 22, 26, 38, 42, 46, 50, 54].map((x) => <path key={x} d={`M${x} 40v4`} />)}
  </svg>
)

export const SsdIcon = (p) => (
  <svg {...common} {...p}>
    <path d="M8 24h44v16H8z" />
    <path d="M52 27h4v10h-4" />
    <circle cx="12.5" cy="32" r="2" />
    <rect x="18" y="27" width="12" height="10" rx="1" className="ic-core" />
    <rect x="33" y="27" width="12" height="10" rx="1" />
  </svg>
)

export const BoardIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="8" y="8" width="48" height="48" rx="3" />
    <rect x="16" y="15" width="16" height="16" rx="1.5" className="ic-core" />
    <path d="M38 14v20M43 14v20" />
    <path d="M14 39h36M14 45h36M14 51h22" />
    <rect x="47" y="14" width="4" height="9" rx="1" />
  </svg>
)

export const FanIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="8" y="8" width="48" height="48" rx="6" />
    <circle cx="32" cy="32" r="19" />
    <g className="ic-spin">
      <path d="M32 29c-1-7 2-12 7-13 1 6-2 10-7 13z" />
      <path d="M34.6 33.5c6.6-2.6 12.2-.8 14 4-5.7 2.3-10.4.6-14-4z" />
      <path d="M29.4 33.5c-5.6 4.4-11.4 4.6-14.6.6 4.8-3.9 9.8-4 14.6-.6z" />
      <circle cx="32" cy="32" r="3" />
    </g>
    <circle cx="13" cy="13" r="1.4" />
    <circle cx="51" cy="13" r="1.4" />
    <circle cx="13" cy="51" r="1.4" />
    <circle cx="51" cy="51" r="1.4" />
  </svg>
)

export const PsuIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="6" y="14" width="52" height="36" rx="3" />
    <circle cx="26" cy="32" r="12" />
    <path d="M14 32h24M26 20v24M17.5 23.5l17 17M34.5 23.5l-17 17" className="ic-spin" />
    <rect x="44" y="21" width="8" height="10" rx="1.5" />
    <path d="M46.5 25v2M49.5 25v2" />
    <path d="M44 38h8M44 42h8" />
  </svg>
)

export const CaseIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="16" y="5" width="32" height="54" rx="3" />
    <rect x="21" y="11" width="22" height="30" rx="1.5" className="ic-core" />
    <circle cx="32" cy="50" r="4" />
    <path d="M20 59v2M44 59v2" />
  </svg>
)

export const PeripheralIcon = (p) => (
  <svg {...common} {...p}>
    <rect x="4" y="24" width="40" height="20" rx="3" />
    {[9, 15, 21, 27, 33, 39].map((x) => (
      <path key={x} d={`M${x} 30h0M${x} 35h0`} strokeWidth="2.6" />
    ))}
    <path d="M14 40h20" />
    <rect x="49" y="22" width="12" height="20" rx="6" />
    <path d="M55 22v6" className="ic-core" />
  </svg>
)
