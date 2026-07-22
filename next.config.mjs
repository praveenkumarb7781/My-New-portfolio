/** @type {import('next').NextConfig} */
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  (process.env.GITHUB_ACTIONS === "true" ? "/My-New-portfolio" : "")

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(basePath
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
    // Ensure client bundles always see the same base path used by next.config
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
