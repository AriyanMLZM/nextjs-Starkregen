import { IconSearch } from '@/icons'

const Search = () => {
	return (
		<label className="w-full flex-center">
			<input type="text" placeholder="Search Location" className="t-input" />
			<IconSearch className="text-white text-[20px] translate-x-[-25px]" />
		</label>
	)
}

export default Search
