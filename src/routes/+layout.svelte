<script lang="ts">
	import LinesBackground from '$components/LinesBackground/LinesBackground.svelte';
	import type { TransitionConfig, FlyParams } from 'svelte/transition';
	import { fly } from 'svelte/transition';
	import { spring } from 'svelte/motion';
	import { navigating, page } from '$app/stores';
	import { goto } from '$app/navigation';

	import Navbar from '$components/Navbar/Navbar.svelte';
	import { ROUTES } from '$lib/constants';
	import './styles.css';

	const SENSITIVITY = 50;

	let panTween = spring(0);
	let yDragStartPos = 0;
	let xDragStartPos = 0;
	let lastTime;

	$: yDragPos = 0;
	$: xDragPos = 0;

	const customFly = (node: Element, options?: FlyParams) => {
		panTween.set(0, { hard: true });
		return fly(node, options);
	};

	interface Transition {
		condition: (from: string, to: string) => boolean;
		transition: (node: Element, options?: FlyParams) => TransitionConfig;
		inParams: FlyParams;
		outParams: FlyParams;
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
			transition: customFly,
			inParams: { x: width, duration: 400, opacity: 1 },
			outParams: { x: -width, duration: 400, opacity: 1 }
		},
		{
			condition: (from, to) => {
				const fromIndex = routesIndices.indexOf(from);
				const toIndex = routesIndices.indexOf(to);

				return fromIndex > toIndex;
			},
			transition: customFly,
			inParams: { x: -width, duration: 400, opacity: 1 },
			outParams: { x: width, duration: 400, opacity: 1 }
		}
	];

	$: config = transitions.find(({ condition }) => {
		if (!$navigating?.from?.route?.id || !$navigating?.to?.route?.id) return true;
		return condition($navigating.from.route.id!, $navigating.to.route.id!);
	});

	$: ({ transition, inParams, outParams } = config!);

	const handleDragStart = (e: TouchEvent) => {
		yDragStartPos = e.changedTouches[0].pageY;
		xDragStartPos = e.changedTouches[0].pageX;

		lastTime = window.performance.now();
	};

	const handleDrag = (e: TouchEvent) => {
		yDragPos = e.changedTouches[0].pageY - yDragStartPos;
		xDragPos = e.changedTouches[0].pageX - xDragStartPos;
		let currentPageIndex = routesIndices.indexOf($page?.route.id || '/');

		if (Math.abs(xDragPos) > 10) panTween.set(xDragPos, { hard: true });
	};

	const handleDragEnd = (e: TouchEvent) => {
		if (e.cancelable) e.preventDefault();

		if ($panTween >= SENSITIVITY) {
			const previousPage = routesIndices.indexOf($page?.route.id || '/') - 1;
			if (!routesIndices[previousPage]) return;

			goto(routesIndices[previousPage]);
		} else if ($panTween <= -SENSITIVITY) {
			const nextPage = routesIndices.indexOf($page?.route.id || '/') + 1;
			if (!routesIndices[nextPage]) return;

			goto(routesIndices[nextPage]);
		}

		$panTween = 0;
	};

	export let data;
</script>

<div class="app">
	<Navbar current={data.url} />

	<main>
		{#key data.url}
			<div
				on:touchmove|passive={handleDrag}
				on:touchend={handleDragEnd}
				on:touchstart|passive={handleDragStart}
				in:transition={inParams}
				out:transition={outParams}
				style="transform: translateX({$page?.route.id === routesIndices[routesIndices.length - 1] ||
				$page?.route.id === routesIndices[0]
					? 0
					: $panTween}px);"
			>
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
