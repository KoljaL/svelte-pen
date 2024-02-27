<script lang="ts">
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
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
	{style}
>
	<slot />
</div>

<style>
	.resizer {
		background-color: #222;
		opacity: 0.5;
		transition: opacity 0.3s;
	}
	.resizer:hover {
		opacity: 1;
	}

	.horizontal {
		cursor: ew-resize;
		background-color: red;
	}

	.vertical {
		cursor: ns-resize;
		background-color: blue;
	}
</style>
