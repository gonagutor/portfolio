<script lang="ts">
	import { writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { locale } from '$lib/i18n/i18n';
	import TechnologiesList from '$components/common/TechnologiesList.svelte';
	import projects from '$lib/data/projects.json';
	import type { Project } from '$lib/types/project';
	import { t } from '$lib/i18n/i18n';
	import { themeStore, THEMES } from '$lib/stores/theme';
	import Chevron from '$components/common/Icons/Chevron.svelte';
	import { PUBLIC_DISABLE_POLITICALLY_INCLINED_PROJECTS } from '$env/static/public';

	const typedProjects: Project[] =
		PUBLIC_DISABLE_POLITICALLY_INCLINED_PROJECTS &&
		PUBLIC_DISABLE_POLITICALLY_INCLINED_PROJECTS === 'true'
			? projects.filter((projects) => !projects.politicallyInclined)
			: projects;
	const projectsOpen = writable(Array(typedProjects.length).fill(false));
</script>

<ul class="project-list">
	{#each typedProjects as { name, description, shortDescription, logo, images, technologies, isTooDark, isTooLight }, i}
		<li class="project-item">
			<button
				type="button"
				on:click={() => projectsOpen.update((n) => ((n[i] = !n[i]), n))}
				class="project-header"
			>
				{#if logo}
					<img
						class="project-image"
						style={($themeStore === THEMES.DARK && isTooDark) ||
						($themeStore === THEMES.LIGHT && isTooLight)
							? 'filter: invert();'
							: ''}
						src={logo}
						alt={name[$locale]}
					/>
				{:else}
					<span class="project-image-placeholder">{$t('content.logoNotAvailable')}</span>
				{/if}
				<div>
					<h2>{name[$locale]}</h2>
					<h3>{shortDescription[$locale]}</h3>
				</div>
				<Chevron
					style={`margin-left: auto; min-width: 64px; min-height: 64px; transition: transform 0.3s; ${
						$projectsOpen[i] ? '' : 'transform: rotate(180deg);'
					}`}
					width="4vw"
					height="4vw"
				/>
			</button>
			{#if $projectsOpen[i]}
				<section class="project-content" transition:slide={{ duration: 300, easing: cubicOut }}>
					<p>{@html description[$locale]}</p>
					<TechnologiesList items={technologies} />
					<ul class="image-list">
						{#each images as image}
							<li class="image-list-item">
								<img src={image} alt={name[$locale]} />
							</li>
						{/each}
					</ul>
				</section>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.project-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		margin: 0;
		padding: 0;

		border-top: solid 1px var(--foreground);
	}

	.project-item {
		display: flex;
		flex-direction: column;
		align-items: start;
		width: 100%;
		padding: 1rem;
		border-bottom: solid 1px var(--foreground);
	}

	.project-header {
		display: flex;
		flex-direction: row;
		align-items: center;
		background: none;
		cursor: pointer;
		border: none;
		text-align: left;
		font-family: var(--font);
		color: var(--foreground);

		gap: 2rem;
		width: 100%;
	}

	.project-header > .project-image {
		min-width: 6rem;
		max-width: 6rem;
		height: 6rem;

		object-fit: contain;
	}

	.project-image-placeholder {
		min-width: 6rem;
		max-width: 6rem;

		text-align: center;
	}

	.project-content {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 1rem;
		width: 100%;
	}

	.image-list {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
		width: 100%;

		list-style: none;
		padding: 0;
		padding-block: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.image-list-item {
		flex: 1 1 300px;
		max-width: calc(100vw / 3);
		min-width: calc(100vw / 6);
	}

	.image-list-item img {
		width: 100%;
		height: auto;
		object-fit: contain;
		max-height: 24rem;
		max-width: 24rem;
	}

	@media (max-width: 842px) {
		.project-list {
			padding: 0;
		}

		.project-header img {
			width: 4rem;
			height: 4rem;
		}

		.project-header h2 {
			margin-bottom: 0;
		}

		.project-header h3 {
			margin-top: 0.5rem;
		}

		.project-header {
			gap: 1rem;
			padding: 0;
		}
	}
</style>
