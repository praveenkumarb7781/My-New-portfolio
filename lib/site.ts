/** Shared site path for GitHub Pages project site. */
export const PAGES_BASE_PATH = "/My-New-portfolio"

/**
 * Prefix absolute paths for the GitHub Pages project base path.
 * NEXT_PUBLIC_BASE_PATH is set in CI; falls back to PAGES_BASE_PATH on github.io.
 */
export function getBasePath(): string {
  const fromEnv = process.env.NEXT_PUBLIC_BASE_PATH
  if (fromEnv) return fromEnv
  return ""
}

export function withBasePath(path: string): string {
  const base = getBasePath()
  if (!path.startsWith("/")) return path
  return `${base}${path}`
}
