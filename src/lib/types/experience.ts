interface Experience {
	company: string;
	position: Record<string, string>;
	image: string;
	startDate: string;
	endDate: string | null;
	description: Record<string, string>;
	projects: Project[];
}

interface Project {
	name: string;
	image: string;
	description: Record<string, string>;
	technologies: string[];
}

export type { Experience, Project };
