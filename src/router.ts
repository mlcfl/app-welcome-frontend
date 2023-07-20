import {
	createRouter as _createRouter,
	createMemoryHistory,
	createWebHistory,
} from 'vue-router';

/**
 * Shared client router between SPA & SSR
 */
export function createRouter() {
	// https://vitejs.dev/guide/features.html#glob-import
	const pages = import.meta.glob('./pages/*.vue');
	const routes = Object.entries(pages).map(([path, component]) => {
		const route = path.replace(/\.\/pages(.*)\.vue$/, (m, page) => page.toLowerCase());

		return {
			path: route === '/root' ? '/' : route,
			component,
		}
	});

	// Different history for client and server
	// import.meta.env.SSR is injected by Vite
	const history = import.meta.env.SSR
		? createMemoryHistory()
		: createWebHistory();

	return _createRouter({history, routes});
}
