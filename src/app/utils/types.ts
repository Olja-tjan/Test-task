export type TUser = {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
	support?: {
		url: string
	};
	text?: string;
}

export type TResources = {
	id: number;
	name: string;
	year: number;
	color: string;
	pantone_value: string;
}
