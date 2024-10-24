<script lang="ts">
	import DesktopNavbar from './DesktopNavbar.svelte';
	import MobileNavbar from './MobileNavbar.svelte';

	export let current: string;
</script>

<DesktopNavbar {current} />
<MobileNavbar {current} />
