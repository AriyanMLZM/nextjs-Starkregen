import { Location, VerticalList } from './'
import { current } from '@/constants/forecast.json'

type Props = {
	cities: Cities
}

const HomePage = ({ cities }: Props) => {
	return (
		<>
			<Location />
			<VerticalList cities={cities} />
		</>
	)
}

export default HomePage
