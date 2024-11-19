<script lang="ts">
	import Github from '$components/common/Icons/Github.svelte';
	import Linkedin from '$components/common/Icons/Linkedin.svelte';
	import Mail from '$components/common/Icons/Mail.svelte';

	export let horizontal: boolean = false;
</script>

<div
	style="--flex-direction:{horizontal ? 'row' : 'column'}; --margin-right:{horizontal
		? '1rem'
		: '0'}; --padding-block:{horizontal ? '0' : '2rem'}"
	id="socials-container"
>
	<a href="https://github.com/gonagutor">
		<Github />
	</a>
	<a href="https://www.linkedin.com/in/gonzalo-aguado-torres-512115175/">
		<Linkedin />
	</a>
	<a href="mailto:gonagutor@gmail.com">
		<Mail />
	</a>
</div>

<style>
	#socials-container {
		display: flex;
		flex-direction: var(--flex-direction);
		align-items: center;
		gap: 1rem;

		margin-right: var(--margin-right);
		padding-block: var(--padding-block);
		background: var(--background);
	}

	a {
		pointer-events: all;
	}
</style>
