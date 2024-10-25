import { env } from '$env/dynamic/private';
import { LayoutServerLoad } from './$types';

/** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = ({ locals }) => ({
	analyticsId: env.VERCEL_ANALYTICS_ID,
	locale: locals.locale
});
