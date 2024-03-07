/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: { ssr: true, displayName: true },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ikwueto.s3.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
