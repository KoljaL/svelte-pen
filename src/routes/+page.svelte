<script lang="ts">
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
	import Resizer from '../lib/elements/Resizer.svelte';
	import HTML from '../lib/frames/html.svelte';
	import CSS from '../lib/frames/css.svelte';
	import JS from '../lib/frames/js.svelte';
	import Rendered from '../lib/frames/rendered.svelte';
	import { HCJStore } from '$lib/store';
	let HCL = $HCJStore;

	$HCJStore.html = `<div>Hallo</div>`;
	$HCJStore.css = `div { width: 100%; height: 100%; color:white; }`;
	$HCJStore.js = `console.log('IFRAME', this);`;

	$: console.log('HCL', HCL);
</script>

<!-- <Resizer direction={'vertical'}>JS</Resizer> -->
<PaneGroup direction="horizontal" class="panGroup" style="flex-grow: 1;">
	<Pane defaultSize={30}>
		<div class="left-side">
			<PaneGroup direction="vertical">
				<Pane defaultSize={30}>
					<HTML />
				</Pane>
				<PaneResizer>
					<Resizer direction={'vertical'}>CSS</Resizer>
				</PaneResizer>
				<Pane defaultSize={30}>
					<CSS />
				</Pane>
				<PaneResizer>
					<Resizer direction={'vertical'}>JS</Resizer>
				</PaneResizer>
				<Pane defaultSize={30}>
					<JS />
				</Pane>
			</PaneGroup>
		</div>
	</Pane>

	<PaneResizer><Resizer /></PaneResizer>
	<Pane defaultSize={70}>
		<Rendered />
	</Pane>
</PaneGroup>

<style>
	.left-side {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

		min-width: 0;
	}
</style>
