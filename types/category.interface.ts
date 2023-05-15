export interface ICategory {
	name: string
	slug: string
}

export interface CategoryDocument extends ICategory {
	_id: string
	_v: number
}
