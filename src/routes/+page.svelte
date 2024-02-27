<script lang="ts">
	import { HCJStore } from '$lib/store';
	import { config } from '$lib/config';
	console.log('config', config);
	import type { Config } from '$lib/config';
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
	import Resizer from '../lib/elements/Resizer.svelte';
	import HTML from '../lib/frames/html.svelte';
	import CSS from '../lib/frames/css.svelte';
	import JS from '../lib/frames/js.svelte';
	import Rendered from '../lib/frames/rendered.svelte';
	import Console from '../lib/frames/Console.svelte';

	$HCJStore.html = config.currentPen.html;
	$HCJStore.css = config.currentPen.css;
	$HCJStore.js = config.currentPen.js;

	let leftPaneSize = 30;
	let rightPaneSize = 70;
	let htmlPaneSize = 30;
	let cssPaneSize = 30;
	let jsPaneSize = 30;
</script>

<PaneGroup direction="horizontal" class="panGroup" style="flex-grow: 1;">
	<Pane defaultSize={leftPaneSize} class="leftPane">
		<PaneGroup direction="vertical">
			<Resizer direction={'vertical'} noResize={true}>HTML</Resizer>
			<Pane defaultSize={htmlPaneSize} class="htmlPane">
				<HTML />
			</Pane>
			<PaneResizer>
				<Resizer direction={'vertical'}>CSS</Resizer>
			</PaneResizer>
			<Pane defaultSize={cssPaneSize} class="cssPane">
				<CSS />
			</Pane>
			<PaneResizer>
				<Resizer direction={'vertical'}>JS</Resizer>
			</PaneResizer>
			<Pane defaultSize={jsPaneSize} class="jsPane">
				<JS />
			</Pane>
		</PaneGroup>
		<!-- </div> -->
	</Pane>

	<PaneResizer><Resizer /></PaneResizer>
	<Pane defaultSize={rightPaneSize} class="rightPane">
		<PaneGroup direction="vertical">
			<Pane defaultSize={70} class="renderedPane">
				<Resizer direction={'vertical'} noResize={true}>Rendered</Resizer>
				<Rendered />
			</Pane>
			<PaneResizer>
				<Resizer direction={'vertical'}>Console</Resizer>
			</PaneResizer>
			<Pane defaultSize={5} class="consolePane">
				<Console />
			</Pane>
		</PaneGroup>
	</Pane>
</PaneGroup>

<style>
</style>
