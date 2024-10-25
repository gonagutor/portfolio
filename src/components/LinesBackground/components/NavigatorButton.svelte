<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import ArrowSmall from '$components/icons/ArrowSmall.svelte';

	export let reverse: boolean;
	export let href: string;
	export let text: string;
</script>

<a style="--flex-direction: {reverse ? 'row-reverse' : 'row'}" id="next-page-link" {href}>
	{$t(`title.${text}`)}
	<ArrowSmall invert {reverse} />
</a>

<style>
	a {
		line-height: 1em;
		display: flex;
		text-decoration: none;
	}

	#next-page-link {
		display: flex;
		flex-direction: var(--flex-direction);
		justify-content: center;
		align-items: baseline;
		gap: 0.75rem;

		padding: 0.75rem;
		margin-right: 1rem;

		font-weight: bold;
		color: var(--background);
		background: var(--foreground);
		border-radius: 5rem;
	}

	@media (max-width: 842px) {
		#next-page-link {
			font-size: 1rem;
		}
	}
</style>
