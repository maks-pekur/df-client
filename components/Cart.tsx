'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { closeCart } from '@/store/features/cartSlice'
import { useFetchAllCartItemsQuery } from '@/store/services/CartService'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment } from 'react'
import { CartItem } from './CartItem'
import { MainButton } from './ui/MainBtn'

export const Cart = () => {
	const { data, error, isLoading } = useFetchAllCartItemsQuery(' ')
	const { isOpen } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()

	return (
		<Transition.Root show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-50"
				onClose={() => dispatch(closeCart())}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<Transition.Child
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<Dialog.Panel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl px-2 scrollbar-hide">
										<div className="absolute right-2 top-2">
											<button
												type="button"
												className="text-gray-700 hover:text-gray-500"
												onClick={() => dispatch(closeCart())}
											>
												<span className="sr-only">Close panel</span>
												<XMarkIcon className="h-8 w-8" aria-hidden="true" />
											</button>
										</div>
										{!data ? (
											<div className="w-full h-full flex flex-col items-center justify-center space-y-2">
												<h3 className="font-bold text-xl">Ой! Пусто!</h3>
												<p>Добавьте что-нибудь в корзину</p>
												<MainButton onClick={() => {}}>В меню</MainButton>
											</div>
										) : (
											<>
												<div className="flex-1 overflow-y-auto">
													<div className="mt-16">
														<div className="flow-root">
															<ul role="list" className="space-y-2">
																{data?.map(product => (
																	<CartItem
																		key={product._id}
																		product={product}
																	/>
																))}
															</ul>
														</div>
													</div>
												</div>

												<div className="border-t border-gray-200 py-6 px-4 sm:px-6">
													<div className="flex justify-between text-base font-medium text-gray-900">
														<p>Сумма заказа</p>
														<p>0 грн</p>
													</div>
													<div className="mt-6">
														<Link
															href="/checkout"
															className="flex items-center justify-center rounded-md bg-yellow-200 px-6 py-3 text-base font-medium shadow-sm hover:bg-yellow-300"
														>
															Далее
														</Link>
													</div>
												</div>
											</>
										)}
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
