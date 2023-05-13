import { useAddToCartMutation } from '@/store/services/CartService'
import { IMenuItem } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { MainButton } from './ui/MainBtn'

interface ItemProps {
	item: IMenuItem
	slug: string
}

export const MenuItem = ({ item, slug }: ItemProps) => {
	const [addToCart, {}] = useAddToCartMutation()

	const { _id, name, description, imageLinks, sizes } = item

	const handleAddToCart = async data => {
		await addToCart(data)
	}

	return (
		<article className="cursor-pointer overflow-hidden">
			<div className="h-full flex flex-col justify-between space-y-8">
				<div className="space-y-2">
					<Link href={`/${_id}`} className="flex items-center justify-center">
						<Image
							src={imageLinks[0]}
							alt={item.name}
							width={220}
							height={220}
						/>
					</Link>
					<div className="flex flex-col space-y-2">
						<div className="text-lg">{name}</div>
						<div className="text-sm text-gray-500">{description}</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div>Price</div>
					<div>
						{sizes.length > 1 ? (
							<MainButton onClick={() => {}}>Выбрать</MainButton>
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
