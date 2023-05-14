import {
	useRemoveAllMutation,
	useRemoveOneMutation,
	useUpdateCountMutation,
} from '@/store/services/CartService'
import { ICartItem } from '@/types'
import { TrashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface CartItemProps {
	product: ICartItem
}

export const CartItem = ({ product }: CartItemProps) => {
	const [removeOne, {}] = useRemoveOneMutation()
	const [removeAll, {}] = useRemoveAllMutation()
	const [updateCount, {}] = useUpdateCountMutation()

	const { _id, name, imageLink, description, quantity } = product

	const handleRemoveOne = async (id: string) => {
		await removeOne(id)
	}

	return (
		<li className="flex py-3 px-4 rounded-2xl relative border-[1px]">
			<TrashIcon
				className="w-4 h-4 absolute right-2 top-2 hover:text-yellow-300 cursor-pointer"
				onClick={() => handleRemoveOne(_id)}
			/>
			<div className="h-24 w-24 flex-shrink-0 overflow-hidden">
				<Image
					src={imageLink}
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
							onClick={() => {}}
						>
							-
						</div>
						<span className="w-4 flex items-center justify-center ">
							{quantity}
						</span>
						<div
							className="px-3 rounded-r-full cursor-pointer"
							onClick={() => {}}
						>
							+
						</div>
					</div>
					<div className="ml-4">0</div>
				</div>
			</div>
		</li>
	)
}
