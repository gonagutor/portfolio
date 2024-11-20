interface Experience {
	company: string;
	position: Record<string, string>;
	image: string;
	isTooDark?: boolean;
	isTooLight?: boolean;
	startDate: string;
	endDate: string | null;
	description: Record<string, string>;
	projects: CompanyProject[];
}

interface CompanyProject {
	name: string;
	image: string;
	isTooDark?: boolean;
	isTooLight?: boolean;
	description: Record<string, string>;
	technologies: string[];
}

export type { Experience, CompanyProject };
