'use client'
import { useFetchPopularQuery } from '@/store/services/MenuService'
import Link from 'next/link'
import { Heading } from './ui/Heading'

export const PopularItems = () => {
	const { data: populars, error, isLoading } = useFetchPopularQuery('')

	if (isLoading) return <div>Loading</div>

	return (
		<section className="py-6">
			<div className="overflow-hidden">
				<Heading tag={'h3'}>Часто заказывают</Heading>
				<div className="flex gap-6 overflow-x-scroll py-2 scrollbar-hide">
					{populars.map(({ productId }) => (
						<Link
							href={{ pathname: '/', query: { _id: productId } }}
							key={productId}
							className="shadow-md p-6 flex items-center min-w-[300px] rounded-2xl cursor-pointer"
						>
							<div>{productId}</div>
							{/* <div className="flex items-center justify-center">
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
													<span>грн</span>
												</div>
											</div>
										</div> */}
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
