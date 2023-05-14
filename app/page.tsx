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
import { useSearchParams } from 'next/navigation'

export default function Home() {
	const searchParams = useSearchParams()
	const slug = searchParams.get('slug')

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
			{slug && (
				<Modal>{slug === 'combos' ? <ComboDetail /> : <ProductDetail />}</Modal>
			)}

			<Footer />
		</>
	)
}
