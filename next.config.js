/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "d2qp0siotla746.cloudfront.net"
            }
        ]
    }
}

module.exports = nextConfig;
