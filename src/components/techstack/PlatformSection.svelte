<script lang="ts">
	import { locale } from '$lib/i18n/i18n';
	import type { TechStack } from '$lib/types/techstack';
	import ItemList from './ItemList.svelte';

	export let techstack: TechStack;
</script>

<div class="tech-grid-item">
	<h2>{techstack.title[$locale]}</h2>
	<p>{techstack.description[$locale]}</p>
	{#if techstack.categories}
		<ul class="tech-category-list">
			{#each techstack.categories as category}
				<li class="tech-category-item">
					<h3>{category.category[$locale]}</h3>
					<div>
						<ItemList items={category.items} />
					</div>
				</li>
			{/each}
		</ul>
	{/if}
	{#if techstack.items}
		<ItemList items={techstack.items} />
	{/if}
</div>

<style>
	h2 {
		font-family: var(--font-display);
	}

	.tech-category-list {
		display: table;

		margin: 0;
		padding: 0;
	}

	.tech-category-item {
		display: table-row;
	}

	.tech-category-item > h3 {
		display: table-cell;
		padding-top: 1rem;
		padding-right: 0.5rem;
	}

	.tech-category-item > div {
		display: table-cell;
		padding-top: 1rem;
	}
</style>
