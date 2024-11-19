interface Experience {
	company: string;
	position: Record<string, string>;
	image: string;
	imageNeedsInvert?: boolean;
	startDate: string;
	endDate: string | null;
	description: Record<string, string>;
	projects: Project[];
}

interface Project {
	name: string;
	image: string;
	imageNeedsInvert?: boolean;
	description: Record<string, string>;
	technologies: string[];
}

export type { Experience, Project };
