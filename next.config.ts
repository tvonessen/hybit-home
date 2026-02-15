import type {NextConfig} from "next";

export default {
	output: "standalone", images: {
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
