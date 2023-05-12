const s = {
	h1: '',
	h2: 'text-3xl py-4',
	h3: 'text-2xl pb-4',
	h4: '',
}

export const Heading = ({ children, tag }) => {
	const Tag = tag || div
	return <Tag className={s[tag]}>{children}</Tag>
}
