import { env } from '$env/dynamic/private';
import { LayoutServerLoad } from './$types';

/** @type {import('./$types').LayoutServerLoad} */
export const load: LayoutServerLoad = () => ({ analyticsId: env.VERCEL_ANALYTICS_ID });
