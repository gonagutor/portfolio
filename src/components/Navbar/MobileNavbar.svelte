<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import LanguageChanger from '$components/LanguageChanger/LanguageChanger.svelte';

	let prefersLight: boolean = window.matchMedia('(prefers-color-scheme: light)').matches;

	function onChangeTheme() {}
</script>

<nav>
	<section class="title-language-theme">
		<h1 class="title">GAT</h1>
		<LanguageChanger>
			<button class="change-theme-button" on:click={onChangeTheme}>
				{#if prefersLight}
					<img src="icons/moon.svg" alt={$t('alt.enableDarkMode')} />
				{:else}
					<img src="icons/sun.svg" alt={$t('alt.disableDarkMode')} />
				{/if}
			</button>
		</LanguageChanger>
	</section>
	<section class="navigator-container">
		<ul class="navigator">
			<li><a id="contactMe" href="/contact">{$t('contactMe')}</a></li>
			<li><a href="/">{$t('title.aboutMe')}</a></li>
			<li><a href="/techstack">{$t('title.myTechstack')}</a></li>
			<li><a href="/projects">{$t('title.projects')}</a></li>
			<li><a href="/experience">{$t('title.experience')}</a></li>
		</ul>
	</section>
</nav>

<style>
	nav {
		width: 100vw;
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

	.change-theme-button {
		margin-left: 0.25rem;
		border: none;
		display: grid;
		grid: 1fr;
		justify-items: center;
		align-items: center;

		background: none;
		color: var(--background);
	}

	.navigator-container {
		border-bottom: 1px solid var(--foreground);
		overflow-x: scroll;
		overflow-y: hidden;
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
		justify-content: center;
		gap: 0.75rem;

		height: calc(3rem - 1px);
		width: max-content;
		margin: 0;
		padding: 0;
		padding-inline: 0.5rem;

		list-style-type: none;
	}

	.navigator > li {
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

	#contactMe {
		padding-inline: 1rem;
		padding-block: 0.438rem;

		color: var(--background);
		background-color: var(--foreground);
		border-radius: 50rem;
	}
</style>
