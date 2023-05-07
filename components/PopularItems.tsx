import { popularProducts } from '@/db/db'
import { openModal } from '@/store/features/modalSlice'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import config from '../config/appConfig'
import { Heading } from './ui/Heading'

export const PopularItems = () => {
	const dispatch = useDispatch()

	return (
		<section className="py-6">
			<div className="max-w-6xl mx-auto overflow-hidden">
				<Heading tag={'h3'}>Часто заказывают</Heading>
				<div className="flex gap-6 overflow-x-scroll py-2 scrollbar-hide">
					{popularProducts &&
						popularProducts.map(product => (
							<div
								onClick={() => dispatch(openModal(product))}
								key={product.id}
								className="shadow-md p-6 flex items-center min-w-[300px] rounded-2xl cursor-pointer"
							>
								<div className="flex items-center justify-center">
									<Image
										src={product.imageLinks[0]}
										alt={product.name}
										width={90}
										height={90}
										className="object-cover"
									/>
									<div className="pl-3">
										<div>{product.name}</div>
										<div className="flex items-center space-x-2">
											{product.sizePrices.length > 1 && <span>от</span>}
											<div>{product.sizePrices[0].price}</div>
											<span>{config.currency}</span>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}
