'use client'
import { ProductCard } from '@/components/ProductCard'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchProducts } from '@/store/features/productSlice'
import { useEffect } from 'react'

export default function Home() {
	const dispatch = useAppDispatch()
	const { data, status, error } = useAppSelector(state => state.product)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	return (
		<div className="max-w-7xl mx-auto">
			{status === 'idle' && 'pending' && <div>Loading...</div>}
			{status === 'failed' && <div>{error}</div>}
			<div className="grid grid-cols-4">
				{data &&
					data.map(product => (
						<ProductCard key={product._id} product={product} />
					))}
			</div>
		</div>
	)
}
