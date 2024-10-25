import type { Handle } from '@sveltejs/kit';

declare global {
	namespace App {
		interface Locals {
			locale: string;
		}
	}
}

export const handle: Handle = async ({ event, resolve }) => {
	const locale = event.cookies.get('locale') || 'en';
	event.locals.locale = locale;

	return resolve(event);
};
