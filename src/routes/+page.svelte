<script lang="ts">
	import { HCJStore } from '$lib/store';
	import { config } from '$lib/config';
	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
	import Resizer from '$lib/elements/Resizer.svelte';
	import Rendered from '$lib/frames/Rendered.svelte';
	// import Console from '$lib/frames/Console.svelte';
	import Editor from '$lib/elements/Editor.svelte';

	$HCJStore.html = config.currentPen.html;
	$HCJStore.css = config.currentPen.css;
	$HCJStore.javascript = config.currentPen.javascript;
</script>

<PaneGroup direction="horizontal" class="panGroup" style="flex-grow: 1;">
	<Pane defaultSize={config.pageSettings.leftPaneSize} class="leftPane">
		<PaneGroup direction="vertical">
			<Resizer direction={'vertical'} noResize={true}>HTML</Resizer>
			<Pane defaultSize={config.pageSettings.htmlPaneSize} class="htmlPane">
				<Editor language="html" />
			</Pane>
			<PaneResizer>
				<Resizer direction={'vertical'}>CSS</Resizer>
			</PaneResizer>
			<Pane defaultSize={config.pageSettings.cssPaneSize} class="cssPane">
				<Editor language="css" />
			</Pane>
			<PaneResizer>
				<Resizer direction={'vertical'}>JS</Resizer>
			</PaneResizer>
			<Pane defaultSize={config.pageSettings.javascriptPaneSize} class="javascriptPane">
				<Editor language="javascript" />
			</Pane>
		</PaneGroup>
	</Pane>

	<PaneResizer><Resizer /></PaneResizer>
	<Pane defaultSize={config.pageSettings.rightPaneSize} class="rightPane">
		<PaneGroup direction="vertical">
			<Pane defaultSize={70} class="renderedPane">
				<Resizer direction={'vertical'} noResize={true}>Rendered</Resizer>
				<Rendered />
			</Pane>
			<!-- <PaneResizer>
				<Resizer direction={'vertical'}>Console</Resizer>
			</PaneResizer>
			<Pane defaultSize={config.pageSettings.consolePaneSize} class="consolePane">
				<Console />
			</Pane> -->
		</PaneGroup>
	</Pane>
</PaneGroup>
