'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchMenu } from '@/store/features/menuSlice'
import { useEffect } from 'react'
import { MenuItem } from './MenuItem'

export const MenuList = () => {
	const dispatch = useAppDispatch()
	const { data, status, error } = useAppSelector(state => state.menu)

	useEffect(() => {
		dispatch(fetchMenu())
	}, [])

	return (
		<div className="py-10">
			{status === 'idle' && 'pending' && <div>Loading...</div>}
			{status === 'failed' && <div>{error}</div>}
			<div className="grid grid-cols-4 gap-10">
				{data && data.map(item => <MenuItem key={item._id} item={item} />)}
			</div>
		</div>
	)
}
