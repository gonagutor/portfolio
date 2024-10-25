<script lang="ts">
	import { t } from '$lib/i18n/i18n';
</script>

<svelte:head>
	<title>gonagutor - {$t('title.experience')}</title>
	<meta name="description" content={$t('description.experience')} />
</svelte:head>

<div class="experience-container">
	<p>Experience</p>
</div>

<style>
	.experience-container {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		min-height: calc(100vh - 4.688rem - 3rem);
		min-height: calc(100dvh - 4.688rem - 3rem);
		padding-inline: 7rem;
	}
</style>
