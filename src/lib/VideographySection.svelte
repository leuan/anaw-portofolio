<script lang="js">
	import VideoThumbnail from './components/VideoThumbnail.svelte';
	import { VideoData } from './data/videoData';
	

</script>

<section id="videography" class="snap-start scroll-m-11 bg-accent-800 md:scroll-m-14">
   	<div class="relative bg-black p-4 font-inconsolata text-5xl text-white md:text-8xl">
		<h1 class="z-10 w-full border-b-8 border-t-8 border-white">VIDEOGRAPHY</h1>
		<div class="stripes-dark absolute right-4 top-10 hidden h-16 w-80 md:block"></div>
	</div>
	<div class="flex flex-wrap">
	    {#each VideoData as video, id}
			<VideoThumbnail name={video.name} images={video.images} pageId={id} />
		{/each}
	</div>
</section>

<style>
</style>