<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { ROUTES } from '$lib/constants';
	import PositionMarker from '$components/icons/PositionMarker.svelte';
	import LanguageChanger from '$components/LanguageChanger/LanguageChanger.svelte';
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';

	export let current;
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
		<ul class="navigator">
			<li>
				<a aria-current={current === ROUTES.CONTACT_ME} id="contactMe" href={ROUTES.CONTACT_ME}>
					{$t('contactMe')}
				</a>
			</li>
			<li>
				<a aria-current={current === ROUTES.ABOUT_ME} href={ROUTES.ABOUT_ME}>
					{$t('title.aboutMe')}
				</a>
			</li>
			<li>
				<a aria-current={current === ROUTES.MY_TECHSTACK} href={ROUTES.MY_TECHSTACK}>
					{$t('title.myTechstack')}
				</a>
			</li>
			<li>
				<a aria-current={current === ROUTES.PROJECTS} href={ROUTES.PROJECTS}>
					{$t('title.projects')}
				</a>
			</li>
			<li>
				<a aria-current={current === ROUTES.EXPERIENCE} href={ROUTES.EXPERIENCE}>
					{$t('title.experience')}
				</a>
			</li>
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

		width: calc(100vw);
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
