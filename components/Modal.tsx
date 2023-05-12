'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { closeModal } from '@/store/features/modalSlice'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import { EnergyAmount } from './EnergyAmount'
import { MainButton } from './ui/MainBtn'

export const Modal = () => {
	const dispatch = useAppDispatch()
	const { isOpen, data } = useAppSelector(state => state.modal)

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-20"
				onClose={() => dispatch(closeModal())}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-20 overflow-y-auto">
					<div className="flex min-h-full justify-center p-4 text-center sm:items-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white shadow-xl transition-all max-w-4xl">
								{data ? (
									<div className="flex h-[600px]">
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
								) : (
									<div>Error</div>
								)}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
