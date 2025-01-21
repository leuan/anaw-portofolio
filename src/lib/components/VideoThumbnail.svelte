<script lang="ts">
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	export let images: string | string[] = '';
	export let name = '';
	export let pageId;
	let currentIndex = 0;

	// Change the image every 3 seconds
	const interval = setInterval(
		() => {
			if (typeof images !== 'string') {
				currentIndex = (currentIndex + 1) % images.length;
			}
		},
		Math.random() * 1000 + 2000
	);

	// Cleanup interval on component destroy
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<button
	onclick={() => {
		goto(`/videos/${pageId}`);
	}}
	class="slideshow aspect-video w-full md:w-1/2"
>
	{#if typeof images === 'string'}
		<img src={images} alt={name} class="hover:blur-md" loading="lazy" />
	{:else}
		<img src={images[currentIndex]} alt={name} class="hover:blur-md" loading="lazy" />
	{/if}
	<div
		class="hover-text flex flex-col items-center justify-around font-playfair font-bold text-secondary-700 text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
	>
		<p class="mt-16 text-center drop-shadow-xl">
			{name}
		</p>
		
		<span class="flex items-center text-secondary-900 gap-2">
			<p class="font-inconsolata text-sm font-normal uppercase">Click to watch</p>
			<Icon
				icon="mynaui:click-solid"
				width="24"
				height="24"
			/>
		</span>
	</div>
</button>

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
