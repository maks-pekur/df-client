interface BtnProps {
	children?: React.ReactNode
	onClick?: () => void
	customStyle?: string
}

export const MainButton = ({ children, onClick, customStyle }: BtnProps) => {
	return (
		<button
			onClick={onClick}
			className={`w-full py-2 px-4 rounded-2xl transition-colors duration-150 border-2 border-transparent bg-yellow-200 hover:bg-transparent hover:border-yellow-200 ${customStyle}`}
		>
			{children}
		</button>
	)
}
