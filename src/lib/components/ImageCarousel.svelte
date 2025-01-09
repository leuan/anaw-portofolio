<script>
	export let images;
	import { onMount } from 'svelte';

	let container;
	let currentIndex = 0;
	let scrollProgress = 0;
	let isInView = false;

	onMount(() => {
		setInterval(() => {
			if (!isInView) {
				return;
			}
			if (currentIndex === images.length - 1) {
				currentIndex = 0;
			} else {
				currentIndex++;
			}
			scrollToImage(currentIndex);
		}, 5000);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isInView = entry.isIntersecting;
				});
			},
			{
				threshold: 0.15 // triggers when 15% of carousel is visible
			}
		);

		observer.observe(container);

		return () => observer.disconnect();
	});

	function handleScroll(e) {
		const element = e.target;
		const maxScroll = element.scrollWidth - element.clientWidth;
		scrollProgress = (element.scrollLeft / maxScroll) * 100;
		currentIndex = Math.floor((element.scrollLeft / maxScroll) * images.length)
	}

	function scrollToImage(index) {
		const images = container.children;
		if (images[index]) {
			images[index].scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
		}
	}
</script>

<div class="relative w-full max-w-screen-xl">
	<!-- Progress bar -->
	<div class="relative mt-4 h-0.5 w-full bg-accent-200">
		<div
			class="absolute left-0 h-full bg-primary-700 transition-all duration-100 ease-out"
			style="width: {scrollProgress}%"
		></div>
	</div>

	<!-- Images -->
	<div
		bind:this={container}
		class="scrollbar-none flex snap-x snap-mandatory overflow-x-auto"
		on:scroll={handleScroll}
	>
		{#each images as url, i}
			<div class="w-full flex-none snap-start">
				<img src={url} alt="Still from the movie" class="h-full w-full object-cover" />
			</div>
		{/each}
	</div>
</div>
