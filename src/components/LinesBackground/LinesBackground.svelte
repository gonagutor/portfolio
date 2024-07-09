<script lang="ts">
	import DesktopLinesBackground from './DesktopLinesBackground.svelte';
	import MobileLinesBackground from './MobileLinesBackground.svelte';
</script>

<DesktopLinesBackground><slot /></DesktopLinesBackground>
<MobileLinesBackground><slot /></MobileLinesBackground>
