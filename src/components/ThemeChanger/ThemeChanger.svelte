<script lang="ts">
	import Sun from '$components/icons/Sun.svelte';
	import Moon from '$components/icons/Moon.svelte';
	import { t } from '$lib/i18n/i18n';
	import { createThemeStore } from '$lib/stores/theme';

	const { themeStore, toggleTheme } = createThemeStore();
	export let size = 32;
</script>

<button class="change-theme-button" on:click={toggleTheme}>
	{#if $themeStore === 'light'}
		<Moon {size} ariaLabel={$t('alt.enableDarkMode')} />
	{:else}
		<Sun {size} ariaLabel={$t('alt.disableDarkMode')} />
	{/if}
</button>

<style>
	.change-theme-button {
		position: relative;
		justify-items: center;
		align-items: center;

		margin-left: 0.25rem;
		z-index: 2;

		cursor: pointer;
		border: none;
		background: none;
		color: var(--background);
	}
</style>
