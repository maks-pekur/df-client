import Image from 'next/image'

export const Stories = () => {
	return (
		<section className="py-6">
			<div className="max-w-6xl mx-auto flex items-center gap-6 h-[260px] overflow-hidden">
				{stories.map(story => (
					<div
						key={story.id}
						className="w-[210px] h-full rounded-3xl border-[3px] border-red-500 p-1 cursor-pointer"
					>
						<div className="w-full h-full rounded-2xl overflow-hidden">
							<Image
								src={story.image}
								alt={story.title}
								width={200}
								height={300}
							/>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
