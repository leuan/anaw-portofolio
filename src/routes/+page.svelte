<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Ana Voicu's Portofolio" />
</svelte:head>

<section>
	<div class="flex h-dvh flex-col justify-between bg-black">
		<div
			class="mt-6 flex w-dvw items-center justify-center gap-4 self-end leading-4 text-secondary-800"
		>
			<Icon icon="line-md:phone" width="50" height="50" />
			<Icon icon="line-md:email" width="55" height="55" />
			<Icon icon="line-md:instagram" width="50" height="50" />
			<Icon icon="line-md:linkedin" width="45" height="45" />
		</div>
		<div class="flex flex-col items-center justify-center">
			<p
				class="font-display h-36 bg-gradient-to-b from-primary-900 via-secondary-600 via-40% to-primary-900 bg-clip-text text-center text-8xl font-bold text-transparent"
			>
				hi! I'm Ana and
			</p>
			<p
				class="font-display h-36 overflow-visible bg-gradient-to-b from-primary-900 via-secondary-600 via-40% to-primary-900 bg-clip-text text-center text-8xl font-bold text-transparent"
			>
				this is my portofolio.
			</p>
		</div>

		<div
			class="font-body flex w-dvw justify-around gap-5 self-end bg-secondary-700 px-5 py-3 text-2xl font-semibold lowercase text-black sticky bottom-0"
		>
			<!-- <a href="#">Home</a> -->
			<a href="#">Videography</a>
			<a href="#">Articles</a>
			<a href="#">About me</a>
		</div>
	</div>
</section>

<section>
	<div class="h-dvh bg-accent-800">
		<p>Test</p>
	</div>
</section>

<section>
	<div class="h-dvh bg-primary-300">
		<p>Test</p>
	</div>
</section>

<style>
</style>
