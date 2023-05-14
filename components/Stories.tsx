'use client'
import { useFetchAllStoriesQuery } from '@/store/services/StoriesService'
import Image from 'next/image'

export const Stories = () => {
	const { data, error, isLoading } = useFetchAllStoriesQuery('')
	return (
		<section className="py-6">
			<div className="flex items-center gap-6 h-[260px] overflow-hidden">
				{isLoading && <div>Loading...</div>}
				{error && <div>Stories not found</div>}
				{data &&
					data.map(story => (
						<div
							key={story._id}
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
