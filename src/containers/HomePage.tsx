import { Location, VerticalList } from './'
import { current } from '@/constants/forecast.json'

const cities = [
	{
		name: 'Paris',
		current,
	},
	{
		name: 'London',
		current,
	},
	{
		name: 'Moscow',
		current,
	},
]

const HomePage = () => {
	return (
		<>
			<Location />
			<VerticalList cities={cities} />
		</>
	)
}

export default HomePage
