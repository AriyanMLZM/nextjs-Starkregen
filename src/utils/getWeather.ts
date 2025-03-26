import { weatherApiAxios } from '@/config/weatherapiAxios'

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

export const getFullWeather = async (query: string) => {
	const paramsCurrent = {
		key: process.env.WEATHERAPI_APIKEY,
		q: query,
		aqi: 'yes',
	}

	const current: WeatherAPICurrent = await weatherApiAxios
		.get('/current.json', { params: paramsCurrent })
		.then((res) => res.data)
		.catch((err) => console.error(err))

	const paramsForecast = {
		key: process.env.WEATHERAPI_APIKEY,
		q: query,
		days: 5,
	}

	const { forecast }: { forecast: Forecast } = await weatherApiAxios
		.get('/forecast.json', { params: paramsForecast })
		.then((res) => res.data)
		.catch((err) => console.error(err))

	return { ...current, forecast }
}
