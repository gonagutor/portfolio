<script lang="ts">
	import { locale } from '$lib/i18n/i18n';

	function onChangeLanguage(lang: string) {
		if ($locale === lang) return;
		$locale = lang;
	}
</script>

<div class="button-container">
	<button
		aria-current={$locale == 'es'}
		aria-label="Cambiar idioma a español"
		class="language-button {$locale == 'es' && 'active'}"
		on:click={() => onChangeLanguage('es')}
	>
		ES
	</button>
	<button
		aria-current={$locale == 'en'}
		aria-label="Change language to english"
		class="language-button {$locale == 'en' && 'active'}"
		on:click={() => onChangeLanguage('en')}
	>
		EN
	</button>

	<slot />
</div>

<style>
	.button-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.language-button {
		padding-inline: 1rem;
		padding-block: 0.5rem;
		border: none;

		font-family: var(--font);
		font-weight: bold;
		font-size: 1.5rem;

		color: var(--background);
		background-color: var(--foreground);
		border-radius: 50rem;
		letter-spacing: -1px;

		cursor: pointer;
		pointer-events: all;
	}

	.language-button.active {
		color: var(--foreground);
		background: var(--highlight-gradient);
		cursor: default;
	}
</style>
