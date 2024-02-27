<script lang="ts">
	import { HCJStore } from '$lib/store';
	import type { HCJ } from '$lib/store';
	import { onMount } from 'svelte';
	let frameEL: HTMLDivElement;
	$: value = $HCJStore as HCJ;

	const script = 'script';
	const style = 'style';

	onMount(() => {
		console.log('value.html', value);
		renderIframe();
	});

	$: $HCJStore, renderIframe();

	// $: if (value) {
	// 	console.log('value.html', value);
	// 	renderIframe();
	// }

	// 	let HTMLframe =
	// 		`
	// 		    <s` +
	// 		+`tyle>${$HCJStore.css}</s` +
	// 		+`tyle>
	// 		    ${$HCJStore.html}
	// 		    <s` +
	// 		+`cript>${$HCJStore.js}</s` +
	// 		+`cript>
	//  `;

	function renderIframe() {
		if (!frameEL) return;
		var iframe = document.createElement('iframe');

		// div tag in which iframe will be added should have id attribute with value myDIV
		frameEL.appendChild(iframe);

		// provide height and width to it
		iframe.setAttribute('style', 'height:100%;width:100%;');
		if (iframe.contentWindow) {
			iframe.contentWindow.document.open();
			console.log('iframe.contentWindow', iframe.contentWindow);
			iframe.contentWindow.document.write(
				` <head><${style}>  ${$HCJStore.css}  </${style}></head>
				<body> ${$HCJStore.html} <${script}> ${$HCJStore.js} </${script} ></body>`
			);
			iframe.contentWindow.document.close();
		}
	}
</script>

<div>
	<!-- {value.html} -->
	<!-- {value.css} -->
	<!-- {value.js} -->

	<!-- {@html css_value}
	{@html js_value}
	{@html value.html} -->
</div>
<div class="frame" bind:this={frameEL}></div>

<!-- [a REPL in the REPL by AlexxNB • REPL • Svelte](https://svelte.dev/repl/eefc5b3e2311457693f153dcdf3ece2f?version=3.19.2) -->

<style>
	div {
		width: 100%;
		/* height: 100%; */
	}

	:global(.frame) {
		border: 1px solid #000;
		width: 100%;
		height: 100%;
	}
</style>
