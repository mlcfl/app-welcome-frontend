import {renderToString} from 'vue/server-renderer';
import {SsrRenderer} from 'common/be/services';
import {createApp} from './app';

/**
 * SSR entry point
 * Can't move renderToString to the common-backend due to context
 */
export async function render(route: string, manifest: Record<string, string[]>) {
	return await SsrRenderer.renderApp({
		route,
		manifest,
		renderToString,
		instance: createApp(),
	});
}
