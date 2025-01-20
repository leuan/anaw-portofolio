<script lang="js">
	import ArticleCard from './components/ArticleCard.svelte';
	import { PaperData } from './data/paperData';
</script>

<section id="articles" class="snap-start scroll-m-11 bg-white md:scroll-m-14">
	<div class="relative bg-white p-4 font-inconsolata text-5xl text-black md:text-8xl">
		<h1 class="border-b-8 border-t-8 border-black">ARTICLES</h1>
		<div class="stripes absolute right-4 top-8 hidden h-20 w-80 md:block"></div>
	</div>
	<div class="flex justify-center my-4">
		<p class="max-w-prose text-center">
			The series of articles and essays below represent both an archive and a reflection of my
			journey as a student exploring how art, culture, and technology shape the (digital) world
			around us. Through my work, I have delved into the ways media challenges ideas, sparks
			creativity, and reflects society. This collection aims to highlight curiosity, critical
			thinking, and love for meaningful discussions about the continuously evolving media landscape.
		</p>
	</div>

	<div class="flex flex-wrap justify-center gap-4 p-4 xl:flex-nowrap">
		{#each PaperData as article}
			<ArticleCard {article} />
		{/each}
	</div>
</section>

<style lang="postcss">
</style>
