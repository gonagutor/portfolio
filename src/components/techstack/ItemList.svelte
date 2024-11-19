<script lang="ts">
	import type { Item } from '$lib/types/techstack';

	export let items: Item[];
</script>

<ul class="tech-list">
	{#each items as item}
		<li class="tech-item">
			<img width="24px" height="24px" src={item.image} alt={item.name} />
			<span>{item.name}</span>
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
