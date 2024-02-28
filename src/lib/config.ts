import type { HCJ } from './store';

export const config: Config = {
	// The key used to store the data in the local storage
	localStorageKey: 'Svelte-Pen-Store',
	ID: () => Math.random().toString(36).substring(2, 15),
	// The default data
	currentPen: {
		html: '<h1>Hello, World!</h1>\n\n<p>Start coding here...</p>',
		css: 'h1 { color: blue; }\np { color: green; }',
		javascript: 'console.log("Hello, World!", document.querySelector("h1"));',
		meta: {
			title: 'Untitled',
			description: '',
			tags: [],
			id: '',
			forkedFrom: ''
		}
	},
	iFrameContent(HCJStore) {
		return `<!doctype html>
  <html style="height: 100% !important">
    <head>
      <meta charset='utf-8'>
      <base href='/' />
      <style>
			html{color:#eee;font-family: ui-sans-serif, system-ui, sans-serif;}
			body{margin:.5rem;padding:0;height:100%;}
			a{color: lightblue;}
        ${HCJStore.css}
      </style>
    </head>
    <body>
    	${HCJStore.html}
			</body>
      <script>
      ${HCJStore.javascript}
      </script>
    </html>`;
	},
	pageSettings: {
		leftPaneSize: 30,
		rightPaneSize: 70,
		htmlPaneSize: 30,
		cssPaneSize: 30,
		javascriptPaneSize: 30,
		consolePaneSize: 1,
		fontSize: 14,
		debounceTimeout: 300
	}
};

export type Config = {
	localStorageKey: string;
	ID: () => string;
	currentPen: {
		html: string;
		css: string;
		javascript: string;
		meta: {
			title: string;
			description: string;
			tags: string[];
			id: string;
			forkedFrom: string;
		};
	};
	iFrameContent: (HCJStore: HCJ) => string;
	pageSettings: {
		leftPaneSize: number;
		rightPaneSize: number;
		htmlPaneSize: number;
		cssPaneSize: number;
		javascriptPaneSize: number;
		consolePaneSize: number;
		fontSize: number;
		debounceTimeout: number;
	};
};
