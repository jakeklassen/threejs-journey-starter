import { UserConfig } from "vite";

export default {
	publicDir: "../static/",
	server: {
		host: true, // Open to local network and display URL
		open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env), // Open if it's not a CodeSandbox
	},
	build: {
		emptyOutDir: true, // Empty the folder first
		sourcemap: true, // Add sourcemap
	},
} as UserConfig;
