<script lang="ts">
	import Sun from '$components/icons/Sun.svelte';
	import Moon from '$components/icons/Moon.svelte';
	import { t } from '$lib/i18n/i18n';

	let prefersLight: boolean = window.matchMedia('(prefers-color-scheme: light)').matches;

	function onChangeTheme() {}

	export let size = 32;
</script>

<button class="change-theme-button" on:click={onChangeTheme}>
	{#if prefersLight}
		<Moon {size} ariaLabel={$t('alt.enableDarkMode')} />
	{:else}
		<Sun {size} ariaLabel={$t('alt.disableDarkMode')} />
	{/if}
</button>

<style>
	.change-theme-button {
		display: grid;
		justify-items: center;
		align-items: center;
		grid: 1fr;

		margin-left: 0.25rem;
		z-index: 9999;

		cursor: pointer;
		border: none;
		background: none;
		color: var(--background);
	}
</style>
