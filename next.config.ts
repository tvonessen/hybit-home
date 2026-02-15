import type {NextConfig} from "next";

export default {
	reactStrictMode: true,
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "hybit.media",
				port: "",
				pathname: "/img/**"
			}
		]
	}
} as NextConfig;
