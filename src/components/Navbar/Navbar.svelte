<script lang="ts">
	import DesktopNavbar from './DesktopNavbar.svelte';
	import MobileNavbar from './MobileNavbar.svelte';

	let size: number = 800;
</script>

<svelte:window bind:innerWidth={size} />

{#if size > 768}
	<DesktopNavbar />
{:else}
	<MobileNavbar />
{/if}
