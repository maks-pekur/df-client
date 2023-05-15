'use client'
import { useAddToCartMutation } from '@/store/services/CartService'
import { ProductDocument } from '@/types/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { MainButton } from './ui/MainBtn'

interface ProductComponentProps {
	product: ProductDocument
	slug: string
}

export const Product: FC<ProductComponentProps> = ({ product, slug }) => {
	const [addToCart, {}] = useAddToCartMutation()

	const { _id, name, description, imageLinks, sizes } = product

	const handleAddToCart = async (data: {
		productId: string
		userId: string
	}) => {
		await addToCart(data)
	}

	return (
		<article className="cursor-pointer overflow-hidden">
			<div className="h-full flex flex-col justify-between space-y-8">
				<Link
					href={{ pathname: '/', query: { slug, _id } }}
					scroll={false}
					className="space-y-2"
				>
					<div className="flex items-center justify-center">
						<Image src={imageLinks[0]} alt={name} width={220} height={220} />
					</div>
					<div className="flex flex-col space-y-2">
						<div className="text-lg">{name}</div>
						<div className="text-sm text-gray-500">{description}</div>
					</div>
				</Link>
				<div className="flex items-center justify-between">
					<div>Price</div>
					<div>
						{sizes.length > 1 ? (
							<Link
								href={{ pathname: '/', query: { slug, _id } }}
								className="block w-full py-2 px-4 rounded-2xl transition-colors duration-150 border-2 border-transparent bg-yellow-200 hover:bg-transparent hover:border-yellow-200"
							>
								Выбрать
							</Link>
						) : (
							<MainButton
								onClick={() =>
									handleAddToCart({
										productId: _id,
										userId: '6458f0cfb2748e9a47cb72ae',
									})
								}
							>
								В корзину
							</MainButton>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}
