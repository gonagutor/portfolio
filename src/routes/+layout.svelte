<script lang="ts">
	import Navbar from '$components/Navbar/Navbar.svelte';
	import { fly } from 'svelte/transition';
	import { navigating } from '$app/stores';
	import { ROUTES } from '$lib/constants';
	import './styles.css';

	export let data;

	interface Transition {
		condition: (from: string, to: string) => boolean;
		transition: any;
		inParams: { x?: number; y?: number; duration?: number; delay?: number };
		outParams: { x?: number; y?: number; duration?: number; delay?: number };
	}

	let width = typeof window !== 'undefined' ? document.documentElement.clientWidth : 0;
	const routesIndices = Object.values(ROUTES);

	let transitions: Array<Transition>;
	$: transitions = [
		{
			condition: (from, to) => {
				const fromIndex = routesIndices.indexOf(from);
				const toIndex = routesIndices.indexOf(to);

				return fromIndex < toIndex;
			},
			transition: fly,
			inParams: { x: width, duration: 400, opacity: 1 },
			outParams: { x: -width, duration: 400, opacity: 1 }
		},
		{
			condition: (from, to) => {
				const fromIndex = routesIndices.indexOf(from);
				const toIndex = routesIndices.indexOf(to);

				return fromIndex > toIndex;
			},
			transition: fly,
			inParams: { x: -width, duration: 400, opacity: 1 },
			outParams: { x: width, duration: 400, opacity: 1 }
		}
	];

	$: config = transitions.find(({ condition }) => {
		if (!$navigating?.from?.route?.id || !$navigating?.to?.route?.id) return true;
		return condition($navigating.from.route.id!, $navigating.to.route.id!);
	});

	$: ({ transition, inParams, outParams } = config!);
</script>

<div class="app">
	<Navbar current={data.url} />

	<main>
		{#key data.url}
			<div in:transition={inParams} out:transition={outParams}>
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
		position: relative;
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	div {
		overflow-x: hidden;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
