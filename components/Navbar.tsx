'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { openCart } from '@/store/features/cartSlice'
import { fetchCategories } from '@/store/features/menuSlice'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

export const Navbar = () => {
	const [scroll, setScroll] = useState(false)
	const dispatch = useAppDispatch()
	const { scrollY } = useScroll()
	const cartItems = useAppSelector(state => state.cart.data.length)
	const { categories } = useAppSelector(state => state.menu)

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > 85) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	})

	useEffect(() => {
		dispatch(fetchCategories())
	}, [])

	return (
		<nav className={`z-20 ${scroll && 'sticky top-0'}`}>
			<div className="w-full relative">
				{scroll && (
					<div className="absolute inset-0 shadow-md backdrop-blur-md bg-white/30 -z-10"></div>
				)}

				<div
					className={`max-w-7xl mx-auto overflow-hidden flex items-center py-2 z-20 relative `}
				>
					<div
						className={`flex items-center space-x-3 transition-all duration-300 ${
							scroll ? 'translate-x-0' : 'translate-x-[-60px]'
						}`}
					>
						<div className="mr-2">
							<Image
								src={'/img/logo_mini_circle.svg'}
								alt="logo"
								height={40}
								width={40}
							/>
						</div>
						<ul className="flex items-center space-x-6">
							{categories.map(category => (
								<li
									key={category._id}
									className="cursor-pointer hover:text-gray-700"
								>
									<LinkScroll
										to={`${category.slug}`}
										offset={-50}
										spy={true}
										smooth={true}
									>
										{category.name}
									</LinkScroll>
								</li>
							))}
						</ul>
					</div>

					<div
						className="ml-auto relative cursor-pointer"
						onClick={() => dispatch(openCart())}
					>
						<ShoppingBagIcon className="w-6 h-6 mr-1" />
						{!!cartItems && (
							<span className="absolute -top-1 right-0 bg-red-600 text-[10px] text-white rounded-full h-4 w-4 flex items-center justify-center">
								{cartItems}
							</span>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
