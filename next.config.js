/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dodopizza-a.akamaihd.net',
			},
			{
				protocol: 'https',
				hostname: 'cdn.inappstory.com',
			},
		],
	},
}

module.exports = nextConfig
