import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-static';
import adapterGhpages from "svelte-adapter-ghpages";
// console.log('process.argv', process);
/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// adapter: adapter({
		// 	pages: 'docs',
		// 	assets: 'docs',
		// 	fallback: 'index.html'
		// }),
		adapter: adapterGhpages({
	    pages: 'build',
      assets: 'build',
      fallback: null
		}
    ),
		paths: {
			base: '/svelte-pen'
		}
	}
};

export default config;
