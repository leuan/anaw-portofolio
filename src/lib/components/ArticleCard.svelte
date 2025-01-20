<script lang="js">
	let { article } = $props();
</script>

<div class="flex flex-col justify-between max-w-prose border-8 border-black p-4 md:w-5/12">
	<div>
		<div class="items-top mt-3 flex w-full h-24 justify-center">
			<h1 class="mb-2 text-center text-4xl font-semibold">
				{article.name}
			</h1>
		</div>

		<div>
			<p class="text-justify">{article.summary}</p>
		</div>
	</div>

	<a
		href={article.link}
		class="font-2xl mt-8 flex justify-center border-2 border-black py-3 font-bold transition ease-in hover:bg-black hover:text-white"
	>
		<span> READ MORE </span>
	</a>
</div>

<style>
</style>
