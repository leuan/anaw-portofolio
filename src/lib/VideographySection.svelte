<script lang="js">
	import VideoThumbnail from './components/VideoThumbnail.svelte';
	import { VideoData } from './data/videoData';
	

</script>

<section id="videography" class="snap-start scroll-m-11 bg-accent-800 md:scroll-m-14">
	<div class="flex flex-wrap">
	    {#each VideoData as video, id}
			<VideoThumbnail name={video.name} images={video.images} pageId={id} />
		{/each}
	</div>
</section>

<style>
    
</style>