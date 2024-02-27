import { writable } from 'svelte/store';

export type HCJ = {
	html: string | '';
	css: string | '';
	js: string | '';
	meta: {
		title: string | 'Untitled';
		description: string | '';
		tags: string[] | [];
		id: string | '';
		forkedFrom: string | '';
	};
};

export const HCJStore = writable<HCJ>({});
