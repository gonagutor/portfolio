<script lang="ts">
	import Arrow from '$components/common/Icons/Arrow.svelte';

	export let href: string;
	export let reverse: boolean = false;
</script>

<a {href}><Arrow {reverse} /></a>

<style>
	a {
		background: var(--background);
		line-height: 1em;
		display: flex;
		text-decoration: none;
		padding-block: 2rem;
		pointer-events: all;
	}
</style>
