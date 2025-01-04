<script>
  import { page } from '$app/state'; 
  
  let videoID = page.data.query.id;
</script>

<h1 class="text-xl">ID: {videoID}</h1>