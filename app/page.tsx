import { Cart } from '@/components/Cart'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MenuList } from '@/components/MenuList'
import { Modal } from '@/components/Modal'
import { Navbar } from '@/components/Navbar'

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Navbar />
			<main className="flex-1 max-w-7xl mx-auto">
				<MenuList />
			</main>
			<Cart />
			<Modal />
			<Footer />
		</div>
	)
}
