export interface IProduct {
	name: string
	description: string
	carbohydratesAmount?: number
	energyAmount?: number
	fatAmount?: number
	imageLinks: string
	isDeleted: boolean
	measureUnit: string
	modifiers?: string
	quantity: number
	productCategoryId: string
	proteinsAmount?: number
	seoDescription?: string
	seoKeywords?: string
	seoText?: string
	seoTitle?: string
	sizes: string
	tags?: string
	type: string
	weight: number
}

export interface ProductDocument extends IProduct {
	_id: string
	_v: number
}
