'use client'
import { IconSearch } from '@/icons'
import { useState } from 'react'

const items = ['shiraz - fars', 'tehran - tehran']

const Item = ({ item }: { item: string }) => {
	return (
		<div className="w-full p-[2px]">
			<span className="text-[0.7rem] text-white">{item}</span>
		</div>
	)
}

const Search = () => {
	const [search, setSearch] = useState<string>('')

	return (
		<div className="w-full max-w-[350px]">
			<label className="w-full flex-center">
				<input
					type="text"
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search Location"
					className="t-input"
				/>
				<IconSearch className="text-white text-[20px] translate-x-[-25px]" />
			</label>
			<section className="w-[30%] min-w-[150px] max-w-[300px] bg-bgColor rounded absolute translate-y-[10px]">
				{items.map((item) => (
					<Item key={item} item={item} />
				))}
			</section>
		</div>
	)
}

export default Search
