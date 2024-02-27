<script lang="ts">
	import { HCJStore } from '$lib/store';
	let value = $HCJStore.css;

	function handleInput(event: Event) {
		if (event.target instanceof HTMLTextAreaElement) {
			$HCJStore.css = event.target.value as string;
		}
	}
</script>

<textarea name="css" id="" cols="30" rows="10" bind:value on:input={handleInput}></textarea>

<style>
	textarea {
		width: 100%;
		height: 100%;
	}
</style>
