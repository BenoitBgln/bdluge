/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    skipTrailingSlashRedirect: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
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
