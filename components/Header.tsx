import Image from 'next/image'
import Link from 'next/link'
import { MainButton } from './ui/MainBtn'

export const Header = () => {
	return (
		<header>
			<div className="flex items-center justify-between max-w-7xl mx-auto py-4">
				<div>
					<Image src="/vercel.svg" alt="logo" width={100} height={100} />
				</div>
				<div className="flex space-x-2">
					<div>Доставка еды </div>
					<span>Киев</span>
				</div>
				<div className="flex flex-col items-center">
					<Link href="tel:88008008080" className="text-lg">
						8 800 800 80 80
					</Link>
					<span className="text-gray-500 ">Звонок БЕСПЛАТНЫЙ</span>
				</div>
				<div>
					<MainButton>Login</MainButton>
				</div>
			</div>
		</header>
	)
}
