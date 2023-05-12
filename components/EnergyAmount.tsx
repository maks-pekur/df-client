'use client'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface EnergyProps {
	fatAmount: number
	proteinsAmount: number
	carbohydratesAmount: number
	energyAmount: number
}

export const EnergyAmount = ({
	fatAmount,
	proteinsAmount,
	carbohydratesAmount,
	energyAmount,
}: EnergyProps) => {
	const [open, setOpen] = useState(false)

	return (
		<div className="relative h-full w-full">
			<InformationCircleIcon
				className="w-6 h-6 hover:scale-110 mr-2"
				onClick={() => setOpen(prev => !prev)}
			/>
			{open && (
				<div className="bg-zinc-700 rounded-xl p-3 absolute top-8 -right-2 w-60 text-[12px] text-white">
					<div className="text-gray-400 mb-2">Пищевая ценность на 100 г</div>
					<div className="space-y-1">
						<div className="flex justify-between">
							<div>Энерг. ценность</div>
							<div>{energyAmount}</div>
						</div>
						<div className="flex justify-between">
							<div>Белки</div>
							<div>{proteinsAmount}</div>
						</div>
						<div className="flex justify-between">
							<div>Жиры</div>
							<div>{fatAmount}</div>
						</div>
						<div className="flex justify-between">
							<div>Углеводы</div>
							<div>{carbohydratesAmount}</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
