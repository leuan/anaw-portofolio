<script lang="ts">
	import AboutSection from '$lib/AboutSection.svelte';
	import Icon from '@iconify/svelte';
	import VideographySection from '$lib/VideographySection.svelte';
	import PaperSection from '$lib/PaperSection.svelte';
	import Typewriter from 'typewriter-effect/dist/core';
	import { onMount } from 'svelte';

	const scrollToElement = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	let openingLine: HTMLParagraphElement;

	onMount(() => {
		const typewriter = new Typewriter(openingLine, { loop: true });
		typewriter
			.pauseFor(500)
			.typeString('hi!')
			.pauseFor(1500)
			.typeString(" I'm Ana and")
			.pauseFor(500)
			.typeString(' this is my portfolio.')
			.pauseFor(5000)
			.start();
	});
</script>

<svelte:head>
	<title>Ana's Portfolio</title>
	<meta name="description" content="Ana Voicu's Portfolio" />
</svelte:head>

<section id="home" class="flex h-dvh flex-col justify-between bg-black">
	<!-- social links -->
	<!-- <FilmBackground/> -->
	<div
		class="z-20 mt-6 flex w-dvw items-center justify-center gap-4 self-end leading-4 text-secondary-800"
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
	<div class="glowing z-20 flex flex-col items-center justify-center">
		<p
			bind:this={openingLine}
			class=" opening p-5 text-center font-playfair text-6xl font-bold text-secondary-700 md:text-8xl"
		>
			hi! I'm Ana and this is my portfolio.
		</p>
	</div>

	<!-- scroll down indicator -->
	<div class="z-20 flex animate-pulse flex-col items-center justify-center pb-3 text-secondary-800">
		<p class="m-2 font-playfair text-xs">scroll down...</p>
		<Icon icon="line-md:arrow-down" width="50" height="50" />
	</div>
</section>

<nav
	class="sticky top-0 z-10 flex w-full justify-around gap-5 bg-secondary-700 px-5 py-3 font-playfair text-sm font-semibold text-black md:text-2xl"
>
	<button
		class="hover:text-secondary-900"
		onclick={() => {
			scrollToElement('#home');
		}}>home</button
	>
	<button
		class="hover:text-secondary-900"
		onclick={() => {
			scrollToElement('#videography');
		}}>videography</button
	>
	<button
		class="hover:text-secondary-900"
		onclick={() => {
			scrollToElement('#articles');
		}}>articles</button
	>
	<button
		class="hover:text-secondary-900"
		onclick={() => {
			scrollToElement('#about');
		}}>about me</button
	>
</nav>

<VideographySection />

<PaperSection />

<AboutSection />

<style lang="postcss">
	.glowing {
		animation: pulse-glow 5s ease-in-out infinite;
	}

	@keyframes pulse-glow {
		0%,
		100% {
			text-shadow: 0 0 300px #2f27ce 0 0 30px #000;
		}
		50% {
			text-shadow: 0 0 150px #2f27ce 0 0 30px #000;
		}
	}

	.opening {
		max-width: 15ch;
	}
</style>
