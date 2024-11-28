<script lang="ts">
	import ProjectList from '$components/projects/ProjectList.svelte';
	import { t } from '$lib/i18n/i18n';
</script>

<svelte:head>
	<title>gonagutor - {$t('title.projects')}</title>
	<meta name="description" content={$t('description.projects')} />
</svelte:head>

<div class="projects-container">
	<div class="title-section">
		<h1>{$t('title.projects')}</h1>
		<p>{$t('description.projects')}</p>
	</div>
	<ProjectList />
	<p class="projects-footer">
		{@html $t('footer.projects')}
	</p>
</div>

<style>
	.projects-footer {
		margin-top: 3rem;
		text-align: center;
	}

	.projects-container {
		display: flex;
		flex-direction: column;
		align-items: center;

		min-height: calc(100vh - 4.688rem - 6rem);
		min-height: calc(100dvh - 4.688rem - 6rem);
		padding-inline: 4rem;
		padding-bottom: 3rem;
		margin-inline: 3rem;
		pointer-events: all;
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

	@media (max-width: 1268px) {
		.projects-container {
			padding-inline: 2.5rem;
			margin-inline: 0;
		}
	}

	@media (max-width: 842px) {
		.title-section {
			flex-direction: column;
			gap: 0;
			margin-bottom: 1rem;
		}
		.title-section > h1 {
			margin: 0rem;
		}

		.projects-container {
			padding-inline: 2.5rem;
			margin-inline: 0;
		}
	}
</style>
