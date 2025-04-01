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

export const getFullWeather = async (query: string) => {
	const params = {
		key: process.env.WEATHERAPI_APIKEY,
		q: query,
		aqi: 'yes',
		days: 7,
	}

	const fullWeather: { forecast: Forecast } = await weatherApiAxios
		.get('/forecast.json', { params })
		.then((res) => res.data)
		.catch((err) => console.log(err))

	return
}
