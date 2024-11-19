<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { ROUTE_TAG_MAPPING } from '$lib/constants';

	export let current;
</script>

<nav>
	<h1 class="title">{$t('header')}</h1>
	<ul class="navigator">
		{#each Object.keys(ROUTE_TAG_MAPPING) as route}
			<li>
				<a
					aria-current={current === route}
					class="desktop-nav-item"
					id={`${ROUTE_TAG_MAPPING[route]}`}
					href={route}>{$t(`title.${ROUTE_TAG_MAPPING[route]}`)}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	@media (max-width: 842px) {
		nav {
			display: none !important;
		}
	}

	nav {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		height: calc(4.625rem - 1px);
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
		gap: 0.75rem;

		margin: 0;
		padding: 0;

		list-style-type: none;
	}

	.navigator > li {
		padding: 0;
		margin: 0;
	}

	.navigator > li > a {
		padding: 0.75rem;
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

	.desktop-nav-item#contactMe {
		padding-inline: 1rem;
		padding-block: 0.438rem;

		color: var(--background);
		background-color: var(--foreground);
		border-radius: 50rem;
	}
</style>
