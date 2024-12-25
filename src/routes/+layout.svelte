<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="app">

	<main>
		{@render children()}
	</main>

	<footer>
	</footer>
</div>

<style>
    :global(body) {
        @apply font-body;
    }
</style>
