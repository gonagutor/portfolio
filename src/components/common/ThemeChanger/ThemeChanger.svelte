<script lang="ts">
	import Sun from '$components/common/Icons/Sun.svelte';
	import Moon from '$components/common/Icons/Moon.svelte';
	import { t } from '$lib/i18n/i18n';
	import { themeStore, toggleTheme } from '$lib/stores/theme';

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

		border: none;
		background: none;
		color: var(--background);

		cursor: pointer;
		pointer-events: all;
	}
</style>
