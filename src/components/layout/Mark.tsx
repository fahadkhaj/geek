export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="8" strokeLinecap="butt" strokeLinejoin="miter">
        <path d="M14 34 V14 H34" />
        <path d="M66 14 H86 V34" />
        <path d="M86 66 V86 H66" />
        <path d="M34 86 H14 V66" />
      </g>
    </svg>
  )
}