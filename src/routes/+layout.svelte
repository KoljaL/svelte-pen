<script>
	import '../app.css';
</script>

<main>
	<header>Svelte-Pen</header>
	<slot />
	<footer>
		<p>© 2022</p>
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
		padding: 1rem;
		margin: 0;
		font-size: 2rem;
	}

	footer {
		background-color: #333;
		color: white;
		padding: 0.1rem;
		margin: 0;
		font-size: 1rem;
		text-align: center;
	}
</style>
