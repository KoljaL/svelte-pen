<script lang="ts">
	// https://svelte.dev/repl/eefc5b3e2311457693f153dcdf3ece2f?version=3.19.2

	import { HCJStore } from '$lib/store';
	let iFrameEl: HTMLDivElement;

	const script = 'script';
	const style = 'style';

	$: iFrameContent = `<!doctype html>
		<html style="height: 100% !important">
			<head>
				<meta charset='utf-8'>
				<base href='/' />
				<${style}>
					${$HCJStore.css}
				</${style}>
			</head>
			<body>
			${$HCJStore.html}
				<${script}>
						${$HCJStore.js}
				</${script}>
			</body>
		</html>`;
</script>

<iframe
	bind:this={iFrameEl}
	title="Result"
	sandbox="allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-scripts"
	srcdoc={iFrameContent}
>
</iframe>

<style>
	:global(iframe) {
		border: 1px solid #000;
		width: 100%;
		height: 100%;
		padding: 20px;
		overflow: scroll;
	}
</style>
