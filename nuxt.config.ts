import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// Env
const mode = process.env.RENDER_MODE;
const port = process.env.DEV_SERVER_PORT;
const apiBase = process.env.NUXT_PUBLIC_API_BASE;
const authApiBase = process.env.NUXT_PUBLIC_AUTH_API_BASE;

if (!mode) {
	throw new Error("RENDER_MODE env is not set");
} else if (!["CSR", "SSR", "SSG"].includes(mode)) {
	throw new Error(
		`RENDER_MODE env has invalid value: ${mode}. Allowed: CSR, SSR, SSG`
	);
}

if (!port) {
	throw new Error("DEV_SERVER_PORT env is not set");
}

const ssrEnabled = () => {
	return ["SSR", "SSG"].includes(mode);
};
const getNitroPreset = () => {
	return {
		CSR: "static",
		SSR: "node-listener",
		SSG: "static",
	}[mode];
};

export default defineNuxtConfig({
	ssr: ssrEnabled(),
	nitro: {
		preset: getNitroPreset(),
		// Important enable this to avoid MODULE_NOT_FOUND error from the server side
		noExternals: true,
		// Optional
		sourceMap: false,
		minify: true,
	},
	compatibilityDate: "2025-04-03",
	future: {
		compatibilityVersion: 4,
	},
	srcDir: "src",
	devtools: { enabled: false },
	build: {
		transpile: ["vuetify"],
	},
	css: [
		"@mdi/font/css/materialdesignicons.css",
		"vuetify/styles",
		"~/assets/styles/global.scss",
	],
	modules: [
		"@nuxt/eslint",
		(_options, nuxt) => {
			nuxt.hooks.hook("vite:extendConfig", (config) => {
				config.plugins?.push(vuetify({ autoImport: true }));
			});
		},
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	app: {
		head: {
			link: [
				// WebP favicon
				{
					rel: "icon",
					type: "image/webp",
					href: "/favicon.webp",
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			apiBase,
			authApiBase,
		},
	},
	devServer: {
		port: Number(port),
	},
});
