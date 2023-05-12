import { useAppDispatch } from '@/hooks/redux'
import { openModal } from '@/store/features/modalSlice'
import { useAddToCartMutation } from '@/store/services/CartService'
import { IMenuItem } from '@/types'
import Image from 'next/image'
import { MainButton } from './ui/MainBtn'

interface ItemProps {
	item: IMenuItem
}

export const MenuItem = ({ item }: ItemProps) => {
	const dispatch = useAppDispatch()
	const [addToCart, { isLoading }] = useAddToCartMutation()

	return (
		<article
			onClick={() => dispatch(openModal(item))}
			className="cursor-pointer overflow-hidden"
		>
			<div className="h-full flex flex-col justify-between space-y-8">
				<div className="space-y-2">
					<div className="flex items-center justify-center">
						<Image
							src={item.imageLinks[0]}
							alt={item.name}
							width={220}
							height={220}
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<div className="text-lg">{item.name}</div>
						<div className="text-sm text-gray-500">{item.description}</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div>Price</div>
					<div>
						{item.sizes.length > 1 ? (
							<MainButton onClick={() => dispatch(openModal(item))}>
								Выбрать
							</MainButton>
						) : (
							<MainButton
								onClick={() =>
									addToCart({
										productId: item._id,
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
