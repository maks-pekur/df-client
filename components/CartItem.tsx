import { addItemToCart, removeItemFromCart } from '@/store/features/cartSlice'
import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

export const CartItem = ({ product }) => {
	const { id, name, imageLinks, description, sizePrices, quantity } = product

	const dispatch = useDispatch()

	const removeItem = () => dispatch(removeItemFromCart(id))

	const changeQty = (item, quantity) => {
		dispatch(addItemToCart({ ...item, quantity }))
	}

	return (
		<li className="flex py-3 px-4 rounded-2xl relative border-[1px]">
			<TrashIcon
				className="w-4 h-4 absolute right-2 top-2 hover:text-yellow-300 cursor-pointer"
				onClick={removeItem}
			/>
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden">
				<Image
					src={imageLinks[0]}
					alt={name}
					width={50}
					height={50}
					className="h-full w-full object-cover object-center"
				/>
			</div>
			<div className="ml-4 w-full flex flex-col justify-between">
				<div className="flex flex-col items-start space-y-1 mb-1">
					<div>{name}</div>
					<div className="text-gray-600 text-[10px]">{description}</div>
				</div>
				<div className="flex items-center justify-between text-md">
					<div className="flex items-center space-x-1 bg-yellow-200 rounded-full">
						<div
							className="px-3 rounded-l-full cursor-pointer"
							onClick={() => changeQty(product, Math.max(1, quantity - 1))}
						>
							-
						</div>
						<span className="w-4 flex items-center justify-center ">
							{quantity}
						</span>
						<div
							className="px-3 rounded-r-full cursor-pointer"
							onClick={() => changeQty(product, Math.max(1, quantity + 1))}
						>
							+
						</div>
					</div>
					<div className="ml-4">{sizePrices[0].price * quantity}</div>
				</div>
			</div>
		</li>
	)
}