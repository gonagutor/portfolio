<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { ROUTES } from '$lib/constants';

	export let current;
</script>

<nav>
	<h1 class="title">{$t('header')}</h1>
	<ul class="navigator">
		<li>
			<a aria-current={current === ROUTES.ABOUT_ME} href={ROUTES.ABOUT_ME}>{$t('title.aboutMe')}</a>
		</li>
		<li>
			<a aria-current={current === ROUTES.MY_TECHSTACK} href={ROUTES.MY_TECHSTACK}
				>{$t('title.myTechstack')}</a
			>
		</li>
		<li>
			<a aria-current={current === ROUTES.PROJECTS} href={ROUTES.PROJECTS}>{$t('title.projects')}</a
			>
		</li>
		<li>
			<a aria-current={current === ROUTES.EXPERIENCE} href={ROUTES.EXPERIENCE}
				>{$t('title.experience')}</a
			>
		</li>
		<li>
			<a aria-current={current === ROUTES.CONTACT_ME} id="contactMe" href={ROUTES.CONTACT_ME}
				>{$t('contactMe')}</a
			>
		</li>
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
		text-decoration: none;

		color: var(--foreground);
	}

	.navigator > li > a[aria-current='true'] {
		padding: 0.75rem;
		border-radius: 50rem;
		background: var(--highlight-gradient);
	}

	#contactMe {
		padding-inline: 1rem;
		padding-block: 0.438rem;

		color: var(--background);
		background-color: var(--foreground);
		border-radius: 50rem;
	}
</style>
