<script lang="ts">
	import { HCJStore } from '$lib/store';
	let value = $HCJStore.html;

	function handleInput(event: Event) {
		if (event.target instanceof HTMLTextAreaElement) {
			$HCJStore.html = event.target.value as string;
			// console.log($HCJStore.html);
			$HCJStore = { ...$HCJStore, html: event.target.value as string };
		}
	}

	// $: console.log('HTML store', $HCJStore.html);
</script>

<textarea name="html" id="" cols="30" rows="10" bind:value on:input={handleInput}></textarea>

<style>
	textarea {
		width: 100%;
		height: 100%;
	}
</style>
