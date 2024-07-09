<script lang="ts">
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';
	import { t } from '$lib/i18n/i18n';
</script>

<nav>
	<h1 class="title">GAT</h1>
	<ul class="navigator">
		<li><a href="/">{$t('title.aboutMe')}</a></li>
		<li><a href="/techstack">{$t('title.myTechstack')}</a></li>
		<li><a href="/projects">{$t('title.projects')}</a></li>
		<li><a href="/experience">{$t('title.experience')}</a></li>
		<li><a id="contactMe" href="/contact">{$t('contactMe')}</a></li>
	</ul>
</nav>

<style>
	@media (max-width: 842px) {
		nav {
			display: none !important;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		height: 4.625rem;
		padding-left: 3rem;
		padding-right: 0.5rem;
		border-bottom: 1px solid var(--foreground);
	}

	.title {
		font-family: var(--font-display);
		letter-spacing: -2px;
		font-weight: bolder;
		font-size: 2rem;
		margin: 0;
		margin-top: 0.5rem;
	}

	.navigator {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		margin: 0;
		padding: 0;

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
