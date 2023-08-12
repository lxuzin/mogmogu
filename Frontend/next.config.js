/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
	...withPWA({
			dest: "public",
			register: true,
			skipWaiting: true,
	}),
};

module.exports = nextConfig;