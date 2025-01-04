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



<style lang="postcss">
    :global(body) {
        @apply font-playfair text-xl;
    }

    
</style>
