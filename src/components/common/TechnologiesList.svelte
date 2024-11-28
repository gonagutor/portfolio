<script lang="ts">
	import { themeStore, THEMES } from '$lib/stores/theme';
	import technologies from '$lib/data/technologies.json';
	import type { Technology } from '$lib/types/technology';

	const typedTechnologies: Record<string, Technology> = technologies;
	export let items: string[];
</script>

<ul class="tech-list">
	{#each items as item}
		<li class="tech-item">
			<img
				style={($themeStore === THEMES.DARK && typedTechnologies[item].isTooDark) ||
				($themeStore === THEMES.LIGHT && typedTechnologies[item].isTooLight)
					? 'filter: invert();'
					: ''}
				width="24px"
				height="24px"
				src={typedTechnologies[item]?.image ?? '/images/placeholder.svg'}
				alt={typedTechnologies[item]?.name ?? item}
			/>
			<span>{typedTechnologies[item]?.name ?? item}</span>
		</li>
	{/each}
</ul>

<style>
	.tech-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;

		padding: 0;
		margin: 0;
	}

	.tech-item {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}
</style>
