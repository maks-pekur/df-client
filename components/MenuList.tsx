'use client'
import {
	useFetchAllCategoriesQuery,
	useFetchProductsQuery,
} from '@/store/services/MenuService'
import { Product } from './Product'
import { Heading } from './ui/Heading'

export const MenuList = () => {
	const {
		data: menu,
		error: errorMenu,
		isLoading: isLoadingMenu,
	} = useFetchProductsQuery('')
	const {
		data: categories,
		error: errorCategories,
		isLoading: isLoadingCategories,
	} = useFetchAllCategoriesQuery('')

	return (
		<div className="py-10">
			{(isLoadingMenu || isLoadingCategories) && <div>Loading...</div>}
			{(errorMenu || errorCategories) && <div>Oops! Data not found</div>}
			<div>
				{categories &&
					categories.map(category => (
						<div id={category.slug} key={category._id} className="py-10">
							<Heading tag={'h2'}>{category.name}</Heading>
							<div className="grid grid-cols-4 gap-10">
								{menu &&
									menu
										.filter(
											product => product.productCategoryId === category._id
										)
										.map(product => (
											<Product
												key={product._id}
												product={product}
												slug={category.slug}
											/>
										))}
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
