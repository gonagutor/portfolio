<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { writable } from 'svelte/store';
	import { PUBLIC_RECAPTCHA_KEY } from '$env/static/public';
	import Tick from '$components/common/Icons/Tick.svelte';

	let name = writable('');
	let surname = writable('');
	let email = writable('');
	let message = writable('');
	let error = writable('');
	let sent = writable(false);

	const sendRequest = async (token: string) => {
		if (!$name) {
			error.set($t('content.contactForm.errors.nameRequired'));
			return;
		}
		if (!$email) {
			error.set($t('content.contactForm.errors.emailRequired'));
			return;
		}
		if (!$message) {
			error.set($t('content.contactForm.errors.messageRequired'));
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($email)) {
			error.set($t('content.contactForm.errors.emailInvalid'));
			return;
		}

		const response = await fetch('/api/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: $name,
				surname: $surname,
				email: $email,
				message: $message,
				recaptchaToken: token
			})
		});
		const result = await response.json();
		if (result.error) {
			error.set(result.error);
		} else {
			error.set('');
			name.set('');
			surname.set('');
			email.set('');
			message.set('');
			sent.set(true);
		}
	};

	const handleSumbit = async () => {
		grecaptcha.ready(() =>
			grecaptcha.execute(PUBLIC_RECAPTCHA_KEY, { action: 'submit' }).then(sendRequest)
		);
	};
</script>

<svelte:head>
	<title>gonagutor - {$t('title.contactMe')}</title>
	<meta name="description" content={$t('description.contactMe')} />
	<script
		src="https://www.google.com/recaptcha/api.js?render={PUBLIC_RECAPTCHA_KEY}"
		async
		defer
	></script>
	<style>
		.grecaptcha-badge {
			top: 10rem !important;
			z-index: 1000 !important;
			display: block !important;
		}
	</style>
</svelte:head>

<div class="contact-container">
	<section class="contact-text">
		<h1>{$t('title.contactMe')}</h1>
		<p>{@html $t('content.contactMe')}</p>
	</section>
	<section class="form-container">
		<form class="contact-form" on:submit|preventDefault={handleSumbit}>
			<div style="display: flex; gap: 1rem;">
				<input type="text" bind:value={$name} placeholder={$t('content.contactForm.name')} />
				<input type="text" bind:value={$surname} placeholder={$t('content.contactForm.surname')} />
			</div>
			<input type="email" bind:value={$email} placeholder={$t('content.contactForm.email')} />
			<textarea bind:value={$message} placeholder={$t('content.contactForm.message')} />
			<button type="submit">{$t('content.contactForm.submit')}</button>
			{#if $error}
				<p style="color: red;">{$error}</p>
			{/if}
		</form>
		{#if $sent}
			<div class="sent-cover">
				<Tick size={64} />
				<p>{@html $t('content.contactForm.sent')}</p>
			</div>
		{/if}
	</section>
</div>

<style>
	.contact-container {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		min-height: calc(100vh - 4.688rem - 3rem);
		min-height: calc(100dvh - 4.688rem - 3rem);
		padding-inline: 7rem;
		pointer-events: all;
	}

	.contact-text {
		display: flex;
		flex-direction: column;
	}

	.contact-text h1 {
		margin-bottom: 0;
		font-size: 2em;
		font-family: var(--font-display);
	}

	.contact-text p {
		font-size: 1.25rem;
		line-height: 1.35rem;
	}

	.form-container {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.contact-form > div {
		width: 100%;
	}

	.sent-cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--background);
		text-align: center;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	input,
	textarea {
		flex: 1 1;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-family: var(--font);
		color: var(--foreground);
		background: var(--background);
		border-radius: 16px;
	}

	textarea {
		min-height: 150px;
		resize: vertical;
	}

	button {
		padding: 0.5rem;
		border-radius: 3rem;
		height: 3rem;
		border: none;
		cursor: pointer;

		color: var(--background);
		background: var(--button-gradient);
		font-family: var(--font);
		font-size: 1.25rem;

		transition: background-position 0.3s;
		background-size: 1px calc(3rem * 2);
		background-position: bottom right;
	}

	button:hover {
		background-position: 0 0;
	}

	@media (max-width: 842px) {
		.contact-container {
			flex-direction: column;
			padding-inline: 3rem;
			padding-bottom: 2rem;
		}
		.contact-form > div {
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
