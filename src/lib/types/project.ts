export interface Project {
	name: Record<string, string>;
	shortDescription: Record<string, string>;
	description: Record<string, string>;
	politicallyInclined?: boolean;
	logo?: string;
	images: string[];
	technologies: string[];
}
