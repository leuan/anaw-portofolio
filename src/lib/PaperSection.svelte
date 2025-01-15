<script lang="js">
	import ArticleCard from './components/ArticleCard.svelte';
	import { PaperData } from './data/paperData';
</script>

<section id="articles" class="min-h-screen snap-start scroll-m-11 bg-white md:scroll-m-14">
	<div class="relative bg-white p-4 font-inconsolata text-5xl text-black md:text-8xl">
		<h1 class="border-b-8 border-t-8 border-black">ARTICLES</h1>
		<div class="stripes absolute right-4 top-8 hidden h-20 w-80 md:block"></div>
	</div>

	<div class="p-4 flex flex-wrap gap-4 xl:flex-nowrap justify-center">
		{#each PaperData as article}
			<ArticleCard {article} />
		{/each}
	</div>
</section>

<style lang="postcss">
</style>
