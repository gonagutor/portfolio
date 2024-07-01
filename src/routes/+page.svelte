<script lang="ts">
	import LinesBackground from '$components/LinesBackground/LinesBackground.svelte';
	import ThemeChanger from '$components/ThemeChanger/ThemeChanger.svelte';
	import { t } from '$lib/i18n/i18n';
</script>

<svelte:head>
	<title>gonagutor - {$t('title.aboutMe')}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<LinesBackground>
	<div class="about-me-container">
		<div class="about-me-picture-container">
			<ThemeChanger size={54} />
			<img src="/images/me.jpg" alt={$t('alt.myPicture')} />
		</div>
		<div class="about-me-text-container">
			<h1 class="about-me-title">{$t('title.aboutMe')}</h1>
			<p class="about-me-text">
				¡Hola! Soy Gonzalo
				<br />
				<br />
				Soy un <b>desarrollador Fullstack con 3 años de experiencia</b> transformando ideas en
				software tangible.
				<br />
				<br />
				He trabajado en proyectos de empresas como <b>Wabi</b> (del Banco Santander), donde me
				encargué de desarrollos de aplicaciones web y móviles, incluyendo el frontend y el backend.
				<br />
				<br />
				Soy mayormente autodidacta, con un gran dominio de lenguajes como
				<b>Java, Javascript, Go y Dart.</b>
				<br />
				<br />
				Me apasiona resolver problemas, y estoy familiarizado con metodologías ágiles de desarrollo.
				<br />
				<br />
				Estoy constantemente actualizando mis conocimientos y habilidades ya que siempre tengo algún
				proyecto personal entre manos que supera lo que se en el momento.
				<br />
				<br />
				¿Parece que encajaría en tu equipo? ¿Tienes algún proyecto en mente?
				<b>¡No dudes en contactarme!</b>
				<br />
				<br />
				Si todavía necesitas convencerte desliza hacia la derecha o haz click en la flecha para echar
				un vistazo a mis proyectos
			</p>
		</div>
	</div>
</LinesBackground>

<style>
	.about-me-container {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;
		gap: 2rem;

		min-height: calc(100vh - 4.688rem - 3rem);
		min-height: calc(100dvh - 4.688rem - 3rem);
		padding-inline: 7rem;
	}

	@media (max-width: 1268px) {
		.about-me-container {
			flex-wrap: wrap;
			padding-inline: 0;
		}
	}

	.about-me-picture-container > img {
		border-radius: 100%;
		aspect-ratio: 1;
		height: 27rem;
		object-fit: cover;
	}

	.about-me-title {
		font-family: var(--font-display);
		font-size: 3rem;
	}
	.about-me-text {
		font-size: 1.5rem;
	}
</style>
