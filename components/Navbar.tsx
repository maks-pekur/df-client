'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

export const Navbar = () => {
	const [scroll, setScroll] = useState(false)

	return (
		<nav className="overflow-hidden">
			<div className="hidden md:flex">
				<div
					className={`flex items-center space-x-4 ${
						!scroll && 'translate-x-100'
					}`}
				>
					<div>
						<Image src={'/vercel.svg'} alt="logo" width={50} height={50} />
					</div>
					<ul className="flex items-center">
						<li>
							<LinkScroll to={'/'}>Pizza</LinkScroll>
						</li>
					</ul>
				</div>
				<div className="ml-auto">cart</div>
			</div>
			<div className="md:hidden">burger</div>
		</nav>
	)
}
