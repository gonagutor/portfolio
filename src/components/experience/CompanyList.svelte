<script lang="ts">
	import { t, locale } from '$lib/i18n/i18n';
	import TechnologiesList from '$components/common/TechnologiesList.svelte';
	import experience from '$lib/data/experience.json';
	import type { Experience } from '$lib/types/experience';
	import { themeStore, THEMES } from '$lib/stores/theme';

	const typedExperience: Experience[] = experience;
</script>

<ul class="company-list">
	{#each typedExperience as { image, company, startDate, endDate, position, description, projects, isTooDark, isTooLight }}
		<li class="company-item">
			<section class="company-info">
				<img
					style={($themeStore === THEMES.DARK && isTooDark) ||
					($themeStore === THEMES.LIGHT && isTooLight)
						? 'filter: invert();'
						: ''}
					src={image}
					alt={company}
				/>
				<div>
					<h2>{company} - {position[$locale]}</h2>
					<h3>{startDate} - {endDate || $t('content.now')}</h3>
				</div>
			</section>
			<p class="company-description">{@html description[$locale]}</p>
			<ul class="company-project-list">
				{#each projects as { name, image, description, technologies, isTooDark, isTooLight }}
					<li class="company-project-item">
						<img
							style={($themeStore === THEMES.DARK && isTooDark) ||
							($themeStore === THEMES.LIGHT && isTooLight)
								? 'filter: invert();'
								: ''}
							src={image}
							alt={name}
						/>
						<div>
							<h2>{name}</h2>
							<p>{@html description[$locale]}</p>
							<TechnologiesList items={technologies} />
						</div>
					</li>
				{/each}
			</ul>
		</li>
	{/each}
</ul>

<style>
	p {
		font-size: 1.1rem;
		line-height: 1.35rem;
	}
	img {
		object-fit: contain;
	}

	.company-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		margin-top: 0;
		width: 100%;
	}

	.company-item {
		display: flex;
		flex-direction: column;
		align-items: start;
		margin-top: 2rem;
		width: 100%;
	}

	.company-info {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	.company-info img {
		width: 128px;
		height: 128px;
	}

	.company-project-item {
		display: flex;
		flex-direction: row;
		align-items: center;

		gap: 2rem;
		padding-bottom: 2rem;
		border-radius: 0.5rem;
	}

	.company-project-item:last-child {
		padding-bottom: 0;
	}

	.company-project-item img {
		width: 128px;
		height: 128px;
		align-self: flex-start;
	}

	@media (max-width: 842px) {
		.company-project-item {
			flex-direction: column;
			align-items: start;
			gap: 1rem;
		}

		.company-list {
			padding: 0;
			margin: 0;
		}

		.company-info {
			flex-direction: column;
			align-items: start;
			gap: 1rem;
		}

		.company-info > img {
			max-width: 80vw;
			width: -webkit-fill-available;
			width: -moz-available;
			height: auto;
		}
		.company-project-item img {
			height: auto;
		}
	}
</style>
