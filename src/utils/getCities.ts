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
