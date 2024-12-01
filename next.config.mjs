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
                destination: '/en',
                permanent: true
            },
        ];
    },
};

export default nextConfig;
