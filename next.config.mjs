/** @type {import('next').NextConfig} */

// Static export so the site runs on GitHub Pages or Vercel with no server.
// On Vercel: leave NEXT_PUBLIC_BASE_PATH unset (deploys at the domain root).
// On GitHub Pages project sites: set NEXT_PUBLIC_BASE_PATH=/<repo-name>.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
