<script>
	import ArrowSmall from '$components/icons/ArrowSmall.svelte';
	import Github from '$components/icons/Github.svelte';
	import Linkedin from '$components/icons/Linkedin.svelte';
	import Mail from '$components/icons/Mail.svelte';
	import LanguageChanger from '$components/LanguageChanger/LanguageChanger.svelte';
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';
	import { ROUTES } from '$lib/constants';
	import { t } from '$lib/i18n/i18n';
</script>

<div class="mobile-lines-background">
	<div class="lines">
		<div class="vertical-line-container" id="left-line">
			<div class="vertical-line" />
		</div>
		<div id="bottom-container">
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
			<div id="site-settings">
				<ThemeChanger size={42} />
				<LanguageChanger />
			</div>
			<a id="next-page-link" href={ROUTES.MY_TECHSTACK}>
				{$t('title.myTechstack')}
				<ArrowSmall invert />
			</a>
		</div>
		<div class="vertical-line-container">
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

	.mobile-lines-background {
		display: none;
		position: relative;
	}

	@media (max-width: 1268px) {
		.mobile-lines-background {
			display: inherit;
		}
	}

	@media (max-width: 842px) {
		#site-settings {
			display: none !important;
		}

		#next-page-link {
			font-size: 1rem;
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
		height: calc(100% + 4rem);
		padding: 1rem 1rem 0 1rem;
		z-index: 1;
	}

	#bottom-container {
		align-self: flex-end;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		flex: 1;

		margin-block: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.vertical-line-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
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
		flex-direction: row;
		align-items: center;
		gap: 1rem;

		padding-block: 1rem;
		margin-left: -0.1rem;
		background: var(--background);
	}

	#site-settings {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	#next-page-link {
		display: flex;
		flex-direction: row;
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
</style>
