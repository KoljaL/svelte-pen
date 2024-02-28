import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

// console.log('process.argv', process);
/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html'
		}),

		paths: {
			base: '/svelte-pen'
			// base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
