/** AgentFlow primary mark — geometry copied from docs/agentflow-mark.svg (official brand file). */
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <circle cx="128" cy="128" r="106" fill="#00D4AA" />
      <path
        d="M 43 128 Q 85 64, 128 128 T 213 128"
        stroke="#0A0B14"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
