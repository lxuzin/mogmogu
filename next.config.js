/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
	...withPWA({
		dest: "public",
		register: true,
		skipWaiting: true,
	}),
	async headers() {
		return [
			{
				// matching all API routes
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "true" },
					{ key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
					{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
					{ key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
				]
			}
		]
	},
};

module.exports = {
	basePath: '/mogmogu',
	assetPrefix: '/mogmogu/',
	output: 'export',
  };