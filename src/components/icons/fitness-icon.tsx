"use client"

interface FitnessIconProps {
  className?: string
}

export function FitnessIcon({ className = "w-6 h-6" }: FitnessIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring - represents cycle/wellness */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.4"
      />
      
      {/* Inner core - represents strength/core */}
      <circle
        cx="24"
        cy="24"
        r="8"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      
      {/* Radiating energy lines */}
      <path
        d="M24 4V12M24 36V44M4 24H12M36 24H44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Diagonal energy pulses */}
      <path
        d="M9.86 9.86L15.51 15.51M32.49 32.49L38.14 38.14M38.14 9.86L32.49 15.51M15.51 32.49L9.86 38.14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Center pulse dot */}
      <circle
        cx="24"
        cy="24"
        r="3"
        fill="currentColor"
      />
    </svg>
  )
}
