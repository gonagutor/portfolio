import { derived, writable } from 'svelte/store';
import translations from './translations';
import _ from 'lodash';

function getLocaleFromCookie() {
	if (typeof document !== 'undefined') {
		const match = RegExp(/(^| )locale=([^;]+)/).exec(document.cookie);
		if (match) return match[2];
	}
	// Default to the user's preferred language if no cookie is found and navigator is available
	if (typeof navigator !== 'undefined') {
		return navigator.language.split('-')[0] || 'en';
	}
	// Fallback to 'en' if navigator is not available (e.g., on the server)
	return 'en';
}

export const locale = writable(getLocaleFromCookie() || 'en');
export const locales = Object.keys(translations);

locale.subscribe((value) => {
	if (typeof document === 'undefined') return;
	document.cookie = `locale=${value};path=/`;
	document.documentElement.lang = value;
});

function translate(locale: string, key: string, vars: any) {
	// Let's throw some errors if we're trying to use keys/locales that don't exist.
	// We could improve this by using Typescript and/or fallback values.
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	// Grab the translation from the translations object.
	let text = _.get(translations[locale], key, key);

	if (text === key) console.error(`no translation found for ${locale}.${key}`);

	// Replace any passed in variables in the translation string.
	Object.keys(vars).forEach((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale: string) =>
		(key: string, vars = {}) =>
			translate($locale, key, vars)
);
