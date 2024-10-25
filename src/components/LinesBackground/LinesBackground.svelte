<script lang="ts">
	import DesktopLinesBackground from './DesktopLinesBackground.svelte';
	import MobileLinesBackground from './MobileLinesBackground.svelte';

	export let current: string;
</script>

<DesktopLinesBackground {current}><slot /></DesktopLinesBackground>
<MobileLinesBackground {current}><slot /></MobileLinesBackground>
