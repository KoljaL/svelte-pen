<script>
	import '../app.css';
</script>

<main>
	<header>Svelte-Pen</header>
	<slot />
	<footer>
		<p>© 2024</p>
	</footer>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	header {
		background-color: #333;
		color: white;
		padding: 0.25rem;
		padding-left: 1rem;
		margin: 0;
		font-size: 2rem;
	}

	footer {
		background-color: #333;
		color: white;
		padding: 0rem;
		margin: 0;
		font-size: 0.5em;
		text-align: center;
	}
</style>
