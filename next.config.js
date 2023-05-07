/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dodopizza-a.akamaihd.net',
			},
		],
	},
}

module.exports = nextConfig
