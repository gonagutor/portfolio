<script>
	import Arrow from '$components/icons/Arrow.svelte';
	import Github from '$components/icons/Github.svelte';
	import Linkedin from '$components/icons/Linkedin.svelte';
	import Mail from '$components/icons/Mail.svelte';
	import LanguageChanger from '$components/LanguageChanger/LanguageChanger.svelte';
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';
	import { ROUTES } from '$lib/constants';
</script>

<div class="desktop-lines-background">
	<div class="lines">
		<div class="vertical-line-container" id="left-line">
			<div class="vertical-line" />
			<div id="socials-container">
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
			<div class="vertical-line" />
		</div>
		<div id="bottom-line-container">
			<ThemeChanger />
			<LanguageChanger />
			<div id="bottom-line" />
		</div>
		<div class="vertical-line-container">
			<div class="vertical-line" />
			<a href={ROUTES.MY_TECHSTACK}><Arrow /></a>
			<div class="vertical-line" />
		</div>
	</div>
	<slot />
</div>

<style>
	a {
		line-height: 1em;
		display: flex;
		text-decoration: none;
	}

	.desktop-lines-background {
		position: relative;
	}

	@media (max-width: 1268px) {
		.desktop-lines-background {
			display: none;
		}
	}

	.lines {
		display: flex;
		flex-direction: row;

		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		position: absolute;
		height: 100%;
		padding: 3rem 3rem 0 3rem;
		z-index: 1;
	}

	#bottom-line-container {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex: 1;
		gap: 1rem;

		margin-left: 1.5rem;
		margin-bottom: 1.5rem;
	}

	#bottom-line {
		width: 100%;
		height: 1px;
		background: var(--foreground);
		margin-right: 3rem;
	}

	.vertical-line-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}

	.vertical-line-container > a {
		margin-block: 3.75rem;
	}

	.vertical-line {
		width: 1px;
		flex-grow: 1;
		background: var(--foreground);
	}

	#left-line {
		height: calc(100% - 1.313rem - 1.5rem);
	}

	#socials-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding-block: 2rem;
	}
</style>
