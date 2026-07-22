/** @type {import('next').NextConfig} */
// GitHub Pages static export only when CI sets DEPLOY_TARGET=pages.
// Vercel / local builds keep API routes for live Ask-me.
const isPages = process.env.DEPLOY_TARGET === "pages"
const basePath = isPages
  ? process.env.NEXT_PUBLIC_BASE_PATH || "/My-New-portfolio"
  : process.env.NEXT_PUBLIC_BASE_PATH || ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        trailingSlash: true,
      }
    : {}),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
