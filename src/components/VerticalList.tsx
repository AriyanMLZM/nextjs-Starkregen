const items = ['item1', 'item2', 'item3']

type ItemProps = {
	item: string
	ind: number
}

const Item = ({ item, ind }: ItemProps) => {
	const isLeft = ind % 2 !== 0
	return (
		<div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
			<div className={`w-5/12 p-4 flex ${isLeft ? 'justify-end' : ''}`}>
				<h3 className="font-bold text-lg">{item}</h3>
			</div>
			{/* Timeline dot and line */}
			<div className="w-2/12 flex justify-center items-center relative">
				<div className="h-full w-0.5 bg-white absolute top-0"></div>
				<div className="z-[1] w-4 h-4 rounded-full bg-bgColor border-4"></div>
			</div>
		</div>
	)
}

const VerticalList = () => {
	return (
		<section className="w-full flex-center">
			<div className="w-[50%]">
				{items.map((item, ind) => (
					<Item item={item} ind={ind} />
				))}
			</div>
		</section>
	)
}

export default VerticalList
