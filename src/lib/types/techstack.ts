export interface TechStack {
	title: Record<string, string>;
	description: Record<string, string>;
	categories?: Array<Category>;
	items?: Array<Item>;
}

export interface Category {
	category: Record<string, string>;
	items: Array<Item>;
}

export interface Item {
	name: string;
	image: string;
	isTooDark?: boolean;
}
