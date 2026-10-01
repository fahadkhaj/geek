export function BrandLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <g stroke="currentColor" strokeWidth="10" strokeLinecap="butt">
          <path d="M14 34 V14 H34" />
          <path d="M66 14 H86 V34" />
          <path d="M86 66 V86 H66" />
          <path d="M34 86 H14 V66" />
        </g>
      </svg>

      <span
        style={{
          fontWeight: 800,
          letterSpacing: '-0.03em',
          fontSize: 18,
          textTransform: 'lowercase',
        }}
      >
        geek
      </span>
    </div>
  )
}
