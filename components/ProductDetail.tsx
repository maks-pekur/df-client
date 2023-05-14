'use client'
import { useFetchOneMenuItemsQuery } from '@/store/services/MenuService'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { EnergyAmount } from './EnergyAmount'
import { MainButton } from './ui/MainBtn'

export const ProductDetail = () => {
	const searchParams = useSearchParams()
	const id = searchParams.get('_id') || ''

	const { data, error, isLoading } = useFetchOneMenuItemsQuery(id)

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error</div>

	return (
		<div className="flex h-[600px] overflow-hidden rounded-3xl">
			<div className="flex items-center justify-center p-12 w-[60%]">
				<Image
					src={data.imageLinks[0]}
					width={600}
					height={600}
					alt={data.name}
					className="object-cover"
				/>
			</div>
			<div className="w-[40%] h-full overflow-hidden text-start relative bg-gray-50 px-6">
				<div className="flex flex-col space-y-2 mb-4">
					<div className="flex justify-between items-center">
						<div className="pt-8 text-2xl">{data.name}</div>
						<div className="pt-8">
							<EnergyAmount
								fatAmount={data.energyAmount}
								proteinsAmount={data.proteinsAmount}
								carbohydratesAmount={data.carbohydratesAmount}
								energyAmount={data.energyAmount}
							/>
						</div>
					</div>
					<div className="text-gray-500 text-sm">
						30 см, традиционное тесто, 610 г
					</div>
					<div className="mb-6 text-sm">{data.description}</div>
				</div>
				{/* {data.sizes.length > 1 && (
												<dataSizes sizes={data.sizes} />
											)} */}
				<div className="py-6 absolute bottom-0 left-0 right-0 bg-gray-50 px-6 z-10">
					<div className="flex">
						<MainButton onClick={() => {}}>
							Добавить в корзину за 360 <span>грн</span>
						</MainButton>
					</div>
				</div>
			</div>
		</div>
	)
}
