import { writable } from 'svelte/store';

export type HCJ = {
	html: string | '';
	css: string | '';
	javascript: string | '';
	meta: {
		title: string | 'Untitled';
		description: string | '';
		tags: string[] | [];
		id: string | '';
		forkedFrom: string | '';
	};
};
export const HCJStore = writable<HCJ>({
	html: '',
	css: '',
	javascript: '',
	meta: {
		title: 'Untitled',
		description: '',
		tags: [],
		id: '',
		forkedFrom: ''
	}
});
// export const HCJStore = writable<HCJ>({});
