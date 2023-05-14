'use client'
import { useAppDispatch } from '@/hooks/redux'
import { openCart } from '@/store/features/cartSlice'
import { useFetchAllCartItemsQuery } from '@/store/services/CartService'
import { useFetchAllCategoriesQuery } from '@/store/services/MenuService'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

export const Navbar = () => {
	const [scroll, setScroll] = useState(false)
	const { scrollY } = useScroll()
	const dispatch = useAppDispatch()
	const pathname = usePathname()

	const { data: cartItems } = useFetchAllCartItemsQuery('')
	const { data: categories } = useFetchAllCategoriesQuery('')

	useMotionValueEvent(scrollY, 'change', latest => {
		if (latest > 85) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	})

	return (
		<nav className={`z-20 ${scroll && 'sticky top-0'}`}>
			<div className="w-full relative py-2">
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
							<Image src={'/vercel.svg'} alt="logo" height={40} width={40} />
						</div>
						<ul className="flex items-center space-x-6">
							{categories &&
								categories.map(link => {
									return (
										<li
											key={link._id}
											className="cursor-pointer hover:text-orange-500"
										>
											<LinkScroll
												to={`${link.slug}`}
												offset={-50}
												spy={true}
												smooth={true}
												activeClass="text-orange-500"
											>
												{link.name}
											</LinkScroll>
										</li>
									)
								})}
						</ul>
					</div>

					<div
						className="ml-auto relative cursor-pointer"
						onClick={() => dispatch(openCart())}
					>
						<ShoppingBagIcon className="w-6 h-6 mr-1" />
						{!!cartItems && (
							<span className="absolute -top-1 right-0 bg-red-600 text-[10px] text-white rounded-full h-4 w-4 flex items-center justify-center">
								{cartItems.length}
							</span>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
}
