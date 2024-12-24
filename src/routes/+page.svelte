<script lang="ts">
	import Icon from '@iconify/svelte';

	const scrollToElement = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};
</script>

<svelte:head>
	<title>Ana's Portofolio</title>
	<meta name="description" content="Ana Voicu's Portofolio" />
</svelte:head>

<section id="home" class="snap-start">
	<div class="flex h-dvh flex-col justify-between bg-black">
		<!-- social links -->
		<div
			class="mt-6 flex w-dvw items-center justify-center gap-4 self-end leading-4 text-secondary-800"
		>
			<a class="transition ease-out hover:text-secondary-950" href="tel:+40730660506">
				<Icon icon="line-md:phone" width="50" height="50" />
			</a>
			<a class="transition ease-out hover:text-secondary-950" href="mailto:voicuanamaria@gmail.com">
				<Icon icon="line-md:email" width="55" height="55" />
			</a>
			<a
				class="transition ease-out hover:text-secondary-950"
				href="https://www.instagram.com/anaa.w_"
			>
				<Icon icon="line-md:instagram" width="50" height="50" />
			</a>
			<a
				class="transition ease-out hover:text-secondary-950"
				href="https://www.linkedin.com/in/ana-maria-voicu-519a05285/"
			>
				<Icon icon="line-md:linkedin" width="45" height="45" />
			</a>
		</div>

		<!-- heading -->
		<div class="glowing flex flex-col items-center justify-center">
			<p
				class="font-display bg-gradient-to-b from-primary-900 via-secondary-600 via-40% to-primary-900 bg-clip-text text-center text-6xl font-bold text-transparent md:text-8xl"
			>
				hi! I'm <span>Ana</span> and
			</p>
			<p
				class="font-display overflow-visible bg-gradient-to-b from-primary-900 via-secondary-600 via-40% to-primary-900 bg-clip-text p-5 text-center text-6xl font-bold text-transparent md:text-8xl"
			>
				this is my portofolio.
			</p>
		</div>

		<!-- scroll down indicator -->
		<div class="flex animate-pulse flex-col items-center justify-center pb-3 text-secondary-800">
			<p class="font-body m-2 text-xs">scroll down...</p>
			<Icon icon="line-md:arrow-down" width="50" height="50" />
		</div>
	</div>
</section>

<nav
	class="font-body sticky top-0 flex w-full justify-around gap-5 bg-secondary-700 px-5 py-3 text-sm font-semibold lowercase text-black md:text-2xl"
>
	<button
		onclick={() => {
			scrollToElement('#home');
		}}>Home</button
	>
	<button
		onclick={() => {
			scrollToElement('#videography');
		}}>Videography</button
	>
	<button
		onclick={() => {
			scrollToElement('#articles');
		}}>Articles</button
	>
	<button
		onclick={() => {
			scrollToElement('#about');
		}}>About me</button
	>
</nav>

<section id="videography" class="snap-start scroll-m-11 md:scroll-m-14">
	<div class="min-h-screen bg-accent-800">
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ratione reiciendis beatae error
			atque excepturi consequuntur voluptatem quam doloremque, debitis iste itaque autem saepe
			repellendus ullam nisi architecto minima iusto. Excepturi ratione repellat sunt quod, autem,
			culpa illum assumenda incidunt temporibus eos cupiditate enim fugiat maxime mollitia sint
			voluptas maiores eveniet quas est! Consectetur suscipit veritatis, similique et maxime sed.
			Expedita facilis fugiat dolorem tenetur. Mollitia id expedita, eum fuga dolores soluta
			recusandae ad qui placeat obcaecati hic consequuntur architecto iste. Inventore quas ratione
			enim perferendis ipsa. Laborum, ipsum tenetur. Aliquid dicta, quos corporis nisi inventore
			dolorum soluta magni repellendus quasi qui, deleniti dolor illum sunt laboriosam labore. Velit
			vero laboriosam perspiciatis hic accusantium voluptatibus rem veniam reiciendis animi dicta! A
			ipsum aliquid dolore incidunt. Facere quibusdam deleniti accusamus ducimus a molestias,
			laborum vero ut nobis! Quisquam, nihil libero nostrum tempora mollitia corporis? Quidem omnis
			dolor exercitationem ipsum maiores eligendi?
		</p>
	</div>
</section>

<section id="articles" class="snap-start scroll-m-11 md:scroll-m-14">
	<div class="min-h-screen bg-primary-300">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias reprehenderit, illum
			perspiciatis accusantium ducimus quam! Similique ut illum quisquam esse quas beatae distinctio
			non ea. Debitis corporis minus suscipit unde! Iure officiis voluptas temporibus fuga explicabo
			ipsum asperiores aspernatur, qui saepe magni quia omnis rerum sit perspiciatis ea minima
			veritatis praesentium labore et! Quis facilis incidunt exercitationem a laudantium dolorum.
			Exercitationem ad dolorum, distinctio cupiditate temporibus nostrum rerum officia maxime?
			Omnis distinctio soluta provident cupiditate fugit, ducimus unde cumque laudantium possimus,
			voluptatum corrupti commodi, pariatur ipsa explicabo sunt blanditiis! Consequatur? Asperiores
			nesciunt, alias architecto culpa at aliquam, cumque vero suscipit natus dolores recusandae ad
			earum, optio doloribus beatae cupiditate. Facere omnis veniam aliquid optio amet accusamus
			fuga ratione adipisci quibusdam! Aut, aliquam nemo voluptatibus exercitationem repudiandae
			nulla, sapiente quis laborum iste minima est, facere molestiae voluptas cum earum
			reprehenderit! Quasi error nulla quo cupiditate harum reiciendis dicta optio, facere
			accusantium!
		</p>
	</div>
</section>

<section id="about" class="snap-start scroll-m-11 md:scroll-m-14">
	<div class="min-h-screen bg-orange-500">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora, sunt a dolores hic
			quo, distinctio alias adipisci exercitationem facere consequatur. Aspernatur fugiat commodi
			numquam reprehenderit saepe. Corporis, dolorem laboriosam. Fugiat voluptate sapiente cumque
			minima tenetur debitis, voluptates vel accusamus. Officiis, inventore necessitatibus earum
			beatae voluptas ad sit voluptate, laudantium facilis quaerat repellendus perferendis iure.
			Adipisci nobis esse laudantium nam. Modi vel magni ut fugit, obcaecati nisi necessitatibus
			illum rerum ipsa consequuntur voluptas atque quas? Aliquid, libero et repellat tempora quia
			ipsa aperiam eos laudantium architecto minus, id voluptatibus a? Quod dolore numquam facere
			facilis reiciendis maxime, veniam sequi exercitationem minima. Nihil velit ipsam debitis
			similique, eligendi quis perspiciatis enim fugit ut nulla corporis dolores distinctio qui iste
			optio animi. Quibusdam soluta quam vitae ullam facilis distinctio officia, saepe sequi facere
			totam assumenda unde voluptas ex quis, dolores consequuntur nulla! Amet reprehenderit dolorem
			perspiciatis aspernatur minus! Facilis enim harum nisi!
		</p>
	</div>
</section>

<style>
	.glowing {
		text-shadow: 0 0 200px #2f27ce;
	}
</style>
