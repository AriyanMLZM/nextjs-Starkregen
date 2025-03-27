'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IconSearch } from '@/icons'
import { Loader } from './'
import Link from 'next/link'

const fetchSearch = async (search: string) => {
	const { data }: { data: City[] } = await axios.get(`/api/search/${search}`)
	return data
}

const Item = ({
	item,
	setSearch,
}: {
	item: City
	setSearch: Dispatch<SetStateAction<string>>
}) => {
	return (
		<div className="w-full p-[2px]">
			<Link
				onClick={() => setSearch('')}
				href={`/city/${item.name}`}
				className="text-[0.7rem] text-white"
			>
				span{item.name} - {item.region} - {item.country}
			</Link>
		</div>
	)
}

const Search = () => {
	const [search, setSearch] = useState<string>('')

	const { data, isLoading, isError } = useQuery({
		queryKey: ['searchData', search],
		queryFn: () => fetchSearch(search),
		enabled: !!search,
	})

	return (
		<div className="w-full max-w-[350px]">
			<label className="w-full flex-center">
				<input
					type="text"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search Location"
					className="t-input"
				/>
				<IconSearch className="text-white text-[20px] translate-x-[-25px]" />
			</label>
			{isLoading && (
				<div className="absolute mt-[10px]">
					<Loader width="30px" height="40px" size="20px" />
				</div>
			)}
			{isError && (
				<span className="text-white text-[0.8rem] p-[10px] h-[20px] mt-[10px] absolute">
					Network error!
				</span>
			)}
			{data && (
				<section className="w-[30%] min-w-[150px] max-w-[300px] bg-bgColor rounded absolute mt-[10px]">
					{data.map((item) => (
						<Item key={item.id} item={item} setSearch={setSearch} />
					))}
				</section>
			)}
		</div>
	)
}

export default Search
