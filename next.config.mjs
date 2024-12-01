/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/fa',
                permanent: true, // Use true for permanent redirect (HTTP 301)
            },
        ];
    },
};

export default nextConfig;
