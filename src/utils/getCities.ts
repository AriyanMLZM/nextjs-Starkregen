import { weatherApiAxios } from '@/config/weatherapiAxios'

export const getCities = async (query: string) => {
	const cities: City[] = await weatherApiAxios
		.get(`/search.json?q=${query}&key=${process.env.WEATHERAPI_APIKEY}`)
		.then((res) => res.data)
		.catch((err) => console.log(err))

	return cities
}
