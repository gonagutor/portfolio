import { onMount } from 'svelte';
import { Writable, writable } from 'svelte/store';

const DATA_THEME_KEY = 'data-theme';

export type Theme = 'dark' | 'light';

export function createThemeStore() {
	const themeStore: Writable<Theme> = writable('light');

	const toggleTheme = () =>
		themeStore.update((oldTheme) => {
			let newTheme: Theme = oldTheme === 'dark' ? 'light' : 'dark';
			document.documentElement.setAttribute(DATA_THEME_KEY, newTheme);
			localStorage.setItem(DATA_THEME_KEY, newTheme);

			return newTheme;
		});

	const changeTheme = (to: Theme) =>
		themeStore.update(() => {
			document.documentElement.setAttribute(DATA_THEME_KEY, to);
			localStorage.setItem(DATA_THEME_KEY, to);

			return to;
		});

	onMount(() => {
		if (
			localStorage.getItem(DATA_THEME_KEY) === 'dark' ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
		)
			return changeTheme('dark');

		return changeTheme('light');
	});

	return {
		themeStore,
		changeTheme,
		toggleTheme
	};
}
