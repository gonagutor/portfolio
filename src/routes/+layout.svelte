<script lang="ts">
	import Navbar from '$components/Navbar/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import './styles.css';

	export let data;
</script>

<div class="app">
	<Navbar />

	<main>
		{#key data.url}
			<div in:fly={{ x: 200, duration: 500, delay: 500 }} out:fly={{ x: -200, duration: 500 }}>
				<slot />
			</div>
		{/key}
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
