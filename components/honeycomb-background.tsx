import type React from "react"
export default function HoneycombBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden honeycomb-bg">
      {children}

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
    </div>
  )
}
