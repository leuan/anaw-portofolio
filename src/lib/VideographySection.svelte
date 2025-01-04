<script lang="js">
	import VideoThumbnail from './components/VideoThumbnail.svelte';

	const videos = [
		{
			name: 'The Last Luke',
			images: [
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv084ksxUc5GQhCvOXh2ECSKEnII6YalORoY4ZXpBPK_CHrvuJMEdIo2MVxBqPG7rIOoaphuul5etpRYL9VyJT8w',
				'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/17d49270-1b2a-4511-80a8-1c5dbd41e8c8/article-cat-vet-visit-guide.jpg'
			]
		},
		{
			name: 'The Last Luke',
			images: [
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv084ksxUc5GQhCvOXh2ECSKEnII6YalORoY4ZXpBPK_CHrvuJMEdIo2MVxBqPG7rIOoaphuul5etpRYL9VyJT8w',
				'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/17d49270-1b2a-4511-80a8-1c5dbd41e8c8/article-cat-vet-visit-guide.jpg'
			]
		},
		{
			name: 'The Last Luke',
			images: [
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv084ksxUc5GQhCvOXh2ECSKEnII6YalORoY4ZXpBPK_CHrvuJMEdIo2MVxBqPG7rIOoaphuul5etpRYL9VyJT8w',
				'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/17d49270-1b2a-4511-80a8-1c5dbd41e8c8/article-cat-vet-visit-guide.jpg'
			]
		},
		{
			name: 'The Last Luke',
			images: [
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv084ksxUc5GQhCvOXh2ECSKEnII6YalORoY4ZXpBPK_CHrvuJMEdIo2MVxBqPG7rIOoaphuul5etpRYL9VyJT8w',
				'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/17d49270-1b2a-4511-80a8-1c5dbd41e8c8/article-cat-vet-visit-guide.jpg'
			]
		},
		{
			name: 'The Last Luke',
			images: [
				'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRv084ksxUc5GQhCvOXh2ECSKEnII6YalORoY4ZXpBPK_CHrvuJMEdIo2MVxBqPG7rIOoaphuul5etpRYL9VyJT8w',
				'https://assets-au-01.kc-usercontent.com/ab37095e-a9cb-025f-8a0d-c6d89400e446/17d49270-1b2a-4511-80a8-1c5dbd41e8c8/article-cat-vet-visit-guide.jpg'
			]
		},
	];
</script>

<section id="videography" class="min-h-screen snap-start scroll-m-11 bg-accent-800 md:scroll-m-14">
	<div class="flex flex-wrap">
	    {#each videos as video}
			<VideoThumbnail name={video.name} images={video.images}/>
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