import { ProductDocument } from './product.interface'

export interface ICartItem extends ProductDocument {
	productId: string
	userId: string
	quantity: number
}

export type Cart = ICartItem[]
