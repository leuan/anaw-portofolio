<script lang="ts">
	import { onDestroy } from 'svelte';

	export let images: string | string[] = '';
	export let name = '';
	let currentIndex = 0;

	// Change the image every 3 seconds
	const interval = setInterval(() => {
		if (typeof images !== 'string') {
			currentIndex = (currentIndex + 1) % images.length;
		}
	}, Math.random() * 1000 + 2000 );

	// Cleanup interval on component destroy
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="slideshow w-full aspect-video">
	{#if typeof(images) === "string"}
	   <img src={images} alt={name} class="hover:blur-md"/>
	{:else}
		<img src={images[currentIndex]} alt={name} class="hover:blur-md"/>
	{/if}
	<div
		class="hover-text font-playfair flex justify-center items-center text-3xl font-bold text-white md:text-5xl lg:text-8xl"
	>
		<p class="drop-shadow-xl text-center">
			{name}
		</p>
	</div>
</div>

<style>
	.slideshow {
		position: relative;
		overflow: hidden;
	}

	.slideshow img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* position: absolute; */
		top: 0;
		left: 0;
		transition: opacity0.5s ease-in;
	}

	.hover-text {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
		padding: 10px 20px;
		border-radius: 5px;
		opacity: 0;
		transition: opacity 0.4s ease-in;
		pointer-events: none;
	}

	.slideshow:hover .hover-text {
		opacity: 1;
	}
</style>
