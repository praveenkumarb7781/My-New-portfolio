import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefix absolute paths for GitHub Pages project sites (`/My-New-portfolio`). */
export function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!path.startsWith("/")) return path
  return `${base}${path}`
}

