/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// darkMode: 'selector',
	darkMode: ['variant', '&:not(.light *)'],
	theme: {
		extend: {}
	},
	plugins: []
};
