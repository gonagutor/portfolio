<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { MOBILE_ROUTE_TAG_MAPPING } from '$lib/constants';
	import PositionMarker from '$components/icons/PositionMarker.svelte';
	import LanguageChanger from '$components/LanguageChanger/LanguageChanger.svelte';
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { afterUpdate } from 'svelte';

	export let current: string;
	let scroller: Element;

	function scrollPageButtonIntoView({
		element = document.querySelector(`.mobile-nav-item#${MOBILE_ROUTE_TAG_MAPPING[current]}`),
		fast = false
	}: {
		element?: Element | null;
		fast?: boolean;
	}) {
		if (!element) {
			console.error('Element not found');
			return;
		}
		setTimeout(() => {
			element.scrollIntoView({
				behavior: fast ? 'instant' : 'smooth',
				block: 'nearest',
				inline: 'center'
			});
		}, 50);
	}

	const findNearest = (elements: HTMLElement[], scrollOffset: number) => {
		let nearestIndex: number = 0;
		let minDistance = Infinity;
		elements.forEach((e, index) => {
			const elementCenter = e.offsetLeft + e.offsetWidth / 2;
			const distance = Math.abs(elementCenter - (scrollOffset + scroller.clientWidth / 2));
			if (distance < minDistance) {
				minDistance = distance;
				nearestIndex = index;
			}
		});
		return nearestIndex;
	};

	function onScrollEnd() {
		const nearestIndex = findNearest(
			Array.from(scroller.children) as HTMLElement[],
			scroller.scrollLeft
		);

		const route = Object.keys(MOBILE_ROUTE_TAG_MAPPING)[nearestIndex];
		goto(route);
		scrollPageButtonIntoView({
			element: document.querySelector(`.mobile-nav-item#${MOBILE_ROUTE_TAG_MAPPING[route]}`),
			fast: true
		});
	}

	onMount(() => {
		function handleResize() {
			if (window.innerWidth >= 842) return;
			scrollPageButtonIntoView({ fast: true });
		}

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});

	afterUpdate(() => {
		scrollPageButtonIntoView({ fast: false });
	});
</script>

<nav>
	<section class="title-language-theme">
		<h1 class="title">{$t('header')}</h1>
		<LanguageChanger>
			<ThemeChanger />
		</LanguageChanger>
	</section>
	<section class="navigator-container">
		<PositionMarker />
		<ul class="navigator" bind:this={scroller} on:scrollend={onScrollEnd}>
			{#each Object.keys(MOBILE_ROUTE_TAG_MAPPING) as route}
				<li>
					<a
						aria-current={current === route}
						class="mobile-nav-item"
						id={`${MOBILE_ROUTE_TAG_MAPPING[route]}`}
						href={route}
					>
						{$t(`title.${MOBILE_ROUTE_TAG_MAPPING[route]}`)}
					</a>
				</li>
			{/each}
		</ul>
	</section>
</nav>

<style>
	@media (max-width: 842px) {
		nav {
			display: unset !important;
		}
	}

	nav {
		display: none;
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
	}

	.title-language-theme {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: calc(5rem - 1px);
		padding-inline: 1rem;
		border-bottom: 1px solid var(--foreground);
	}

	.title {
		font-family: var(--font-display);
		letter-spacing: -2px;
		font-weight: bolder;
		font-size: 2rem;
		padding: 0;
		margin: 0;
	}

	.navigator-container {
		position: relative;
		border-bottom: 1px solid var(--foreground);
	}

	.navigator-container::-webkit-scrollbar {
		display: none;
	}

	.navigator-container {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.navigator {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		gap: 0.75rem;

		height: calc(3rem - 1px);
		margin: 0;
		padding-inline: calc(100vw / 2);

		list-style-type: none;
		scroll-snap-type: x mandatory;
		-ms-overflow-style: none;
		scrollbar-width: none;
		overflow-x: scroll;
		overflow-y: hidden;
	}

	.navigator > li {
		scroll-snap-align: center;
		padding: 0;
		margin: 0;
	}

	.navigator > li > a {
		padding: 0;
		margin: 0;

		font-size: 1.5rem;
		letter-spacing: -2px;
		font-weight: bold;
		white-space: nowrap;
		color: var(--foreground);
		text-decoration: none;
	}

	.mobile-nav-item#contactMe {
		padding-inline: 1rem;
		padding-block: 0.438rem;

		color: var(--background);
		background-color: var(--foreground);
		border-radius: 50rem;
	}
</style>
