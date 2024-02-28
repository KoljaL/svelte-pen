<script lang="ts">
	// https://svelte.dev/repl/eefc5b3e2311457693f153dcdf3ece2f?version=3.19.2

	import { HCJStore } from '$lib/store';
	import { config } from '$lib/config';
	let iFrameEl: HTMLDivElement;

	$: iFrameContentDoc = config.iFrameContent($HCJStore);
</script>

<iframe
	bind:this={iFrameEl}
	title="rendered"
	id="rendered"
	sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-scripts"
	srcdoc={iFrameContentDoc}
>
</iframe>

<style>
	:global(iframe) {
		border: none;
		width: 100%;
		height: 100%;
		padding: 0;
		/* overflow: scroll; */
	}
</style>
