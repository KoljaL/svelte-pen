export const config = {
	// The key used to store the data in the local storage
	localStorageKey: 'Svelte-Pen-Store',
	ID: () => Math.random().toString(36).substring(2, 15),
	// The default data
	currentPen: {
		html: '<h1>Hello, World!</h1>',
		css: 'h1 { color: blue; }',
		js: 'console.log("Hello, World!", document.querySelector("h1"));',
		meta: {
			title: 'Untitled',
			description: '',
			tags: [],
			id: '',
			forkedFrom: ''
		}
	}
};

export type Config = {
	localStorageKey: string;
	ID: () => string;
	currentPen: {
		html: string;
		css: string;
		js: string;
		meta: {
			title: string;
			description: string;
			tags: string[];
			id: string;
			forkedFrom: string;
		};
	};
};
