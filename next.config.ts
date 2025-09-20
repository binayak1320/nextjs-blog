import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This setting tells Next.js to ignore linting errors during the build.
    // Use this with caution, as it disables linting.
    // It's a quick fix but not the best practice.
    // ignoreDuringBuilds: true,

    // A better approach is to use this property to specify directories to ignore.
    dirs: ['app', 'components', 'utils', 'lib', 'pages'], // Add all your project directories here except the ones you want to ignore.
    ignoreDuringBuilds: false, // Set this to false to ensure other files are linted.
  },
};

export default nextConfig;
