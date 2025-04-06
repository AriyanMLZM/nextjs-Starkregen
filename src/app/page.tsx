import { HomePage } from '@/containers'
import { getLocation, getWeather } from '@/utils/getWeather'

const citiesList = ['Paris', 'London', 'Moscow']

const Home = async () => {
	const cities: Cities = []

	for (let city of citiesList) {
		const { current } = await getWeather(city)
		cities.push({ name: city, current })
	}

	return <HomePage cities={cities} />
}

export default Home
