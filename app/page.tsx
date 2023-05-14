'use client'
import { Cart } from '@/components/Cart'
import { ComboDetail } from '@/components/ComboDetail'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MenuList } from '@/components/MenuList'
import { Modal } from '@/components/Modal'
import { Navbar } from '@/components/Navbar'
import { PopularItems } from '@/components/PopularItems'
import { ProductDetail } from '@/components/ProductDetail'
import { Stories } from '@/components/Stories'
import { usePathname, useRouter } from 'next/navigation'

export default function Home({ searchParams }) {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<>
			<Header />
			<Navbar />
			<div className="max-w-7xl mx-auto">
				<Stories />
				<PopularItems />
				<MenuList />
			</div>
			<Cart />
			{!!Object.keys(searchParams).length && (
				<Modal onClose={() => router.push('/')}>
					{searchParams.slug === 'combos' ? (
						<ComboDetail comboId={searchParams._id} />
					) : (
						<ProductDetail productId={searchParams._id} />
					)}
				</Modal>
			)}
			<Footer />
		</>
	)
}
