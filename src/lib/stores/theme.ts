'use client';
import { onMount } from 'svelte';
import { Writable, writable } from 'svelte/store';

const DATA_THEME_KEY = 'data-theme';

export const THEMES = {
	DARK: 'dark',
	LIGHT: 'light'
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

function createThemeStore() {
	const themeStore: Writable<Theme> = writable(THEMES.LIGHT);

	const toggleTheme = () =>
		themeStore.update((oldTheme) => {
			let newTheme: Theme = oldTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
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

	const initializeTheme = () => {
		if (typeof window === 'undefined') return;

		if (
			localStorage.getItem(DATA_THEME_KEY) === THEMES.DARK ||
			(window.matchMedia('(prefers-color-scheme: dark)').matches &&
				!localStorage.getItem(DATA_THEME_KEY))
		)
			return changeTheme(THEMES.DARK);

		return changeTheme(THEMES.LIGHT);
	};

	initializeTheme();

	return {
		themeStore,
		changeTheme,
		toggleTheme
	};
}
export const { themeStore, changeTheme, toggleTheme } = createThemeStore();
