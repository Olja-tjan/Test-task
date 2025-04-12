export interface IUser {
	id: number,
	email: string,
	first_name: string,
	last_name: string,
	avatar: string | null,
	support?: {
		url: string
	},
	text?: string
}

export interface IListUsers {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUser[]
}

export interface IResource {
	id: number,
	name: string,
	year: number,
	color: string,
	pantone_value: string
}

export interface IListResource {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IResource[]
}

export interface IAuthData {
  email?: string | null,
  password?: string | null,
}
