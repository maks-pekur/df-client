import { IMenuItem } from '@/types'
import Image from 'next/image'

interface ItemProps {
	item: IMenuItem
}

export const MenuItem = ({ item }: ItemProps) => {
	return (
		<article>
			<div className="flex items-center justify-center">
				<Image
					src={item.imageLinks[0]}
					alt={item.name}
					width={220}
					height={220}
				/>
			</div>
			<div className="flex flex-col justify-between space-y-4">
				<div className="space-y-2">
					<div className="text-lg">{item.name}</div>
					<div className="text-sm text-gray-500">{item.description}</div>
				</div>
				<div className="flex items-center justify-between">
					<div>Price</div>
					<div>
						<button>D dddd</button>
					</div>
				</div>
			</div>
		</article>
	)
}
