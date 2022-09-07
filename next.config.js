/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites() {
    return process.env.NODE_ENV === "development"
      ? [
          {
            source: "/:any*",
            destination: "/",
          },
        ]
      : [];
  },
};

module.exports = nextConfig;
