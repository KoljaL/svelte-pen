import { writable } from 'svelte/store';

export type HCJ = {
	html: string | '';
	css: string | '';
	js: string | '';
	data: Record<string, unknown>;
};

export const HCJStore = writable<HCJ>({});
