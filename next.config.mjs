/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.*.fbcdn.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
