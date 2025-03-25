import { weatherApiAxios } from '@/config/weatherapiAxios'

export const getCurrent = async (query: string) => {
	const params = {
		key: process.env.WEATHERAPI_APIKEY,
		q: query,
		aqi: 'yes',
	}

	const current: WeatherAPIResponse = await weatherApiAxios
		.get('/current.json', { params })
		.then((res) => res.data)
		.catch((err) => console.error(err))

	return current
}
