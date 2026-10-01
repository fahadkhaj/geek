export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`font-display font-extrabold tracking-[-0.04em] leading-none ${className}`}
    >
      geek
    </span>
  )
}