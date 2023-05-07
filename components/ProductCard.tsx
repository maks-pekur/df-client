import Image from 'next/image'

export const ProductCard = ({ product }) => {
	return (
		<article>
			<div>
				<div className="flex items-center justify-center">
					<Image
						src={product.imageLinks[0]}
						alt={product.name}
						width={250}
						height={250}
					/>
				</div>
				<div className="space-y-2">
					<div className="text-lg">{product.name}</div>
					<div className="text-sm text-gray-500">{product.description}</div>
				</div>
			</div>
		</article>
	)
}
