<script lang="ts">
	import LanguageChanger from '$components/LanguageChanger/LanguageChanger.svelte';
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';
	import NavigatorArrow from './components/NavigatorArrow.svelte';
	import Socials from './components/Socials.svelte';
	import { ROUTES } from '$lib/constants';

	export let current: string;

	const routes = Object.values(ROUTES);
	const previousPage = routes.indexOf(current) - 1;
	const nextPage = routes.indexOf(current) + 1;
</script>

<div class="desktop-lines-background">
	<div class="lines">
		<div class="vertical-line-container" id="left-line">
			<div class="vertical-line" />
			<div class="buttons-container">
				{#if previousPage >= 0}
					<NavigatorArrow reverse={true} href={routes[previousPage]} />
				{:else}
					<Socials />
				{/if}
			</div>
		</div>
		<div id="bottom-line-container">
			<ThemeChanger />
			<LanguageChanger />
			<div id="bottom-line" />
		</div>
		<div class="vertical-line-container" id="right-line">
			<div class="vertical-line" />
			<div class="buttons-container">
				{#if nextPage < routes.length}
					<NavigatorArrow href={routes[nextPage]} />
				{:else}
					<Socials />
				{/if}
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	.desktop-lines-background {
		position: relative;
	}

	@media (max-width: 1268px) {
		.desktop-lines-background {
			display: none;
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
		height: 100%;
		padding: 3rem 3rem 0 3rem;
		z-index: 1;
	}

	#bottom-line-container {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		gap: 1rem;

		margin-left: 1.5rem;
		margin-bottom: 1.5rem;
	}

	#bottom-line {
		width: 100%;
		height: 1px;
		background: var(--foreground);
		margin-right: 3rem;
	}
	.vertical-line-container {
		display: flex;
		position: relative;
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

	.buttons-container {
		display: flex;
		position: absolute;
		justify-content: center;
		align-items: center;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.vertical-line-container#right-line > .buttons-container {
		bottom: calc(1.313rem + 1.5rem);
	}
</style>
