<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import PlatformSection from '$components/techstack/PlatformSection.svelte';
	import type { TechStack } from '$lib/types/techstack';
	import techstack from '$lib/data/techstack.json';

	const typedTechstack: TechStack[] = techstack;
	// TODO: Replace this with db/api call
</script>

<svelte:head>
	<title>gonagutor - {$t('title.myTechstack')}</title>
	<meta name="description" content={$t('description.myTechstack')} />
</svelte:head>

<div class="my-techstack-container">
	<div class="title-section">
		<h1>{$t('title.myTechstack')}</h1>
		<p>{$t('description.myTechstack')}</p>
	</div>
	<div class="tech-grid">
		{#each typedTechstack as tech}
			<PlatformSection techstack={tech} />
		{/each}
	</div>
</div>

<style>
	.my-techstack-container {
		display: flex;
		flex-direction: column;
		align-items: center;

		min-height: calc(100vh - 4.688rem - 6rem);
		min-height: calc(100dvh - 4.688rem - 6rem);
		padding-inline: 4rem;
		padding-bottom: 3rem;
		margin-inline: 3rem;
	}

	.title-section {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
		padding-top: 1rem;
		width: 100%;
	}

	.title-section > h1 {
		font-family: var(--font-display);
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, max-content);
		gap: 1rem;
		width: 100%;
	}

	@media (max-width: 1268px) {
		.my-techstack-container {
			padding-inline: 2.5rem;
			margin-inline: 0;
		}

		.tech-grid {
			grid-template-columns: repeat(2, 2fr);
			grid-template-rows: repeat(3, max-content);
		}
	}

	@media (max-width: 842px) {
		.my-techstack-container {
			padding-inline: 2.5rem;
			margin-inline: 0;
		}

		.title-section {
			flex-direction: column;
			gap: 0;
			margin-bottom: 1rem;
		}
		.title-section > h1 {
			margin: 0rem;
		}

		.my-techstack-container {
			padding-inline: 2.5rem;
		}

		.tech-grid {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(6, max-content);
		}
	}
</style>
