<script lang="ts">
	// https://javascriptbit.com/transfer-data-between-parent-window-and-iframe-postmessage-api/
	import { onMount } from 'svelte';
	let consoleOutput: HTMLDivElement;
	let iframe: HTMLIFrameElement;
	let iframeWindow: Window;

	window.addEventListener('message', function (event) {
		// Check if the message is a console log message
		if (event.data && event.data.type === 'ConsoleLog') {
			// Do something with the log message, e.g., append to a div
			consoleOutput.innerHTML += event.data.data + '<br>';
		}
	});

	window.addEventListener('message', function (event) {
		console.log('Message received from the child: ' + JSON.stringify(event.data)); // Message received from child
	});

	onMount(() => {
		setTimeout(() => {
			iframe = document.getElementById('rendered') as HTMLIFrameElement;
			iframeWindow = iframe.contentWindow as Window;
			iframeWindow.postMessage('CaptureConsoleLogs', '*');
		}, 1000);
	});
</script>

<div bind:this={consoleOutput} class="console">...console</div>

<style>
	.console {
		width: 100%;
		height: 100%;
	}
</style>
