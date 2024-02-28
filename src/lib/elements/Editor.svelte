<script lang="ts">
	import { HCJStore } from '$lib/store';
	import { onMount } from 'svelte';
	import { debounce } from '$lib/util';
	import { config } from '$lib/config';

	export let language: string;

	// @ts-ignore
	let value = $HCJStore[language];

	let fontSize = config.pageSettings.fontSize;
	let debounceTimeout = config.pageSettings.debounceTimeout;
	let Ace: any;

	onMount(async () => {
		Ace = (await import('$lib/elements/Ace.svelte')).default;
	});

	function handleInput(event: any) {
		if (event.detail) {
			// @ts-ignore
			$HCJStore[language] = event.detail as string;
		}
	}

	const debouncedHandleInput = debounce(handleInput, debounceTimeout);
</script>

<svelte:component
	this={Ace}
	lang={language}
	bind:value
	options={{ fontSize: fontSize }}
	on:input={debouncedHandleInput}
/>
<!-- <textarea name="html" id="" cols="30" rows="10" bind:value on:input={handleInput}></textarea> -->
