<script>
// @ts-nocheck

	import { page } from '$app/state';
	import { VideoData } from '$lib/videoData';
	import Icon from '@iconify/svelte';
	import Youtube from 'svelte-youtube-embed';
	import { goto, preloadData } from '$app/navigation';

	let videoID = $state(Number(page.url.searchParams.get('id')));
	let video = {
		name: '',
		synopsis: '',
		link: '',
		images: [''],
		contribution: ''
	};

	let slicedName = $state(['', '']);
	//TODO redirect to 404 if invalid

	$effect(() => {
		if (videoID && videoID < 0 && videoID >= VideoData.length) {
			return;
		}
		video = VideoData[videoID];
		const words = video.name.toUpperCase().split(' ');
		slicedName[0] = words.slice(0, Math.round(words.length / 2)).join(' ');
		slicedName[1] = words.slice(Math.round(words.length / 2), words.length).join(' ');

		return;
	});
</script>

{#if slicedName[0]}
	<main>
		<div class="relative bg-white px-4 pt-4 font-inconsolata text-5xl text-black md:text-8xl">
			<h1 class="z-10 w-full border-b-4 border-t-8 border-black">{slicedName[0]}</h1>
			<div class="stripes absolute right-4 top-10 hidden h-16 w-80 md:block"></div>
		</div>
		<div class="relative bg-black px-4 font-inconsolata text-5xl text-white md:text-8xl">
			<h1 class="border-b-8 border-t-4 border-white">{slicedName[1]}</h1>
			<div
				class="stripes-dark absolute right-4 top-5 hidden h-16 w-80 transition-all hover:backdrop-invert md:block"
			></div>
		</div>
		<div class="min-h-screen bg-black p-4 pb-20">
			<button
				onclick={() => {
					goto('/');
				}}
				onmouseover={async () => await preloadData('/')}
				onfocus={async () => await preloadData('/')}
				class="mb-2 flex items-center font-inconsolata text-xl font-bold text-white"
			>
				<Icon icon="material-symbols-light:arrow-back-2-rounded" width="20" height="20" />
				<span> BACK </span>
			</button>
			<div class="flex w-full justify-center">
				<div class="max-w-screen-xl grow">
					<Youtube
						id={video.link}
						<!-- altThumb={true} -->
						--title-color={'#FFF'}
						--title-shadow-color="{'#D6CEFD'}200"
						--title-font-family="Playfair Display"
					>
						<img
							slot="thumbnail"
							alt="A Youtube video"
							src={video.images[0]}
							style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: black"
						/>
					</Youtube>
				</div>
			</div>
			<div class="mt-4 flex flex-col items-center gap-4">
				<h2
					class="w-full border-b-2 border-t-2 border-secondary-700 px-2 pb-1 text-3xl font-bold text-secondary-700"
				>
					Synopsis
				</h2>
				<p class="max-w-screen-lg text-justify text-white">{video.synopsis}</p>
				<h2
					class="w-full border-b-2 border-t-2 border-secondary-700 px-2 pb-1 text-3xl font-bold text-secondary-700"
				>
					In the Making
				</h2>
				<p class="max-w-screen-lg text-justify text-white">{video.contribution}</p>

				<h2
					class="w-full border-b-2 border-t-2 border-secondary-700 px-2 pb-1 text-3xl font-bold text-secondary-700"
				>
					Stills
				</h2>
				{#each video.images.slice(1) as url}
					<img src={url} alt="Still from the movie" />
				{/each}
			</div>
		</div>
	</main>
{/if}

<style lang="postcss">
	.stripes-dark {
		background: repeating-linear-gradient(
			45deg,
			/* Diagonal direction */ #fff,
			/* Start color */ #fff 20px,
			/* End of the first stripe */ #000 10px,
			/* Start of the second stripe */ #000 40px /* End of the second stripe */
		);
	}

	.stripes {
		@apply text-xl;

		background: repeating-linear-gradient(
			-45deg,
			/* Diagonal direction */ #fff,
			/* Start color */ #fff 20px,
			/* End of the first stripe */ #000 10px,
			/* Start of the second stripe */ #000 40px /* End of the second stripe */
		);
	}
</style>
