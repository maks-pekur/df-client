'use client'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'

interface ModalProps {
	children: React.ReactNode
}

export const Modal = ({ children }: ModalProps) => {
	const router = useRouter()

	return (
		<Transition.Root show={true} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-20"
				onClose={() => router.push('/')}
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

				<div className="fixed inset-0 overflow-y-auto">
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
							<Dialog.Panel className="relative transform rounded-3xl bg-white shadow-xl transition-all max-w-4xl">
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
