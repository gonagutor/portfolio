<script lang="ts">
	import { onMount } from 'svelte';

	import ThemeChanger from '$components/common/ThemeChanger/ThemeChanger.svelte';
	import LanguageChanger from '$components/common/LanguageChanger/LanguageChanger.svelte';
	import Socials from './components/Socials.svelte';
	import NavigatorButton from './components/NavigatorButton.svelte';
	import { MOBILE_ROUTE_TAG_MAPPING, ROUTE_TAG_MAPPING } from '$lib/constants';

	export let current: string;

	let routes = ROUTE_TAG_MAPPING;
	let routesList = Object.keys(ROUTE_TAG_MAPPING);
	let previousPage = routesList.indexOf(current) - 1;
	let nextPage = routesList.indexOf(current) + 1;

	onMount(() => {
		function handleResize() {
			if (window.innerWidth >= 842) return;
			routes = MOBILE_ROUTE_TAG_MAPPING;
			routesList = Object.keys(MOBILE_ROUTE_TAG_MAPPING);
			previousPage = routesList.indexOf(current) - 1;
			nextPage = routesList.indexOf(current) + 1;
		}

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="mobile-lines-background">
	<div class="lines">
		<div class="vertical-line-container" id="left-line">
			<div class="vertical-line" />
		</div>
		<div id="bottom-container">
			{#if previousPage >= 0}
				<NavigatorButton
					reverse={true}
					href={routesList[previousPage]}
					text={routes[routesList[previousPage]]}
				/>
			{:else}
				<Socials horizontal />
			{/if}
			<div id="site-settings">
				<ThemeChanger size={42} />
				<LanguageChanger />
			</div>
			{#if nextPage < routesList.length}
				<NavigatorButton
					reverse={false}
					href={routesList[nextPage]}
					text={routes[routesList[nextPage]]}
				/>
			{:else}
				<Socials horizontal />
			{/if}
		</div>
		<div class="vertical-line-container">
			<div class="vertical-line" />
		</div>
	</div>
	<slot />
</div>

<style>
	.mobile-lines-background {
		display: none;
		position: relative;
		pointer-events: none;
		z-index: 999;
	}

	@media (max-width: 1268px) {
		.mobile-lines-background {
			display: inherit;
		}
	}

	@media (max-width: 842px) {
		#site-settings {
			display: none !important;
		}
	}

	.lines {
		display: flex;
		flex-direction: row;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		position: absolute;
		height: calc(100% + 4rem);
		padding: 1rem 1rem 0 1rem;
		z-index: 1;
	}

	#bottom-container {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex: 1;

		margin-block: 1.5rem;
		margin-bottom: 1.5rem;
		margin-left: -1px;
		background: var(--background);
		padding-top: 1.5rem;
	}

	.vertical-line-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.vertical-line {
		width: 1px;
		flex-grow: 1;
		background: var(--foreground);
	}

	#left-line {
		height: calc(100% - 1.313rem - 1.5rem);
	}

	#site-settings {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>
