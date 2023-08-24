import {createSSRApp} from 'vue';
import {createRouter} from './router';
import App from './App.vue';

/**
 * Shared function between SPA & SSR
 */
export function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();

  app.use(router);

  return {app, router};
}
