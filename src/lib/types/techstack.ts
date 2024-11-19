export interface TechStack {
	title: Record<string, string>;
	description: Record<string, string>;
	categories?: Array<Category>;
	items?: Array<string>;
}

export interface Category {
	category: Record<string, string>;
	items: Array<string>;
}
