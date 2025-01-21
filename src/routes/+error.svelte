<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="p-8 flex flex-col gap-8 w-screen h-screen text-white">
	<h1 class="text-7xl font-extrabold">:(</h1>
	{#if page.status === 404}
		<h1 class="text-5xl">Page not found</h1>
		<p>Sorry, we couldn't find the page you were looking for.</p>
	{:else}
		<h1 class="text-5xl">Error {page.status}</h1>
		<p>{page.error?.message}</p>
	{/if}
	
	<a class="underline" href="/">Click me to go back home</a>
</div>

