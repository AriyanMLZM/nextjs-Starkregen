import { weatherApiAxios } from '@/configs/weatherapiAxios'

export const getCities = async (query: string) => {
	const params = {
		key: process.env.WEATHERAPI_APIKEY,
		q: query,
	}

	const cities: City[] = await weatherApiAxios
		.get('/search.json', { params })
		.then((res) => res.data)
		.catch((err) => console.log(err))

	return cities
}

export const getWeather = async (query: string) => {
	const params = {
		key: process.env.WEATHERAPI_APIKEY,
		q: query,
		aqi: 'yes',
		days: 7,
	}

	const weather: WeatherAPIResponse = await weatherApiAxios
		.get('/forecast.json', { params })
		.then((res) => res.data)
		.catch((err) => console.log(err))

	return weather
}

export const getLocation = async (loc: Loc) => {
	const params = {
		key: process.env.WEATHERAPI_APIKEY,
		...loc,
	}

	const weather: { location: Location; current: Current } =
		await weatherApiAxios
			.get('/current.json', { params })
			.then((res) => res.data)
			.catch((err) => console.log(err))

	return weather
}
