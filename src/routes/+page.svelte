<script lang="ts">
	import { t } from '$lib/i18n/i18n';
</script>

<svelte:head>
	<title>gonagutor - {$t('title.aboutMe')}</title>
	<meta name="description" content={$t('description.aboutMe')} />
</svelte:head>

<div class="about-me-container">
	<div class="about-me-picture-container">
		<img src="/images/me.jpg" alt={$t('alt.myPicture')} />
	</div>
	<div class="about-me-text-container">
		<h1 class="about-me-title">{$t('title.aboutMe')}</h1>
		<p class="about-me-text">
			{@html $t('content.aboutMe')}
		</p>
	</div>
</div>

<style>
	.about-me-container {
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

	.about-me-picture-container {
		padding-top: 1rem;
		padding-bottom: 0;
	}

	.about-me-picture-container :global(.change-theme-button) {
		position: absolute;
		top: 4rem;
		left: 6rem;
	}

	@media (max-width: 1268px) {
		.about-me-container {
			flex-wrap: wrap;
			padding-block: 1rem;
			margin-bottom: 4rem;
			padding-inline: 2.5rem;
		}

		.about-me-picture-container :global(.change-theme-button) {
			position: absolute;
			top: 2rem;
			left: 2rem;
		}
	}

	@media (max-width: 842px) {
		.about-me-picture-container :global(.change-theme-button) {
			display: none;
		}
	}

	.about-me-picture-container > img {
		border-radius: 100%;
		aspect-ratio: 1;

		max-width: 27rem;
		width: calc(100vw - 6rem);
		object-fit: cover;
	}

	.about-me-title {
		font-family: var(--font-display);
		font-size: 3rem;
	}
	.about-me-text {
		font-size: 1.5rem;
	}
</style>
