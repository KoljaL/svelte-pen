<script lang="ts">
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	export let noResize: boolean = false;
	let style = '';
	let width = '1rem';
	let height = '2rem';

	if (direction === 'horizontal') {
		style = `height: 100%; width: ${width};`;
	} else if (direction === 'vertical') {
		style = `height:${height}; width: 100%;`;
	}
</script>

<div
	class="resizer"
	class:horizontal={direction === 'horizontal'}
	class:vertical={direction === 'vertical'}
	class:noResize
	{style}
>
	<slot />
	{#if direction === 'vertical'}
		<button> click </button>
	{/if}
</div>

<style>
	.resizer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #222;
		opacity: 0.7;
		transition: opacity 0.3s;
	}

	.resizer:hover {
		opacity: 1;
	}
	.resizer.noResize:hover {
		opacity: 0.7;
		cursor: default;
	}
	.horizontal {
		cursor: ew-resize;
	}

	.vertical {
		cursor: ns-resize;
	}

	button {
		background-color: #333;
		color: white;
		border: none;
		padding: 0.15rem;
	}

	button:hover {
		background-color: #444;
	}
</style>
