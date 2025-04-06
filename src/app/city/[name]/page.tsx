import { getWeather } from '@/utils/getWeather'
import { CityPage } from '@/containers'

type Props = {
	params: Promise<{ name: string }>
}

const page = async ({ params }: Props) => {
	const { name } = await params

	const forecast: WeatherAPIResponse = await getWeather(name)

	return <CityPage forecast={forecast} />
}

export default page
