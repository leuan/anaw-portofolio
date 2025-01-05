<script lang="js">
	import VideoThumbnail from './components/VideoThumbnail.svelte';
	import { VideoData } from './videoData';
	

</script>

<section id="videography" class="snap-start scroll-m-11 bg-accent-800 md:scroll-m-14">
	<div class="flex flex-wrap">
	    {#each VideoData as video, id}
			<VideoThumbnail name={video.name} images={video.images} pageId={id} />
		{/each}
	</div>
</section>

<style>
    .stripes-dark {
      background: repeating-linear-gradient(
        45deg, /* Diagonal direction */
        #fff, /* Start color */
        #fff 20px, /* End of the first stripe */
        #000 10px, /* Start of the second stripe */
        #000 40px /* End of the second stripe */
      );
    }
</style>