export interface Project {
	name: Record<string, string>;
	shortDescription: Record<string, string>;
	description: Record<string, string>;
	politicallyInclined?: boolean;
	isTooLight?: boolean;
	isTooDark?: boolean;
	logo?: string;
	images: string[];
	technologies: string[];
}
